# KM-CUSTOM

from __future__ import annotations

import time

from rag.utils.redis_conn import REDIS_CONN


class RateLimiter:
    """
    Redis token-bucket limiter using the pre-registered Lua script (same as SDK agents).
    """

    @staticmethod
    async def check(tenant_id: str, action: str, *, limit: int, window_seconds: int, cost: int = 1) -> tuple[bool, int, int]:
        """
        Returns: (allowed, remaining, retry_after_seconds)
        """
        if limit <= 0 or window_seconds <= 0:
            return True, limit, 0

        capacity = int(limit)
        rate = float(limit) / float(window_seconds)
        now = time.time()

        key = f"km:rl:tb:{tenant_id}:{action}"
        try:
            res = REDIS_CONN.lua_token_bucket(
                keys=[key],
                args=[capacity, rate, now, int(cost)],
                client=REDIS_CONN.REDIS,
            )
            allowed = int(res[0]) == 1
            tokens_left = float(res[1])
            remaining = max(0, int(tokens_left))
            if allowed:
                return True, remaining, 0
            # Retry-after is best-effort (token bucket doesn't expose exact refill time here).
            return False, 0, max(1, int(window_seconds / max(1, limit)))
        except Exception:
            # Fail-open on Redis issues (avoid taking down KM).
            return True, limit, 0

