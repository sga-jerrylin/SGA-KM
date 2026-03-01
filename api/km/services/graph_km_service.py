# KM-CUSTOM

from __future__ import annotations

from typing import Any

from api.db.db_models import DB
from api.db.km_models import KmOntology
from common.misc_utils import get_uuid


class GraphKmService:
    """
    v1 stub: ontology management + minimal graph query façade.
    Graph storage is still owned by existing GraphRAG; KM is an orchestrator.
    """

    @classmethod
    def upsert_ontology_ignore(
        cls,
        *,
        tenant_id: str,
        kb_id: str,
        ontology_type: str,
        name: str,
        description: str | None = None,
        source: str = "auto",
    ) -> dict[str, Any]:
        if not all([tenant_id, kb_id, ontology_type, name]):
            return {"ok": False, "message": "tenant_id/kb_id/ontology_type/name are required."}

        with DB.connection_context():
            q = (
                KmOntology.insert(
                    id=get_uuid(),
                    tenant_id=tenant_id,
                    kb_id=kb_id,
                    ontology_type=ontology_type,
                    name=name,
                    description=description,
                    source=source,
                    instance_count=0,
                    is_active=True,
                )
                .on_conflict(action="IGNORE")
            )
            q.execute()

            obj = KmOntology.get_or_none(
                KmOntology.tenant_id == tenant_id,
                KmOntology.kb_id == kb_id,
                KmOntology.ontology_type == ontology_type,
                KmOntology.name == name,
            )
            return {"ok": True, "data": obj.to_dict() if obj else None}

    @classmethod
    def list_ontology(cls, *, tenant_id: str, kb_id: str, ontology_type: str | None = None, limit: int = 500) -> list[dict[str, Any]]:
        with DB.connection_context():
            qs = KmOntology.select().where(KmOntology.tenant_id == tenant_id, KmOntology.kb_id == kb_id)
            if ontology_type:
                qs = qs.where(KmOntology.ontology_type == ontology_type)
            qs = qs.order_by(KmOntology.create_time.desc()).limit(limit)
            return [o.to_dict() for o in qs]

    @classmethod
    def neighbors(cls, *args, **kwargs) -> dict[str, Any]:
        # TODO(KM): provide structured graph access once Graph storage is formalized (Neo4j or graph API layer).
        return {"nodes": [], "edges": []}

    @classmethod
    def find_path(cls, *args, **kwargs) -> dict[str, Any]:
        return {"paths": []}

