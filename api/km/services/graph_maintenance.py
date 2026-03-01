# KM-CUSTOM
from __future__ import annotations

import json
import logging

import xxhash

from common import settings
from common.graph_store import get_graph_store
from common.misc_utils import thread_pool_exec
from rag.nlp import search

logger = logging.getLogger(__name__)


class GraphMaintenanceService:
    @classmethod
    async def recompute_pagerank(cls, tenant_id: str, kb_id: str, callback=None) -> dict:
        """Recompute PageRank from Nebula graph and write back to Nebula + ES rank_flt."""
        graph_store = get_graph_store()
        if not graph_store:
            return {"status": "skipped", "reason": "graph_store disabled"}

        space = graph_store.space_name(tenant_id, kb_id)
        try:
            graph = await thread_pool_exec(graph_store.to_networkx, space)
        except Exception as e:
            return {"status": "error", "reason": f"load_graph_failed: {e!r}"}

        if graph.number_of_nodes() == 0:
            return {"status": "skipped", "reason": "empty_graph"}

        import networkx as nx

        pagerank = await thread_pool_exec(nx.pagerank, graph)

        update_errs = 0
        for name, score in pagerank.items():
            try:
                await thread_pool_exec(graph_store.update_node, space, name, {"pagerank": float(score)})
            except Exception:
                update_errs += 1

        index_name = search.index_name(tenant_id)
        for name, score in pagerank.items():
            chunk_id = xxhash.xxh64(f"{kb_id}:entity:{name}".encode()).hexdigest()
            try:
                await thread_pool_exec(
                    settings.docStoreConn.update,
                    {"id": chunk_id},
                    {"rank_flt": float(score)},
                    index_name,
                    kb_id,
                )
            except Exception as e:
                update_errs += 1
                logger.warning("[GraphMaint] rank_flt update failed chunk=%s err=%s", chunk_id, e)

        if callback:
            callback(msg=f"[GraphMaint] PageRank updated entities={len(pagerank)} errors={update_errs}")

        return {
            "status": "ok",
            "entities_updated": len(pagerank),
            "errors": update_errs,
        }

    @classmethod
    async def precompute_nhop(cls, tenant_id: str, kb_id: str, max_entities: int = 500, hop: int = 2) -> dict:
        """Precompute bounded n-hop paths and write to ES n_hop_with_weight."""
        graph_store = get_graph_store()
        if not graph_store:
            return {"status": "skipped", "reason": "graph_store disabled"}

        space = graph_store.space_name(tenant_id, kb_id)
        try:
            nodes = await thread_pool_exec(graph_store.get_all_nodes, space)
        except Exception as e:
            return {"status": "error", "reason": f"load_nodes_failed: {e!r}"}

        if not nodes:
            return {"status": "skipped", "reason": "empty_graph"}

        nodes.sort(key=lambda n: float(n.get("pagerank", 0.0)), reverse=True)
        top_nodes = nodes[: max(1, int(max_entities))]

        updated = 0
        index_name = search.index_name(tenant_id)
        for node in top_nodes:
            name = node.get("name")
            if not name:
                continue
            try:
                neighbors = await thread_pool_exec(graph_store.k_hop_neighbors, space, name, max(1, int(hop)), 50)
            except Exception as e:
                logger.warning("[GraphMaint] k_hop_neighbors failed entity=%s err=%s", name, e)
                continue

            nhop_data = []
            for nb in neighbors:
                nb_name = nb.get("name")
                if not nb_name or nb_name == name:
                    continue
                nhop_data.append(
                    {
                        "path": [name, nb_name],
                        "weights": [float(nb.get("rel_weight", 0.0))],
                    }
                )

            chunk_id = xxhash.xxh64(f"{kb_id}:entity:{name}".encode()).hexdigest()
            try:
                await thread_pool_exec(
                    settings.docStoreConn.update,
                    {"id": chunk_id},
                    {"n_hop_with_weight": json.dumps(nhop_data, ensure_ascii=False)},
                    index_name,
                    kb_id,
                )
                updated += 1
            except Exception as e:
                logger.warning("[GraphMaint] n_hop write failed entity=%s err=%s", name, e)

        return {"status": "ok", "entities_updated": updated}

