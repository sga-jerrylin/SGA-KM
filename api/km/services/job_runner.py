# KM-CUSTOM

from __future__ import annotations

import asyncio
import logging
import os
from datetime import datetime

import httpx

from api.db.db_models import DB
from api.db.km_models import KmIngestJob
from api.db.services.document_service import DocumentService
from api.db.services.file_service import FileService
from api.db.services.knowledgebase_service import KnowledgebaseService
from api.db.services.llm_service import LLMBundle
from api.km.services.event_service import EventService
from common import settings
from common.constants import LLMType, TaskStatus
from common.misc_utils import get_uuid, thread_pool_exec
from rag.graphrag.general.index import run_graphrag_for_kb
from rag.utils.redis_conn import RedisDistributedLock, REDIS_CONN


class KmJobRunner:
    """
    Background coroutine that advances KM ingest state machine.
    This is an orchestrator: it reuses RAGFlow's document pipeline and GraphRAG.
    """

    POLL_INTERVAL_SECONDS = float(os.environ.get("KM_JOB_RUNNER_POLL_SECONDS", "2"))
    MAX_JOBS_PER_TICK = int(os.environ.get("KM_JOB_RUNNER_BATCH", "10"))
    JOB_LOCK_SECONDS = int(os.environ.get("KM_JOB_LOCK_SECONDS", str(24 * 60 * 60)))

    _started = False

    @classmethod
    async def run_forever(cls):
        if cls._started:
            return
        cls._started = True

        event_lock_value = get_uuid()
        event_lock = RedisDistributedLock(
            "km_event_delivery",
            lock_value=event_lock_value,
            timeout=60,
            blocking_timeout=1,
        )
        logging.info(f"[KM] KmJobRunner started event_lock_value={event_lock_value}")

        while True:
            try:
                if event_lock.acquire():
                    await EventService.deliver_pending()
                    event_lock.release()
                await cls._tick_once()
            except Exception:
                logging.exception("[KM] KmJobRunner loop error")
            await asyncio.sleep(cls.POLL_INTERVAL_SECONDS)

    @classmethod
    async def _tick_once(cls):
        jobs = []
        with DB.connection_context():
            jobs = list(
                KmIngestJob.select()
                .where(
                    KmIngestJob.state.in_(
                        [
                            "queued",
                            "downloading",
                            "parsing",
                            "chunking",
                            "embedding",
                            "extracting_kg",
                        ]
                    )
                )
                .order_by(KmIngestJob.create_time)
                .limit(cls.MAX_JOBS_PER_TICK)
        )

        for job in jobs:
            job_lock = RedisDistributedLock(
                f"km_job:{job.id}",
                lock_value=get_uuid(),
                timeout=cls.JOB_LOCK_SECONDS,
                blocking_timeout=0.1,
            )
            if not job_lock.acquire():
                continue
            try:
                # Refresh inside lock to avoid stale state.
                with DB.connection_context():
                    fresh = KmIngestJob.get_or_none(KmIngestJob.id == job.id)
                if not fresh:
                    continue
                if fresh.state not in {
                    "queued",
                    "downloading",
                    "parsing",
                    "chunking",
                    "embedding",
                    "extracting_kg",
                }:
                    continue
                await cls._advance(fresh)
            except Exception as e:
                logging.exception(f"[KM] advance job failed job={fresh.id}: {e!r}")
                cls._transition(fresh, "failed", error_code="KM_RUNNER_ERROR", error_msg=repr(e))
            finally:
                job_lock.release()

    @classmethod
    async def _advance(cls, job: KmIngestJob):
        if job.state == "queued":
            await cls._handle_queued(job)
            return
        if job.state == "downloading":
            await cls._handle_downloading(job)
            return
        if job.state in ("parsing", "chunking", "embedding"):
            await cls._check_ragflow_progress(job)
            return
        if job.state == "extracting_kg":
            await cls._handle_extracting_kg(job)
            return

    @classmethod
    async def _handle_queued(cls, job: KmIngestJob):
        if job.source_type == "url":
            cls._transition(job, "downloading")
            return

        if job.source_type in ("file", "text"):
            if not job.document_id:
                cls._transition(job, "failed", error_code="NO_DOCUMENT", error_msg="document_id missing for file/text job")
                return
            cls._transition(job, "parsing")
            await cls._trigger_ragflow_parse(job)
            return

        cls._transition(job, "failed", error_code="BAD_SOURCE_TYPE", error_msg=f"unknown source_type: {job.source_type}")

    @classmethod
    async def _handle_downloading(cls, job: KmIngestJob):
        url = job.source_url
        if not url:
            cls._transition(job, "failed", error_code="NO_URL", error_msg="source_url is empty")
            return

        ok, kb = KnowledgebaseService.get_by_id(job.kb_id)
        if not ok:
            cls._transition(job, "failed", error_code="KB_NOT_FOUND", error_msg=f"Dataset not found: {job.kb_id}")
            return

        # Download
        try:
            async with httpx.AsyncClient(timeout=60.0, follow_redirects=True) as client:
                resp = await client.get(url)
                resp.raise_for_status()
                blob = resp.content
        except Exception as e:
            cls._transition(job, "failed", error_code="DOWNLOAD_FAILED", error_msg=repr(e))
            return

        filename = job.source_filename
        if not filename:
            filename = url.split("?")[0].rstrip("/").split("/")[-1] or "downloaded.bin"
        if not filename or filename.startswith("."):
            filename = "downloaded.bin"
        if "." not in filename:
            # Try to keep FileService happy (requires supported suffix)
            filename = f"{filename}.pdf"

        # Upload as a document in KB
        class _BytesFile:
            def __init__(self, fn: str, b: bytes):
                self.filename = fn
                self._b = b

            def read(self):
                return self._b

        err, uploaded = await thread_pool_exec(FileService.upload_document, kb, [_BytesFile(filename, blob)], job.tenant_id, src="url")
        if err:
            cls._transition(job, "failed", error_code="UPLOAD_FAILED", error_msg="\n".join(err))
            return

        doc_dict, _ = uploaded[0]
        content_hash = cls._compute_hash(blob)

        with DB.connection_context():
            job.document_id = doc_dict.get("id")
            job.source_filename = doc_dict.get("name") or filename
            job.content_hash = content_hash
            job.save()

        cls._transition(job, "parsing")
        await cls._trigger_ragflow_parse(job)

    @classmethod
    async def _trigger_ragflow_parse(cls, job: KmIngestJob):
        ok, doc = DocumentService.get_by_id(job.document_id)
        if not ok or not doc:
            cls._transition(job, "failed", error_code="DOC_NOT_FOUND", error_msg=f"Document not found: {job.document_id}")
            return

        # Ensure cancellation key cleared for a new run
        try:
            REDIS_CONN.delete(f"{job.id}-cancel")
        except Exception:
            pass

        with DB.connection_context():
            if not job.started_at:
                job.started_at = datetime.now()
            job.save()

        await thread_pool_exec(DocumentService.run, job.tenant_id, doc.to_dict(), {})
        EventService.publish(job.id, job.tenant_id, "job.state_changed", {"state": "parsing"})

    @classmethod
    async def _check_ragflow_progress(cls, job: KmIngestJob):
        ok, doc = DocumentService.get_by_id(job.document_id)
        if not ok or not doc:
            cls._transition(job, "failed", error_code="DOC_NOT_FOUND", error_msg=f"Document not found: {job.document_id}")
            return

        if doc.run == TaskStatus.DONE:
            with DB.connection_context():
                job.chunk_count = int(doc.chunk_num or 0)
                job.progress_percent = max(job.progress_percent, 70)
                job.save()

            extract_entities = True
            try:
                extract_entities = bool((job.pipeline_config or {}).get("extract_entities", True))
            except Exception:
                extract_entities = True

            if extract_entities:
                cls._transition(job, "extracting_kg")
            else:
                cls._transition(job, "completed")
            return

        if doc.run == TaskStatus.FAIL:
            cls._transition(job, "failed", error_code="RAGFLOW_FAIL", error_msg=doc.progress_msg)
            return

        if doc.run == TaskStatus.CANCEL:
            cls._transition(job, "cancelled", error_code="RAGFLOW_CANCEL", error_msg=doc.progress_msg)
            return

        # Progress update (best-effort)
        try:
            p = float(doc.progress or 0.0)
        except Exception:
            p = 0.0
        progress_percent = max(job.progress_percent, int(p * 70))
        with DB.connection_context():
            job.progress_percent = progress_percent
            job.save()
        EventService.publish(job.id, job.tenant_id, "job.progress", {"state": job.state, "progress_percent": progress_percent})

    @classmethod
    async def _handle_extracting_kg(cls, job: KmIngestJob):
        ok, kb = KnowledgebaseService.get_by_id(job.kb_id)
        if not ok:
            cls._transition(job, "failed", error_code="KB_NOT_FOUND", error_msg=f"Dataset not found: {job.kb_id}")
            return

        # ES refresh lag: wait until at least one chunk becomes visible.
        await cls._wait_chunks_visible(job, max_wait_seconds=10)

        llm_bdl = LLMBundle(job.tenant_id, LLMType.CHAT, lang=kb.language)
        embd_bdl = LLMBundle(job.tenant_id, LLMType.EMBEDDING, llm_name=kb.embd_id, lang=kb.language)

        def cb(*, prog=None, msg=""):
            if msg:
                logging.info(f"[KM][GraphRAG][job={job.id}] {msg}")
            if prog is None:
                return
            try:
                percent = int(70 + float(prog) * 30)
            except Exception:
                percent = job.progress_percent
            with DB.connection_context():
                job.progress_percent = max(job.progress_percent, min(99, percent))
                job.save()

        row = {"id": job.id, "tenant_id": job.tenant_id, "kb_id": job.kb_id}

        try:
            with DB.connection_context():
                job.progress_percent = max(job.progress_percent, 80)
                job.save()
            result = await run_graphrag_for_kb(
                row=row,
                doc_ids=[job.document_id] if job.document_id else [],
                language=kb.language,
                kb_parser_config=kb.parser_config or {},
                chat_model=llm_bdl,
                embedding_model=embd_bdl,
                callback=cb,
            )
        except Exception as e:
            cls._transition(job, "failed", error_code="GRAPHRAG_FAIL", error_msg=repr(e))
            return

        with DB.connection_context():
            # Keep a small summary in pipeline_config for debugging.
            cfg = job.pipeline_config or {}
            cfg["graphrag_result"] = {
                "ok_docs": result.get("ok_docs", []),
                "failed_docs": result.get("failed_docs", []),
                "total_docs": result.get("total_docs", 0),
                "total_chunks": result.get("total_chunks", 0),
                "seconds": result.get("seconds", 0.0),
            }
            job.pipeline_config = cfg
            job.progress_percent = 100
            job.save()

        cls._transition(job, "completed")

    @classmethod
    async def _wait_chunks_visible(cls, job: KmIngestJob, max_wait_seconds: int = 10):
        deadline = asyncio.get_running_loop().time() + max_wait_seconds
        while True:
            try:
                chunks = await thread_pool_exec(
                    settings.retriever.chunk_list,
                    job.document_id,
                    job.tenant_id,
                    [job.kb_id],
                    1,  # max_count
                    0,  # offset
                    ["doc_id"],
                    False,
                )
                if chunks:
                    return
            except Exception:
                pass
            if asyncio.get_running_loop().time() >= deadline:
                return
            await asyncio.sleep(1)

    @classmethod
    def _transition(cls, job: KmIngestJob, new_state: str, *, error_code: str | None = None, error_msg: str | None = None):
        payload = {"state": new_state}
        with DB.connection_context():
            job.state = new_state
            if error_code:
                job.error_code = error_code
                payload["error_code"] = error_code
            if error_msg:
                job.error_msg = error_msg
                payload["error_msg"] = error_msg
            if new_state in ("completed", "failed", "cancelled", "partial_completed"):
                job.completed_at = datetime.now()
                if new_state == "completed":
                    job.retryable = False
            job.save()

        EventService.publish(job.id, job.tenant_id, "job.state_changed", payload)
        if new_state == "completed":
            EventService.publish(job.id, job.tenant_id, "job.completed", payload)
            # KM-CUSTOM: Trigger PageRank refresh asynchronously after graph build completion.
            try:
                from api.km.services.graph_maintenance import GraphMaintenanceService

                loop = asyncio.get_running_loop()
                loop.create_task(GraphMaintenanceService.recompute_pagerank(job.tenant_id, job.kb_id))
            except Exception as e:
                logging.warning("[KM] pagerank trigger skipped job=%s err=%s", job.id, e)
        if new_state == "failed":
            EventService.publish(job.id, job.tenant_id, "job.failed", payload)

    @classmethod
    def _compute_hash(cls, blob: bytes) -> str:
        import xxhash

        h = xxhash.xxh64()
        h.update(blob)
        return h.hexdigest()
