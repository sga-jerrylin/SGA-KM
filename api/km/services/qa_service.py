# KM-CUSTOM

from __future__ import annotations

from typing import Any


class QAService:
    """
    v1 stub: Graph-Enhanced QA orchestrator.
    Implemented later: intent -> entity linking -> graph retrieve -> hybrid retrieve -> rerank -> generate -> verify.
    """

    @classmethod
    async def answer(cls, tenant_id: str, params: dict) -> dict[str, Any]:
        return {
            "ok": False,
            "message": "QAService.answer is not implemented yet (Phase 1 scaffold).",
        }

