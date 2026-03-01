# KM-CUSTOM

from __future__ import annotations

import logging
from dataclasses import dataclass
from datetime import datetime
from typing import Any

import xxhash

from api.db.db_models import DB
from api.db.km_models import KmIngestJob
from api.db.services.file_service import FileService
from api.db.services.knowledgebase_service import KnowledgebaseService
from api.db.services.task_service import cancel_all_task_of
from api.km.services.event_service import EventService
from common.constants import RetCode
from common.misc_utils import get_uuid, thread_pool_exec
from rag.utils.redis_conn import REDIS_CONN


STATE_TRANSITIONS: dict[str, list[str]] = {
    "queued": ["downloading", "parsing", "cancelled", "failed"],
    "downloading": ["parsing", "failed", "cancelled"],
    "parsing": ["chunking", "failed", "cancelled"],
    "chunking": ["embedding", "failed", "cancelled"],
    "embedding": ["extracting_kg", "completed", "failed", "cancelled"],
    "extracting_kg": ["resolving_entities", "completed", "failed", "cancelled"],
    "resolving_entities": ["upserting_graph", "failed", "cancelled"],
    "upserting_graph": ["completed", "failed", "cancelled"],
    "completed": [],
    "failed": ["queued"],
    "cancelled": [],
    "partial_completed": ["queued"],
}


@dataclass
class SubmitResult:
    ok: bool
    code: int = RetCode.SUCCESS
    message: str = ""
    data: dict | list | None = None


