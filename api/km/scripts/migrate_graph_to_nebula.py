#!/usr/bin/env python
# KM-CUSTOM
from __future__ import annotations

import argparse
import asyncio
import logging
import os

from api.db.db_models import DB, Knowledgebase
from common import settings
from common.constants import StatusEnum
from common.graph_store import get_graph_store
from rag.graphrag.utils import get_graph

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)


async def migrate_kb(tenant_id: str, kb_id: str) -> dict:
    previous_backend = os.environ.get("GRAPH_STORE", "none")
    os.environ["GRAPH_STORE"] = "nebula"
    graph_store = get_graph_store()
    if not graph_store:
        return {"status": "error", "reason": "nebula graph_store unavailable", "tenant_id": tenant_id, "kb_id": kb_id}

    try:
        # Force ES path for source graph.
        os.environ["GRAPH_STORE"] = "none"
        graph = await get_graph(tenant_id, kb_id)
    finally:
        os.environ["GRAPH_STORE"] = "nebula"

    if graph is None or graph.number_of_nodes() == 0:
        os.environ["GRAPH_STORE"] = previous_backend
        return {"status": "skipped", "reason": "no_graph_in_es", "tenant_id": tenant_id, "kb_id": kb_id}

    space = graph_store.ensure_space(tenant_id, kb_id)
    graph_store.from_networkx(space, graph)
    os.environ["GRAPH_STORE"] = previous_backend

    logger.info(
        "migrated tenant=%s kb=%s space=%s nodes=%s edges=%s",
        tenant_id,
        kb_id,
        space,
        graph.number_of_nodes(),
        graph.number_of_edges(),
    )
    return {
        "status": "ok",
        "tenant_id": tenant_id,
        "kb_id": kb_id,
        "space": space,
        "nodes": graph.number_of_nodes(),
        "edges": graph.number_of_edges(),
    }


async def migrate_all() -> list[dict]:
    results: list[dict] = []
    with DB.connection_context():
        kbs = list(
            Knowledgebase.select(Knowledgebase.tenant_id, Knowledgebase.id)
            .where(Knowledgebase.status == StatusEnum.VALID.value)
            .order_by(Knowledgebase.create_time.asc())
        )

    for kb in kbs:
        try:
            results.append(await migrate_kb(kb.tenant_id, kb.id))
        except Exception as e:
            logger.exception("migration failed tenant=%s kb=%s", kb.tenant_id, kb.id)
            results.append({"status": "error", "tenant_id": kb.tenant_id, "kb_id": kb.id, "reason": repr(e)})
    return results


def _parse_args():
    parser = argparse.ArgumentParser(description="Migrate GraphRAG graph docs from ES JSON into NebulaGraph")
    parser.add_argument("--tenant_id", help="Tenant id")
    parser.add_argument("--kb_id", help="Knowledge base id")
    parser.add_argument("--all", action="store_true", dest="all_kb", help="Migrate all KBs")
    return parser.parse_args()


async def _main():
    args = _parse_args()
    settings.init_settings()

    if args.all_kb:
        results = await migrate_all()
        ok = sum(1 for r in results if r.get("status") == "ok")
        skipped = sum(1 for r in results if r.get("status") == "skipped")
        failed = sum(1 for r in results if r.get("status") == "error")
        logger.info("migration summary ok=%s skipped=%s failed=%s total=%s", ok, skipped, failed, len(results))
        return

    if not args.tenant_id or not args.kb_id:
        raise SystemExit("either --all OR both --tenant_id and --kb_id are required")

    result = await migrate_kb(args.tenant_id, args.kb_id)
    logger.info("migration result: %s", result)


if __name__ == "__main__":
    asyncio.run(_main())

