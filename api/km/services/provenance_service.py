# KM-CUSTOM

from __future__ import annotations

from typing import Any

from api.db.db_models import DB
from api.db.db_utils import bulk_insert_into_db
from api.db.km_models import KmProvenance


class ProvenanceService:
    """
    Minimal provenance writer.
    v1: batch insert provenance rows for later evidence_trace/audit.
    """

    @classmethod
    def record_many(cls, rows: list[dict[str, Any]]):
        if not rows:
            return 0
        # `bulk_insert_into_db` will create table if missing and fill timestamps.
        bulk_insert_into_db(KmProvenance, rows, replace_on_conflict=False)
        return len(rows)

    @classmethod
    def list_by_artifact(cls, tenant_id: str, artifact_type: str, artifact_id: str, limit: int = 1000) -> list[dict[str, Any]]:
        with DB.connection_context():
            qs = (
                KmProvenance.select()
                .where(
                    KmProvenance.tenant_id == tenant_id,
                    KmProvenance.artifact_type == artifact_type,
                    KmProvenance.artifact_id == artifact_id,
                )
                .order_by(KmProvenance.create_time.desc())
                .limit(limit)
            )
            return [p.to_dict() for p in qs]

