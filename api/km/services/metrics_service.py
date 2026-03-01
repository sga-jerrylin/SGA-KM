# KM-CUSTOM

from __future__ import annotations

from typing import Any


class MetricsService:
    """
    v1 stub: record basic counters/latency. Hook into your existing observability stack later.
    """

    @classmethod
    def incr(cls, name: str, value: int = 1, tags: dict[str, str] | None = None):
        return

    @classmethod
    def observe(cls, name: str, value: float, tags: dict[str, str] | None = None):
        return

    @classmethod
    def snapshot(cls) -> dict[str, Any]:
        return {"ok": True, "data": {}}

