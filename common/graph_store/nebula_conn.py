# KM-CUSTOM
from __future__ import annotations

import logging
import os
import threading
import time
from typing import Any

import xxhash
from nebula3.Config import Config as NebulaConfig
from nebula3.common.ttypes import ErrorCode
from nebula3.gclient.net import ConnectionPool

logger = logging.getLogger(__name__)

DEFAULT_PARTITION_NUM = 10
DEFAULT_REPLICA_FACTOR = 1


def entity_vid(name: str) -> int:
    """Deterministic VID: xxhash64(UPPER(name)) -> int64."""
    return xxhash.xxh64((name or "").upper().encode("utf-8")).intdigest()


def _escape(value: str | None) -> str:
    if value is None:
        return ""
    return value.replace("\\", "\\\\").replace("'", "\\'").replace('"', '\\"')


def _nebula_val(value) -> Any:
    if value.is_empty() or value.is_null():
        return None
    if value.is_string():
        return value.as_string()
    if value.is_int():
        return value.as_int()
    if value.is_double():
        return value.as_double()
    if value.is_bool():
        return value.as_bool()
    return str(value)


class NebulaGraphStore:
    """Blocking NebulaGraph client wrapper."""

    def __init__(self):
        from common import settings

        nebula_cfg = getattr(settings, "NEBULA", None) or {}
        host = nebula_cfg.get("graphd_host") or os.environ.get("NEBULA_GRAPHD_HOST", "nebula-graphd")
        port = int(nebula_cfg.get("graphd_port") or os.environ.get("NEBULA_GRAPHD_PORT", 9669))
        user = nebula_cfg.get("user") or os.environ.get("NEBULA_USER", "root")
        password = nebula_cfg.get("password") or os.environ.get("NEBULA_PASSWORD", "nebula")
        pool_size = int(nebula_cfg.get("max_connection_pool_size", 50))
        self._timeout_ms = int(nebula_cfg.get("timeout_ms", 60000))

        config = NebulaConfig()
        config.max_connection_pool_size = pool_size
        config.timeout = self._timeout_ms

        self._pool = ConnectionPool()
        if not self._pool.init([(host, port)], config):
            raise RuntimeError(f"[NebulaGraph] Failed to init pool to {host}:{port}")

        self._user = user
        self._password = password
        self._lock = threading.Lock()
        self._initialized_spaces: set[str] = set()
        logger.info("[NebulaGraph] Pool initialized host=%s port=%s pool_size=%s", host, port, pool_size)

    def _execute(self, space: str | None, ngql: str):
        session = self._pool.get_session(self._user, self._password)
        try:
            if space:
                use_result = session.execute(f"USE `{_escape(space)}`;")
                if use_result.error_code() != ErrorCode.SUCCEEDED:
                    raise RuntimeError(f"USE {space} failed: {use_result.error_msg()}")

            result = session.execute(ngql)
            if result.error_code() != ErrorCode.SUCCEEDED:
                raise RuntimeError(f"nGQL error: {result.error_msg()} | query: {ngql[:200]}")
            return result
        finally:
            session.release()

    def _execute_many(self, space: str, statements: list[str], batch_size: int = 50):
        if not statements:
            return
        for i in range(0, len(statements), batch_size):
            batch = statements[i : i + batch_size]
            self._execute(space, ";\n".join(batch))

    def space_name(self, tenant_id: str, kb_id: str) -> str:
        return f"km_{tenant_id}_{kb_id}".replace("-", "_")

    def ensure_space(self, tenant_id: str, kb_id: str) -> str:
        space = self.space_name(tenant_id, kb_id)
        with self._lock:
            if space in self._initialized_spaces:
                return space

        partition_num = int(os.environ.get("NEBULA_PARTITION_NUM", DEFAULT_PARTITION_NUM))
        replica = int(os.environ.get("NEBULA_REPLICA_FACTOR", DEFAULT_REPLICA_FACTOR))

        self._execute(
            None,
            f"""
CREATE SPACE IF NOT EXISTS `{_escape(space)}`
(vid_type=INT64, partition_num={partition_num}, replica_factor={replica})
COMMENT='KM graph for tenant={_escape(str(tenant_id))} kb={_escape(str(kb_id))}';
""".strip(),
        )

        for _ in range(30):
            try:
                self._execute(space, "SHOW TAGS;")
                break
            except Exception:
                time.sleep(1)

        self._execute(
            space,
            """
CREATE TAG IF NOT EXISTS entity(
  name string NOT NULL,
  entity_type string DEFAULT '',
  description string DEFAULT '',
  source_ids string DEFAULT '',
  pagerank double DEFAULT 0.0,
  rank int DEFAULT 0,
  community_id string DEFAULT ''
);
""".strip(),
        )
        self._execute(
            space,
            """
CREATE TAG IF NOT EXISTS community(
  level int DEFAULT 0,
  title string DEFAULT '',
  report string DEFAULT '',
  member_count int DEFAULT 0
);
""".strip(),
        )
        self._execute(
            space,
            """
CREATE EDGE IF NOT EXISTS relation(
  description string DEFAULT '',
  keywords string DEFAULT '',
  weight double DEFAULT 0.0,
  source_ids string DEFAULT ''
);
""".strip(),
        )
        self._execute(
            space,
            """
CREATE EDGE IF NOT EXISTS belongs_to_community(
  level int DEFAULT 0
);
""".strip(),
        )

        time.sleep(2)
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_entity_name ON entity(name(256));")
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_entity_type ON entity(entity_type(64));")
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_community_level ON community(level);")
        self._execute(space, "CREATE EDGE INDEX IF NOT EXISTS idx_relation ON relation();")

        time.sleep(1)
        self._execute(space, "REBUILD TAG INDEX idx_entity_name, idx_entity_type, idx_community_level;")
        self._execute(space, "REBUILD EDGE INDEX idx_relation;")

        with self._lock:
            self._initialized_spaces.add(space)
        return space

    def drop_space(self, tenant_id: str, kb_id: str):
        space = self.space_name(tenant_id, kb_id)
        self._execute(None, f"DROP SPACE IF EXISTS `{_escape(space)}`;")
        with self._lock:
            self._initialized_spaces.discard(space)

    def list_spaces(self) -> list[str]:
        result = self._execute(None, "SHOW SPACES;")
        spaces: list[str] = []
        for i in range(result.row_size()):
            name = result.row_values(i)[0].as_string()
            if name.startswith("km_"):
                spaces.append(name)
        return spaces

    def space_stats(self, space: str) -> dict:
        try:
            node_count = self.node_count(space)
            edge_result = self._execute(space, "LOOKUP ON relation YIELD src(edge) | YIELD count(*) AS cnt;")
            edge_count = edge_result.row_values(0)[0].as_int() if edge_result.row_size() else 0
            return {"space": space, "node_count": node_count, "edge_count": edge_count, "status": "active"}
        except Exception as e:
            return {"space": space, "status": "error", "error": str(e)}

    def cleanup_empty_spaces(self, dry_run: bool = True) -> list[str]:
        removed: list[str] = []
        for space in self.list_spaces():
            try:
                if self.node_count(space) == 0:
                    if not dry_run:
                        self._execute(None, f"DROP SPACE IF EXISTS `{_escape(space)}`;")
                        with self._lock:
                            self._initialized_spaces.discard(space)
                    removed.append(space)
            except Exception:
                continue
        return removed

    def upsert_nodes(self, space: str, nodes: list[dict]):
        statements: list[str] = []
        for n in nodes:
            name = n.get("name", "")
            statements.append(
                "INSERT VERTEX IF NOT EXISTS entity(name, entity_type, description, source_ids, pagerank, rank, community_id) "
                f"VALUES {entity_vid(name)}:('{_escape(name)}', '{_escape(n.get('entity_type', ''))}', "
                f"'{_escape(n.get('description', ''))}', '{_escape(n.get('source_ids', ''))}', "
                f"{float(n.get('pagerank', 0.0))}, {int(n.get('rank', 0))}, '{_escape(n.get('community_id', ''))}')"
            )
        self._execute_many(space, statements)

    def update_node(self, space: str, name: str, props: dict):
        sets: list[str] = []
        for k, v in props.items():
            if isinstance(v, str):
                sets.append(f"entity.{k}='{_escape(v)}'")
            elif isinstance(v, (int, float)):
                sets.append(f"entity.{k}={v}")
        if sets:
            self._execute(space, f"UPDATE VERTEX ON entity {entity_vid(name)} SET {', '.join(sets)};")

    def delete_nodes(self, space: str, names: list[str]):
        if not names:
            return
        vids = ", ".join(str(entity_vid(n)) for n in names)
        self._execute(space, f"DELETE VERTEX {vids} WITH EDGE;")

    def get_node(self, space: str, name: str) -> dict | None:
        result = self._execute(space, f"FETCH PROP ON entity {entity_vid(name)} YIELD properties(vertex) AS props;")
        if result.row_size() == 0:
            return None
        props = result.row_values(0)[0].as_map()
        return {k.as_string(): _nebula_val(v) for k, v in props.items()}

    def upsert_edges(self, space: str, edges: list[dict]):
        statements: list[str] = []
        for e in edges:
            a, b = e.get("from_name", ""), e.get("to_name", "")
            if a > b:
                a, b = b, a
            statements.append(
                "INSERT EDGE IF NOT EXISTS relation(description, keywords, weight, source_ids) "
                f"VALUES {entity_vid(a)}->{entity_vid(b)}:('{_escape(e.get('description', ''))}', "
                f"'{_escape(e.get('keywords', ''))}', {float(e.get('weight', 0.0))}, "
                f"'{_escape(e.get('source_ids', ''))}')"
            )
        self._execute_many(space, statements)

    def delete_edges(self, space: str, edge_pairs: list[tuple[str, str]]):
        statements: list[str] = []
        for a, b in edge_pairs:
            if a > b:
                a, b = b, a
            statements.append(f"DELETE EDGE relation {entity_vid(a)}->{entity_vid(b)};")
        self._execute_many(space, statements)

    def get_all_nodes(self, space: str) -> list[dict]:
        result = self._execute(
            space,
            """
LOOKUP ON entity YIELD
  id(vertex) AS vid,
  properties(vertex).name AS name,
  properties(vertex).entity_type AS entity_type,
  properties(vertex).description AS description,
  properties(vertex).source_ids AS source_ids,
  properties(vertex).pagerank AS pagerank,
  properties(vertex).rank AS rank,
  properties(vertex).community_id AS community_id;
""".strip(),
        )
        rows: list[dict] = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            rows.append(
                {
                    "vid": row[0].as_int(),
                    "name": row[1].as_string(),
                    "entity_type": row[2].as_string(),
                    "description": row[3].as_string(),
                    "source_ids": row[4].as_string(),
                    "pagerank": row[5].as_double(),
                    "rank": row[6].as_int(),
                    "community_id": row[7].as_string(),
                }
            )
        return rows

    def get_all_edges(self, space: str) -> list[dict]:
        result = self._execute(
            space,
            """
LOOKUP ON relation YIELD
  src(edge) AS src_vid,
  dst(edge) AS dst_vid,
  properties(edge).description AS description,
  properties(edge).keywords AS keywords,
  properties(edge).weight AS weight,
  properties(edge).source_ids AS source_ids;
""".strip(),
        )
        rows: list[dict] = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            rows.append(
                {
                    "src_vid": row[0].as_int(),
                    "dst_vid": row[1].as_int(),
                    "description": row[2].as_string(),
                    "keywords": row[3].as_string(),
                    "weight": row[4].as_double(),
                    "source_ids": row[5].as_string(),
                }
            )
        return rows

    def get_entities_by_type(self, space: str, entity_type: str, limit: int = 10000) -> list[str]:
        result = self._execute(
            space,
            f"""
LOOKUP ON entity WHERE entity.entity_type == '{_escape(entity_type)}'
YIELD properties(vertex).name AS name
| LIMIT {int(limit)};
""".strip(),
        )
        names: list[str] = []
        for i in range(result.row_size()):
            names.append(result.row_values(i)[0].as_string())
        return names

    def node_count(self, space: str) -> int:
        result = self._execute(space, "LOOKUP ON entity YIELD id(vertex) | YIELD count(*) AS cnt;")
        if result.row_size():
            return result.row_values(0)[0].as_int()
        return 0

    def k_hop_neighbors(self, space: str, entity_name: str, k: int = 2, limit: int = 50) -> list[dict]:
        result = self._execute(
            space,
            f"""
GO 1 TO {int(k)} STEPS FROM {entity_vid(entity_name)} OVER relation BIDIRECT
YIELD
  properties($$).name AS name,
  properties($$).entity_type AS entity_type,
  properties($$).pagerank AS pagerank,
  properties(edge).weight AS rel_weight,
  properties(edge).description AS rel_desc
| LIMIT {int(limit)};
""".strip(),
        )
        rows: list[dict] = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            rows.append(
                {
                    "name": row[0].as_string() if not row[0].is_empty() else "",
                    "entity_type": row[1].as_string() if not row[1].is_empty() else "",
                    "pagerank": row[2].as_double() if not row[2].is_empty() else 0.0,
                    "rel_weight": row[3].as_double() if not row[3].is_empty() else 0.0,
                    "rel_desc": row[4].as_string() if not row[4].is_empty() else "",
                }
            )
        return rows

    def to_networkx(self, space: str):
        import networkx as nx

        graph = nx.Graph()
        vid_to_name: dict[int, str] = {}
        for node in self.get_all_nodes(space):
            vid_to_name[node["vid"]] = node["name"]
            graph.add_node(
                node["name"],
                entity_type=node.get("entity_type", ""),
                description=node.get("description", ""),
                source_id=(node.get("source_ids") or "").split(",") if node.get("source_ids") else [],
                pagerank=float(node.get("pagerank", 0.0)),
                rank=int(node.get("rank", 0)),
                community_id=node.get("community_id", ""),
            )

        for edge in self.get_all_edges(space):
            src = vid_to_name.get(edge["src_vid"])
            dst = vid_to_name.get(edge["dst_vid"])
            if not src or not dst:
                continue
            graph.add_edge(
                src,
                dst,
                description=edge.get("description", ""),
                keywords=(edge.get("keywords") or "").split(",") if edge.get("keywords") else [],
                weight=float(edge.get("weight", 0.0)),
                source_id=(edge.get("source_ids") or "").split(",") if edge.get("source_ids") else [],
            )
        return graph

    def from_networkx(self, space: str, graph):
        nodes: list[dict] = []
        for name, attrs in graph.nodes(data=True):
            source_ids = attrs.get("source_id", [])
            if isinstance(source_ids, list):
                source_ids = ",".join(source_ids)
            nodes.append(
                {
                    "name": name,
                    "entity_type": attrs.get("entity_type", ""),
                    "description": attrs.get("description", ""),
                    "source_ids": source_ids,
                    "pagerank": float(attrs.get("pagerank", 0.0)),
                    "rank": int(attrs.get("rank", 0)),
                    "community_id": attrs.get("community_id", ""),
                }
            )
        self.upsert_nodes(space, nodes)

        edges: list[dict] = []
        for src, dst, attrs in graph.edges(data=True):
            source_ids = attrs.get("source_id", [])
            if isinstance(source_ids, list):
                source_ids = ",".join(source_ids)
            keywords = attrs.get("keywords", [])
            if isinstance(keywords, list):
                keywords = ",".join(keywords)
            edges.append(
                {
                    "from_name": src,
                    "to_name": dst,
                    "description": attrs.get("description", ""),
                    "keywords": keywords,
                    "weight": float(attrs.get("weight", 0.0)),
                    "source_ids": source_ids,
                }
            )
        self.upsert_edges(space, edges)

    def has_doc_source(self, space: str, doc_id: str) -> bool:
        if not doc_id:
            return False
        quoted = _escape(doc_id)
        try:
            result = self._execute(
                space,
                f"""
LOOKUP ON entity WHERE entity.source_ids CONTAINS '{quoted}'
YIELD id(vertex) AS vid
| LIMIT 1;
""".strip(),
            )
            if result.row_size() > 0:
                return True
        except Exception:
            pass

        # Fallback for dialect/runtime differences.
        for node in self.get_all_nodes(space):
            source_ids = (node.get("source_ids") or "").split(",")
            if doc_id in source_ids:
                return True
        return False

    def health_check(self) -> dict:
        try:
            result = self._execute(None, "SHOW HOSTS;")
            return {"status": "healthy", "hosts": result.row_size()}
        except Exception as e:
            return {"status": "unhealthy", "error": str(e)}
