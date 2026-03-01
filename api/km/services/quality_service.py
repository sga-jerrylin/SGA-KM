# KM-CUSTOM

from __future__ import annotations

from datetime import datetime
from typing import Any

from api.db.db_models import DB
from api.db.km_models import KmFeedback, KmProvenance


class QualityService:
    """
    v1: minimal trust/freshness signals. Real evaluation + correction loop comes later.
    """

    @classmethod
    def compute_trust_score(cls, *, tenant_id: str, artifact_type: str, artifact_id: str) -> float:
        with DB.connection_context():
            provs = list(
                KmProvenance.select().where(
                    KmProvenance.tenant_id == tenant_id,
                    KmProvenance.artifact_type == artifact_type,
                    KmProvenance.artifact_id == artifact_id,
                )
            )
            fbs = list(
                KmFeedback.select().where(
                    KmFeedback.tenant_id == tenant_id,
                    KmFeedback.artifact_type == artifact_type,
                    KmFeedback.artifact_id == artifact_id,
                )
            )

        if not provs:
            return 0.5

        # Cross-source validation (0..1)
        unique_sources = {p.source_doc_id for p in provs if p.source_doc_id}
        cross_validation = min(len(unique_sources) / 3.0, 1.0)

        # Freshness (0.5..1.0)
        most_recent = None
        try:
            most_recent = max((p.create_date for p in provs if p.create_date), default=None)
        except Exception:
            most_recent = None
        if not most_recent:
            freshness = 0.8
        else:
            days_old = max(0, (datetime.now() - most_recent).days)
            freshness = max(0.5, 1.0 - (days_old / 365.0))

        # Avg confidence (0..1)
        confs = [float(getattr(p, "confidence", 0.5) or 0.5) for p in provs]
        avg_conf = sum(confs) / max(1, len(confs))

        # Feedback score (0..1)
        pos = sum(1 for f in fbs if f.feedback_type == "positive")
        neg = sum(1 for f in fbs if f.feedback_type == "negative")
        fb_score = (pos + 1) / (pos + neg + 2)

        trust = 0.3 * avg_conf + 0.2 * cross_validation + 0.3 * freshness + 0.2 * fb_score
        return float(max(0.0, min(1.0, trust)))

    @classmethod
    async def apply_correction(cls, tenant_id: str, params: dict) -> dict[str, Any]:
        return {"ok": False, "message": "apply_correction not implemented yet (Phase 1 scaffold)."}