class IngestService:
    @classmethod
    def _job_to_dict(cls, job: KmIngestJob) -> dict[str, Any]:
        return {
            "job_id": job.id,
            "tenant_id": job.tenant_id,
            "kb_id": job.kb_id,
            "state": job.state,
            "progress_percent": job.progress_percent,
            "retryable": bool(job.retryable),
            "retry_count": job.retry_count,
            "max_retries": job.max_retries,
            "error_code": job.error_code,
            "error_msg": job.error_msg,
            "source_type": job.source_type,
            "source_url": job.source_url,
            "source_filename": job.source_filename,
            "content_hash": job.content_hash,
            "document_id": job.document_id,
            "chunk_count": job.chunk_count,
            "entity_count": job.entity_count,
            "relation_count": job.relation_count,
            "principal_id": job.principal_id,
            "delegator_id": job.delegator_id,
            "trace_id": job.trace_id,
            "started_at": job.started_at.isoformat() if job.started_at else None,
            "completed_at": job.completed_at.isoformat() if job.completed_at else None,
            "eta_seconds": job.eta_seconds,
            "pipeline_config": job.pipeline_config or {},
            "created_at": job.create_date.isoformat() if job.create_date else None,
        }

    @classmethod
    def _compute_hash(cls, blob: bytes) -> str:
        try:
            h = xxhash.xxh64()
            h.update(blob)
            return h.hexdigest()
        except Exception:
            # Fallback: stable but slower
            import hashlib

            return hashlib.sha256(blob).hexdigest()

    @classmethod
    def _default_pipeline_config(cls, params: dict) -> dict:
        cfg = params.get("pipeline_config") or {}
        if not isinstance(cfg, dict):
            cfg = {}
        cfg.setdefault("extract_entities", True)
        cfg.setdefault("language", params.get("language") or "Chinese")
        cfg.setdefault("priority", int(params.get("priority") or 0))
        return cfg

    @classmethod
    async def submit_files(cls, tenant_id: str, form: dict, file_objs: list) -> SubmitResult:
        """
        One-call ingest (multipart/form-data): upload file(s) -> create job(s) (queued)
        Job runner will advance state machine and trigger RAGFlow pipeline + GraphRAG.
        """
        kb_id = form.get("kb_id") or form.get("dataset_id")
        if not kb_id:
            return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="`kb_id` is required.")

        ok, kb = KnowledgebaseService.get_by_id(kb_id)
        if not ok:
            return SubmitResult(ok=False, code=RetCode.DATA_ERROR, message=f"Dataset not found: {kb_id}")

        base_params = dict(form)
        base_params["kb_id"] = kb_id
        base_params["source_type"] = "file"
        base_params["pipeline_config"] = cls._default_pipeline_config(base_params)

        idempotency_key = base_params.get("idempotency_key")
        multi = len(file_objs) > 1 and bool(idempotency_key)

        # Upload documents (blocking) and get (doc_dict, blob_bytes) list.
        err, uploaded = await thread_pool_exec(FileService.upload_document, kb, file_objs, tenant_id, src="local")
        if err:
            return SubmitResult(ok=False, code=RetCode.SERVER_ERROR, message="\n".join(err))

        results: list[dict] = []
        for doc_dict, blob in uploaded:
            params = dict(base_params)
            params["source_filename"] = doc_dict.get("name") or doc_dict.get("filename") or ""
            params["document_id"] = doc_dict.get("id")
            params["content_hash"] = cls._compute_hash(blob)

            if multi:
                params["idempotency_key"] = f"{idempotency_key}:{params['source_filename']}"

            res = cls._create_job_or_duplicate(tenant_id, params)
            results.append(res)

        return SubmitResult(ok=True, data=results)

    @classmethod
    async def submit(cls, tenant_id: str, params: dict) -> SubmitResult:
        """
        JSON submit for url/text.
        """
        if not isinstance(params, dict):
            return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="JSON body must be an object.")

        kb_id = params.get("kb_id") or params.get("dataset_id")
        if not kb_id:
            return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="`kb_id` is required.")
        ok, _ = KnowledgebaseService.get_by_id(kb_id)
        if not ok:
            return SubmitResult(ok=False, code=RetCode.DATA_ERROR, message=f"Dataset not found: {kb_id}")

        source_type = params.get("source_type") or "url"
        if source_type not in ("url", "text"):
            return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="`source_type` must be `url` or `text` for JSON submit.")

        params = dict(params)
        params["kb_id"] = kb_id
        params["source_type"] = source_type
        params["pipeline_config"] = cls._default_pipeline_config(params)

        # Best-effort pre-hash (url/text). Real content hash will be set later for url.
        if source_type == "url":
            url = params.get("source_url") or params.get("url")
            if not url:
                return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="`source_url` is required for url ingest.")
            params["source_url"] = url
            params.setdefault("content_hash", cls._compute_hash(url.encode("utf-8")))
        else:
            text = params.get("text") or params.get("source_text")
            if not text:
                return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="`text` is required for text ingest.")
            params["source_filename"] = params.get("source_filename") or "input.txt"
            params["content_hash"] = cls._compute_hash(text.encode("utf-8"))

        res = cls._create_job_or_duplicate(tenant_id, params)
        return SubmitResult(ok=True, data=res)

    @classmethod
    def status(cls, tenant_id: str, job_id: str) -> SubmitResult:
        with DB.connection_context():
            job = KmIngestJob.get_or_none(
                KmIngestJob.id == job_id,
                KmIngestJob.tenant_id == tenant_id,
            )
            if not job:
                return SubmitResult(ok=False, code=RetCode.DATA_ERROR, message="Job not found.")
            return SubmitResult(ok=True, data=cls._job_to_dict(job))

    @classmethod
    def cancel(cls, tenant_id: str, job_id: str) -> SubmitResult:
        with DB.connection_context():
            job = KmIngestJob.get_or_none(
                KmIngestJob.id == job_id,
                KmIngestJob.tenant_id == tenant_id,
            )
            if not job:
                return SubmitResult(ok=False, code=RetCode.DATA_ERROR, message="Job not found.")

            if job.state in ("completed", "failed", "cancelled"):
                return SubmitResult(ok=True, data=cls._job_to_dict(job))

            # Atomic conditional update to prevent TOCTOU race with job_runner
            rows = (
                KmIngestJob.update(
                    state="cancelled",
                    completed_at=datetime.now(),
                    retryable=False,
                )
                .where(
                    KmIngestJob.id == job_id,
                    KmIngestJob.state.not_in(["completed", "failed", "cancelled"]),
                )
                .execute()
            )
            if rows == 0:
                # Job was already transitioned by job_runner
                job = KmIngestJob.get_or_none(KmIngestJob.id == job_id)
                return SubmitResult(ok=True, data=cls._job_to_dict(job) if job else {"job_id": job_id})

        # Cancel downstream GraphRAG (uses has_canceled(task_id))
        try:
            REDIS_CONN.set(f"{job_id}-cancel", "x", exp=3600)
        except Exception as e:
            logging.warning(f"[KM] set cancel key failed: {e!r}")

        # Cancel RAGFlow tasks for this doc (best-effort)
        if job.document_id:
            try:
                cancel_all_task_of(job.document_id)
            except Exception as e:
                logging.warning(f"[KM] cancel_all_task_of failed: {e!r}")

        EventService.publish(job_id, tenant_id, "job.cancelled", {"state": "cancelled"})
        return SubmitResult(ok=True, data={"job_id": job_id, "state": "cancelled"})

    @classmethod
    def retry(cls, tenant_id: str, job_id: str) -> SubmitResult:
        with DB.connection_context():
            job = KmIngestJob.get_or_none(
                KmIngestJob.id == job_id,
                KmIngestJob.tenant_id == tenant_id,
            )
            if not job:
                return SubmitResult(ok=False, code=RetCode.DATA_ERROR, message="Job not found.")

            if job.state not in ("failed", "partial_completed"):
                return SubmitResult(ok=False, code=RetCode.ARGUMENT_ERROR, message="Only failed jobs can be retried.")

            if job.retry_count >= job.max_retries:
                return SubmitResult(ok=False, code=RetCode.OPERATING_ERROR, message="Max retries exceeded.")

            job.retry_count += 1
            job.state = "queued"
            job.progress_percent = 0
            job.error_code = None
            job.error_msg = None
            job.retryable = True
            job.started_at = None
            job.completed_at = None
            # Clear document_id on retry for URL jobs to avoid orphaned documents
            if job.source_type == "url":
                job.document_id = None
            job.save()

        try:
            REDIS_CONN.delete(f"{job_id}-cancel")
        except Exception:
            pass

        EventService.publish(job_id, tenant_id, "job.retry", {"state": "queued"})
        return SubmitResult(ok=True, data={"job_id": job_id, "state": "queued"})

    @classmethod
    def _create_job_or_duplicate(cls, tenant_id: str, params: dict) -> dict:
        """
        Create a queued job, or return existing job if idempotent/duplicate.
        """
        kb_id = params.get("kb_id")
        idempotency_key = params.get("idempotency_key")
        content_hash = params.get("content_hash")
        force = bool(params.get("force", False))

        with DB.connection_context():
            if idempotency_key:
                existing = KmIngestJob.get_or_none(
                    KmIngestJob.tenant_id == tenant_id,
                    KmIngestJob.idempotency_key == idempotency_key,
                )
                if existing:
                    return {"status": "idempotent_replay", **cls._job_to_dict(existing)}

            if (not force) and content_hash:
                dup = KmIngestJob.get_or_none(
                    KmIngestJob.tenant_id == tenant_id,
                    KmIngestJob.kb_id == kb_id,
                    KmIngestJob.content_hash == content_hash,
                    KmIngestJob.state == "completed",
                )
                if dup:
                    return {
                        "status": "duplicate",
                        "existing_job_id": dup.id,
                        "content_hash": content_hash,
                    }

            job = KmIngestJob.create(
                id=get_uuid(),
                tenant_id=tenant_id,
                idempotency_key=idempotency_key,
                source_type=params.get("source_type") or "file",
                source_url=params.get("source_url"),
                source_filename=params.get("source_filename"),
                content_hash=content_hash,
                kb_id=kb_id,
                state="queued",
                progress_percent=0,
                retryable=True,
                retry_count=0,
                max_retries=int(params.get("max_retries") or 3),
                document_id=params.get("document_id"),
                pipeline_config=params.get("pipeline_config") or {},
                principal_id=params.get("principal_id"),
                delegator_id=params.get("delegator_id"),
                trace_id=params.get("trace_id"),
            )

        EventService.publish(job.id, tenant_id, "job.created", {"state": "queued"})
        return {"status": "created", **cls._job_to_dict(job)}

