# KM-CUSTOM

from __future__ import annotations

import hmac
import json
import logging
import time
from hashlib import sha256

import httpx

from api.db.km_models import KmIngestEvent, KmWebhook
from api.db.db_models import DB
from common.misc_utils import get_uuid


class EventService:
    """
    Outbox pattern:
    1) Business op writes into `km_ingest_event` (delivered=False)
    2) Background runner scans pending events
    3) Push to subscribed webhooks
    4) Mark delivered=True on success (best-effort)
    """

    @classmethod
    def publish(cls, job_id: str, tenant_id: str, event_type: str, payload: dict):
        with DB.connection_context():
            KmIngestEvent.create(
                id=get_uuid(),
                job_id=job_id,
                tenant_id=tenant_id,
                event_type=event_type,
                payload=payload or {},
                delivered=False,
            )

    @classmethod
    async def deliver_pending(cls, batch_size: int = 100):
        """
        Best-effort delivery. Safe to call frequently.
        """
        pending = []
        with DB.connection_context():
            pending = list(
                KmIngestEvent.select()
                .where(KmIngestEvent.delivered == False)  # noqa: E712
                .order_by(KmIngestEvent.create_time)
                .limit(batch_size)
            )

        if not pending:
            return

        for evt in pending:
            try:
                await cls._deliver_one(evt)
                with DB.connection_context():
                    evt.delivered = True
                    evt.save()
            except Exception as e:
                logging.warning(f"[KM] webhook delivery failed event={evt.id} type={evt.event_type}: {e!r}")

    @classmethod
    async def _deliver_one(cls, evt: KmIngestEvent):
        webhooks = []
        with DB.connection_context():
            webhooks = list(
                KmWebhook.select()
                .where(
                    KmWebhook.tenant_id == evt.tenant_id,
                    KmWebhook.is_active == True,  # noqa: E712
                )
            )

        if not webhooks:
            return

        payload = {
            "id": evt.id,
            "tenant_id": evt.tenant_id,
            "job_id": evt.job_id,
            "event_type": evt.event_type,
            "payload": evt.payload or {},
            "create_time": evt.create_time,
        }
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")

        async with httpx.AsyncClient(timeout=10.0) as client:
            for wh in webhooks:
                if not wh.is_active:
                    continue
                if wh.event_types and evt.event_type not in (wh.event_types or []):
                    continue

                headers = {"Content-Type": "application/json"}
                if wh.secret:
                    sig = hmac.new(
                        wh.secret.encode("utf-8"),
                        msg=body,
                        digestmod=sha256,
                    ).hexdigest()
                    headers["X-KM-Signature"] = sig
                    headers["X-KM-Timestamp"] = str(int(time.time()))

                resp = await client.post(wh.url, content=body, headers=headers)
                if resp.status_code >= 400:
                    raise RuntimeError(f"Webhook responded {resp.status_code}: {resp.text[:200]}")
