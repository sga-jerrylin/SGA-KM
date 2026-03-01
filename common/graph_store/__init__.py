# KM-CUSTOM
from __future__ import annotations

import logging
import os

_graph_store_instance = None


def get_graph_store():
    """Return graph store singleton, or None when disabled."""
    global _graph_store_instance

    backend = (os.environ.get("GRAPH_STORE", "none") or "none").strip().lower()
    if backend == "none":
        return None

    if _graph_store_instance is not None:
        return _graph_store_instance

    if backend == "nebula":
        from common.graph_store.nebula_conn import NebulaGraphStore

        _graph_store_instance = NebulaGraphStore()
        logging.info("[GraphStore] NebulaGraph store initialized")
        return _graph_store_instance

    logging.warning("[GraphStore] Unknown backend '%s', disabled", backend)
    return None

