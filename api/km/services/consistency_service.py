# KM-CUSTOM

from __future__ import annotations

from typing import Any


class ConsistencyService:
    """
    v1 stub: MySQL is the source of truth; ES/graph are derived indexes.
    Implement a reconciler later to heal drift (reindex/rebuild) after partial failures or model upgrades.
    """

    @classmethod
    async def reconcile(cls, tenant_id: str, *, index_name: str | None = None) -> dict[str, Any]:
        return {"ok": False, "message": "ConsistencyService.reconcile not implemented yet (Phase 1 scaffold)."}

