# KM-CUSTOM

from __future__ import annotations

from datetime import datetime, timedelta
from typing import Any

from api.db.db_models import DB
from api.db.km_models import KmMemory
from api.db.services.llm_service import LLMBundle
from common import settings
from common.constants import LLMType, RetCode
from common.doc_store.doc_store_base import MatchDenseExpr, OrderByExpr
from common.misc_utils import get_uuid, thread_pool_exec
from rag.nlp import rag_tokenizer


_SUPPORTED_EMBED_DIMS = {512, 768, 1024, 1536}


class KmMemoryService:
    @classmethod
    def _memory_to_dict(cls, m: KmMemory, *, score: float | None = None) -> dict[str, Any]:
        return {
            "id": m.id,
            "tenant_id": m.tenant_id,
            "content": m.content,
            "content_type": m.content_type,
            "scope": m.scope,
            "owner_id": m.owner_id,
            "space_id": m.space_id,
            "ttl_seconds": m.ttl_seconds,
            "expires_at": m.expires_at.isoformat() if m.expires_at else None,
            "importance": float(m.importance or 0.0),
            "access_count": int(m.access_count or 0),
            "last_accessed_at": m.last_accessed_at.isoformat() if m.last_accessed_at else None,
            "embedding_id": m.embedding_id,
            "principal_id": m.principal_id,
            "trace_id": m.trace_id,
            "source_ref": m.source_ref,
            "is_archived": bool(m.is_archived),
            "is_deleted": bool(m.is_deleted),
            "_score": score,
        }

    @classmethod
    def _compute_expiry(cls, ttl_seconds: int | None) -> datetime | None:
        if ttl_seconds is None:
            return None
        try:
            ttl = int(ttl_seconds)
        except Exception:
            return None
        if ttl <= 0:
            return None
        return datetime.now() + timedelta(seconds=ttl)

    @classmethod
    async def upsert(cls, tenant_id: str, params: dict) -> tuple[bool, int, str, dict | None]:
        content = (params or {}).get("content")
        if not content:
            return False, RetCode.ARGUMENT_ERROR, "`content` is required.", None

        content_type = (params or {}).get("content_type") or "text"
        scope = (params or {}).get("scope") or "personal"
        owner_id = (params or {}).get("owner_id")
        space_id = (params or {}).get("space_id")
        importance = float((params or {}).get("importance") or 0.5)
        ttl_seconds = (params or {}).get("ttl_seconds")
        principal_id = (params or {}).get("principal_id")
        trace_id = (params or {}).get("trace_id")
        source_ref = (params or {}).get("source_ref")

        embd_mdl = LLMBundle(tenant_id, LLMType.EMBEDDING)
        embedding, _ = await thread_pool_exec(embd_mdl.encode, [content])
        if not embedding or not embedding[0]:
            return False, RetCode.SERVER_ERROR, "Embedding generation failed.", None

        dims = len(embedding[0])
        if dims not in _SUPPORTED_EMBED_DIMS:
            return False, RetCode.OPERATING_ERROR, f"Embedding dims {dims} not supported by conf/mapping.json.", None

        expires_at = cls._compute_expiry(ttl_seconds)

        with DB.connection_context():
            m = KmMemory.create(
                id=get_uuid(),
                tenant_id=tenant_id,
                content=content,
                content_type=content_type,
                scope=scope,
                owner_id=owner_id,
                space_id=space_id,
                ttl_seconds=ttl_seconds,
                expires_at=expires_at,
                importance=importance,
                principal_id=principal_id,
                trace_id=trace_id,
                source_ref=source_ref,
                is_archived=False,
                is_deleted=False,
            )

        index_name = f"km_memory_{tenant_id}"
        # dataset_id is unused by ES backend, but required by interface
        if not settings.docStoreConn.index_exist(index_name, ""):
            settings.docStoreConn.create_idx(index_name, "", vector_size=dims, parser_id=None)

        content_ltks = rag_tokenizer.tokenize(content)
        content_sm_ltks = rag_tokenizer.fine_grained_tokenize(content_ltks)

        vec_field = f"q_{dims}_vec"
        es_doc = {
            "id": m.id,
            "tenant_id": tenant_id,
            "scope_kwd": scope,
            "owner_id": owner_id or "",
            "space_id": space_id or "",
            "content_type_kwd": content_type,
            "importance_flt": importance,
            "content_ltks": content_ltks,
            "content_sm_ltks": content_sm_ltks,
            vec_field: list(embedding[0]),
        }
        await thread_pool_exec(settings.docStoreConn.insert, [es_doc], index_name, None)

        return True, RetCode.SUCCESS, "", cls._memory_to_dict(m)

    @classmethod
    async def query(cls, tenant_id: str, params: dict) -> tuple[bool, int, str, dict | None]:
        query = (params or {}).get("query")
        if not query:
            return False, RetCode.ARGUMENT_ERROR, "`query` is required.", None

        scope = (params or {}).get("scope")
        owner_id = (params or {}).get("owner_id")
        space_id = (params or {}).get("space_id")
        top_k = int((params or {}).get("top_k") or 10)
        min_similarity = float((params or {}).get("min_similarity") or 0.1)
        content_types = (params or {}).get("content_types") or []
        include_archived = bool((params or {}).get("include_archived", False))

        embd_mdl = LLMBundle(tenant_id, LLMType.EMBEDDING)
        qv, _ = await thread_pool_exec(embd_mdl.encode_queries, query)
        if not qv:
            return False, RetCode.SERVER_ERROR, "Embedding generation failed.", None
        if isinstance(qv, list) and qv and isinstance(qv[0], list):
            # Some backends return [[...]]
            qv = qv[0]
        dims = len(qv)
        if dims not in _SUPPORTED_EMBED_DIMS:
            return False, RetCode.OPERATING_ERROR, f"Embedding dims {dims} not supported by conf/mapping.json.", None

        index_name = f"km_memory_{tenant_id}"
        if not settings.docStoreConn.index_exist(index_name, ""):
            return True, RetCode.SUCCESS, "", {"items": [], "total": 0}

        condition: dict[str, Any] = {"tenant_id": tenant_id}
        if scope:
            condition["scope_kwd"] = scope
        if owner_id:
            condition["owner_id"] = owner_id
        if space_id:
            condition["space_id"] = space_id
        if content_types:
            condition["content_type_kwd"] = list(content_types)

        match = MatchDenseExpr(
            vector_column_name=f"q_{dims}_vec",
            embedding_data=qv,
            embedding_data_type="float",
            distance_type="cosine",
            topn=top_k,
            extra_options={"similarity": min_similarity},
        )
        res = await thread_pool_exec(
            settings.docStoreConn.search,
            ["tenant_id", "scope_kwd", "owner_id", "space_id", "content_type_kwd", "importance_flt", "_score"],
            [],
            condition,
            [match],
            OrderByExpr(),
            0,
            top_k,
            index_name,
            [],
        )

        ids = settings.docStoreConn.get_doc_ids(res) if res else []
        if not ids:
            return True, RetCode.SUCCESS, "", {"items": [], "total": 0}

        fields = settings.docStoreConn.get_fields(res, ["_score"]) if res else {}

        now = datetime.now()
        with DB.connection_context():
            mems = list(KmMemory.select().where((KmMemory.tenant_id == tenant_id) & (KmMemory.id.in_(ids))))

            by_id = {m.id: m for m in mems}
            items = []
            for mid in ids:
                m = by_id.get(mid)
                if not m:
                    continue
                if m.is_deleted:
                    continue
                if m.expires_at and m.expires_at <= now:
                    continue
                if (not include_archived) and m.is_archived:
                    continue
                m.access_count = int(m.access_count or 0) + 1
                m.last_accessed_at = now
                m.save()

                score = None
                try:
                    score = float((fields.get(mid) or {}).get("_score"))
                except Exception:
                    score = None
                items.append(cls._memory_to_dict(m, score=score))

        return True, RetCode.SUCCESS, "", {"items": items, "total": len(items)}

    @classmethod
    async def delete(cls, tenant_id: str, memory_id: str) -> tuple[bool, int, str, dict | None]:
        if not memory_id:
            return False, RetCode.ARGUMENT_ERROR, "`memory_id` is required.", None

        with DB.connection_context():
            m = KmMemory.get_or_none(KmMemory.id == memory_id, KmMemory.tenant_id == tenant_id)
            if not m:
                return False, RetCode.DATA_ERROR, "Memory not found.", None
            m.is_deleted = True
            m.save()

        index_name = f"km_memory_{tenant_id}"
        if settings.docStoreConn.index_exist(index_name, ""):
            await thread_pool_exec(settings.docStoreConn.delete, {"id": memory_id}, index_name, None)

        return True, RetCode.SUCCESS, "", {"id": memory_id, "deleted": True}

