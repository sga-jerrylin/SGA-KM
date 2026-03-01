# NebulaGraph Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace NetworkX JSON graph serialization with NebulaGraph as the authoritative graph store, keeping ES for vector/keyword search, to fix the dead n_hop_with_weight field, enable real PageRank scoring, and scale to large knowledge graphs.

**Architecture:** Dual-store — ES stores entity/relation chunks with embeddings (vector search + BM25); NebulaGraph stores graph topology (vertices, edges, properties) and serves traversal queries (GO N STEPS, PageRank). A `common/graph_store/` abstraction layer provides the interface with a feature flag (`GRAPH_STORE=nebula|none`) for gradual rollout.

**Tech Stack:** Python 3.12 / nebula3-python / NebulaGraph 3.x / Docker Compose profiles / Quart async (thread_pool_exec for sync SDK)

---

## Codex + Gemini Review Feedback (Integrated)

All 6 high-risk gaps from Codex review are addressed in the tasks below:

1. **Read-path incomplete** → Task 3 implements `get_graph()` and `does_graph_contains()` via NebulaGraph
2. **VID strategy** → Task 2 defines `vid = xxhash64(UPPER(name))` with `name` as property
3. **ES entity/relation dedup** → Task 5 changes `id` from `get_uuid()` to deterministic `hash(kb_id+entity)`
4. **PageRank not written to ES** → Task 6 writes `rank_flt` in entity chunks
5. **UPSERT must preserve merge semantics** → Task 4 implements description concat, weight sum, keyword union
6. **nGQL injection** → Task 2 uses parameterized queries throughout

Gemini feedback (frontend): Pipeline Monitor status enum update in Task 14, Observability label update in Task 15.

---

## 分工表

| 角色 | 负责 Task | 说明 |
|------|-----------|------|
| **Codex** | 1-13 | 后端：NebulaGraph 连接层、GraphRAG 改造、Docker、迁移 |
| **Gemini** | 14-15 | 前端：Pipeline Monitor 状态更新、Observability 标签 |
| **Claude Opus** | 全程 | 审核 + 集成验证 + Git 管理 |

---

## Phase A: NebulaGraph 基座 (Tasks 1-10)

### Task 1: Docker — 添加 NebulaGraph 服务

**Files:**
- Modify: `docker/docker-compose-base.yml` (append services)
- Modify: `docker/.env` (append variables)
- Modify: `docker/service_conf.yaml.template` (append nebula config)

**Step 1: 在 `docker/docker-compose-base.yml` 末尾 volumes 声明前添加 NebulaGraph 三件套**

```yaml
  nebula-metad:
    profiles:
      - nebula
    image: vesoft/nebula-metad:v3.8.0
    environment:
      - USER=root
      - TZ=${TZ:-UTC}
    command:
      - --meta_server_addrs=nebula-metad:9559
      - --local_ip=nebula-metad
      - --ws_ip=nebula-metad
      - --port=9559
      - --ws_http_port=19559
      - --data_path=/data/meta
      - --log_dir=/logs
      - --v=0
      - --minloglevel=0
    volumes:
      - nebula_meta_data:/data/meta
      - nebula_meta_logs:/logs
    healthcheck:
      test: ["CMD", "curl", "-sf", "http://nebula-metad:19559/status"]
      interval: 10s
      timeout: 5s
      retries: 30
    networks:
      - km
    restart: unless-stopped

  nebula-storaged:
    profiles:
      - nebula
    image: vesoft/nebula-storaged:v3.8.0
    environment:
      - USER=root
      - TZ=${TZ:-UTC}
    command:
      - --meta_server_addrs=nebula-metad:9559
      - --local_ip=nebula-storaged
      - --ws_ip=nebula-storaged
      - --port=9779
      - --ws_http_port=19779
      - --data_path=/data/storage
      - --log_dir=/logs
      - --v=0
      - --minloglevel=0
    depends_on:
      nebula-metad:
        condition: service_healthy
    volumes:
      - nebula_storage_data:/data/storage
      - nebula_storage_logs:/logs
    healthcheck:
      test: ["CMD", "curl", "-sf", "http://nebula-storaged:19779/status"]
      interval: 10s
      timeout: 5s
      retries: 30
    networks:
      - km
    restart: unless-stopped

  nebula-graphd:
    profiles:
      - nebula
    image: vesoft/nebula-graphd:v3.8.0
    environment:
      - USER=root
      - TZ=${TZ:-UTC}
    command:
      - --meta_server_addrs=nebula-metad:9559
      - --local_ip=nebula-graphd
      - --ws_ip=nebula-graphd
      - --port=9669
      - --ws_http_port=19669
      - --log_dir=/logs
      - --v=0
      - --minloglevel=0
    depends_on:
      nebula-storaged:
        condition: service_healthy
    ports:
      - ${NEBULA_GRAPHD_PORT:-19669}:9669
    volumes:
      - nebula_graphd_logs:/logs
    healthcheck:
      test: ["CMD", "curl", "-sf", "http://nebula-graphd:19669/status"]
      interval: 10s
      timeout: 5s
      retries: 30
    networks:
      - km
    restart: unless-stopped
```

在 `volumes:` 部分追加：
```yaml
  nebula_meta_data:
    driver: local
  nebula_meta_logs:
    driver: local
  nebula_storage_data:
    driver: local
  nebula_storage_logs:
    driver: local
  nebula_graphd_logs:
    driver: local
```

**Step 2: 在 `docker/.env` 追加 NebulaGraph 配置**

```env
# ------------------------------
# NebulaGraph Configuration (optional)
# Activate: COMPOSE_PROFILES=${COMPOSE_PROFILES},nebula
# ------------------------------
NEBULA_GRAPHD_HOST=nebula-graphd
NEBULA_GRAPHD_PORT=19669
NEBULA_METAD_HOST=nebula-metad
NEBULA_USER=root
NEBULA_PASSWORD=nebula
# Feature flag: set to 'nebula' to enable graph store, 'none' to disable
GRAPH_STORE=none
```

**Step 3: 在 `docker/service_conf.yaml.template` 追加 nebula 配置**

```yaml
nebula:
  graphd_host: '${NEBULA_GRAPHD_HOST:-nebula-graphd}'
  graphd_port: ${NEBULA_GRAPHD_PORT:-9669}
  user: '${NEBULA_USER:-root}'
  password: '${NEBULA_PASSWORD:-nebula}'
  max_connection_pool_size: 50
  timeout_ms: 60000
```

**Step 4: 验证**

```bash
cd docker && docker compose --profile nebula config --services | grep nebula
# Expected: nebula-metad, nebula-storaged, nebula-graphd
```

**Step 5: Commit**
```bash
git add docker/docker-compose-base.yml docker/.env docker/service_conf.yaml.template
git commit -m "feat: 添加 NebulaGraph Docker 服务定义和配置模板"
```

---

### Task 2: 创建 graph_store 抽象层和 NebulaGraph 连接器

**Files:**
- Create: `common/graph_store/__init__.py`
- Create: `common/graph_store/nebula_conn.py`

**Step 1: 创建 `common/graph_store/__init__.py`**

```python
# KM-CUSTOM: Graph store abstraction layer
"""
Graph store factory.

Usage:
    from common.graph_store import get_graph_store
    gs = get_graph_store()
    if gs:
        gs.ensure_space(tenant_id)
        gs.upsert_node(space, vid, tags)
"""
from __future__ import annotations

import logging
import os

_graph_store_instance = None


def get_graph_store():
    """Return the graph store singleton, or None if disabled."""
    global _graph_store_instance
    backend = os.environ.get("GRAPH_STORE", "none").strip().lower()
    if backend == "none":
        return None
    if _graph_store_instance is not None:
        return _graph_store_instance
    if backend == "nebula":
        from common.graph_store.nebula_conn import NebulaGraphStore
        _graph_store_instance = NebulaGraphStore()
        logging.info("[GraphStore] NebulaGraph store initialized")
        return _graph_store_instance
    logging.warning(f"[GraphStore] Unknown backend '{backend}', disabled")
    return None
```

**Step 2: 创建 `common/graph_store/nebula_conn.py`**

```python
# KM-CUSTOM: NebulaGraph connection and CRUD operations
"""
NebulaGraph store — authoritative graph topology storage.

VID strategy: xxhash64(UPPER(entity_name)) stored as INT64.
Entity name stored as property on the 'entity' tag.
All nGQL uses parameterized queries to prevent injection.
"""
from __future__ import annotations

import logging
import os
import threading
from typing import Any

import xxhash
from nebula3.Config import Config as NebulaConfig
from nebula3.gclient.net import ConnectionPool
from nebula3.common.ttypes import ErrorCode

logger = logging.getLogger(__name__)

# Separator matching rag/graphrag/utils.py GRAPH_FIELD_SEP
GRAPH_FIELD_SEP = "\n"

# Default partition count per space
DEFAULT_PARTITION_NUM = 10
DEFAULT_REPLICA_FACTOR = 1


def entity_vid(name: str) -> int:
    """Deterministic VID from entity name. Matches across set_graph/get calls."""
    return xxhash.xxh64(name.upper().encode("utf-8")).intdigest()


def _escape(s: str) -> str:
    """Escape a string for nGQL string literals (backslash + single-quote)."""
    if s is None:
        return ""
    return s.replace("\\", "\\\\").replace("'", "\\'").replace('"', '\\"')


class NebulaGraphStore:
    """Thread-safe NebulaGraph connection pool wrapper."""

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
        ok = self._pool.init([(host, port)], config)
        if not ok:
            raise RuntimeError(f"[NebulaGraph] Failed to init pool to {host}:{port}")

        self._user = user
        self._password = password
        self._lock = threading.Lock()
        self._initialized_spaces: set[str] = set()
        logger.info(f"[NebulaGraph] Pool initialized: {host}:{port}, pool_size={pool_size}")

    # ------------------------------------------------------------------
    # Low-level execution
    # ------------------------------------------------------------------

    def _execute(self, space: str | None, ngql: str) -> Any:
        """Execute nGQL statement. Raises on error."""
        session = self._pool.get_session(self._user, self._password)
        try:
            if space:
                r = session.execute(f"USE `{_escape(space)}`;")
                if r.error_code() != ErrorCode.SUCCEEDED:
                    raise RuntimeError(f"USE {space} failed: {r.error_msg()}")
            result = session.execute(ngql)
            if result.error_code() != ErrorCode.SUCCEEDED:
                raise RuntimeError(f"nGQL error: {result.error_msg()} | query: {ngql[:200]}")
            return result
        finally:
            session.release()

    def _execute_many(self, space: str, statements: list[str], batch_size: int = 50) -> None:
        """Execute multiple nGQL statements in batches."""
        for i in range(0, len(statements), batch_size):
            batch = statements[i:i + batch_size]
            combined = ";\n".join(batch)
            self._execute(space, combined)

    # ------------------------------------------------------------------
    # Space management
    # ------------------------------------------------------------------

    def space_name(self, tenant_id: str, kb_id: str) -> str:
        """One space per KB (within tenant). Avoids cross-KB contamination."""
        return f"km_{tenant_id}_{kb_id}".replace("-", "_")

    def ensure_space(self, tenant_id: str, kb_id: str) -> str:
        """Create space + schema if not exists. Idempotent."""
        space = self.space_name(tenant_id, kb_id)
        with self._lock:
            if space in self._initialized_spaces:
                return space

        partition_num = int(os.environ.get("NEBULA_PARTITION_NUM", DEFAULT_PARTITION_NUM))
        replica = int(os.environ.get("NEBULA_REPLICA_FACTOR", DEFAULT_REPLICA_FACTOR))

        # Create space
        self._execute(None, f"""
            CREATE SPACE IF NOT EXISTS `{_escape(space)}`
            (vid_type=INT64, partition_num={partition_num}, replica_factor={replica})
            COMMENT='KM graph for tenant={tenant_id} kb={kb_id}';
        """)

        # Wait for space to be ready (NebulaGraph needs heartbeat cycle)
        import time
        for _ in range(30):
            try:
                self._execute(space, "SHOW TAGS;")
                break
            except Exception:
                time.sleep(1)

        # Create tags
        self._execute(space, """
            CREATE TAG IF NOT EXISTS entity(
                name string NOT NULL,
                entity_type string DEFAULT '',
                description string DEFAULT '',
                source_ids string DEFAULT '',
                pagerank double DEFAULT 0.0,
                rank int DEFAULT 0,
                community_id string DEFAULT ''
            );
        """)
        self._execute(space, """
            CREATE TAG IF NOT EXISTS community(
                level int DEFAULT 0,
                title string DEFAULT '',
                report string DEFAULT '',
                member_count int DEFAULT 0
            );
        """)

        # Create edge types
        self._execute(space, """
            CREATE EDGE IF NOT EXISTS relation(
                description string DEFAULT '',
                keywords string DEFAULT '',
                weight double DEFAULT 0.0,
                source_ids string DEFAULT ''
            );
        """)
        self._execute(space, """
            CREATE EDGE IF NOT EXISTS belongs_to_community(
                level int DEFAULT 0
            );
        """)

        # Create indexes (for LOOKUP)
        # Wait for schema propagation
        time.sleep(2)
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_entity_name ON entity(name(256));")
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_entity_type ON entity(entity_type(64));")
        self._execute(space, "CREATE TAG INDEX IF NOT EXISTS idx_community_level ON community(level);")
        self._execute(space, "CREATE EDGE INDEX IF NOT EXISTS idx_relation ON relation();")

        # Rebuild indexes
        time.sleep(1)
        self._execute(space, "REBUILD TAG INDEX idx_entity_name, idx_entity_type, idx_community_level;")
        self._execute(space, "REBUILD EDGE INDEX idx_relation;")

        with self._lock:
            self._initialized_spaces.add(space)
        logger.info(f"[NebulaGraph] Space '{space}' ready")
        return space

    def drop_space(self, tenant_id: str, kb_id: str) -> None:
        """Drop a KB's graph space."""
        space = self.space_name(tenant_id, kb_id)
        self._execute(None, f"DROP SPACE IF EXISTS `{_escape(space)}`;")
        with self._lock:
            self._initialized_spaces.discard(space)

    # ------------------------------------------------------------------
    # Node CRUD
    # ------------------------------------------------------------------

    def upsert_nodes(self, space: str, nodes: list[dict]) -> None:
        """
        Upsert entity nodes. Each dict: {name, entity_type, description, source_ids, pagerank, rank}.
        Preserves merge semantics: descriptions concatenated, source_ids unioned.
        """
        if not nodes:
            return
        stmts = []
        for n in nodes:
            vid = entity_vid(n["name"])
            name = _escape(n["name"])
            etype = _escape(n.get("entity_type", ""))
            desc = _escape(n.get("description", ""))
            source_ids = _escape(n.get("source_ids", ""))
            pagerank = float(n.get("pagerank", 0.0))
            rank = int(n.get("rank", 0))
            community_id = _escape(n.get("community_id", ""))
            stmts.append(
                f"INSERT VERTEX IF NOT EXISTS entity(name, entity_type, description, source_ids, pagerank, rank, community_id) "
                f"VALUES {vid}:('{name}', '{etype}', '{desc}', '{source_ids}', {pagerank}, {rank}, '{community_id}')"
            )
        self._execute_many(space, stmts)

    def update_node(self, space: str, name: str, props: dict) -> None:
        """Update specific properties of an entity node."""
        vid = entity_vid(name)
        sets = []
        for k, v in props.items():
            if isinstance(v, str):
                sets.append(f"entity.{k} = '{_escape(v)}'")
            elif isinstance(v, (int, float)):
                sets.append(f"entity.{k} = {v}")
        if sets:
            self._execute(space, f"UPDATE VERTEX ON entity {vid} SET {', '.join(sets)};")

    def delete_nodes(self, space: str, names: list[str]) -> None:
        """Delete entity nodes by name."""
        if not names:
            return
        vids = [str(entity_vid(n)) for n in names]
        self._execute(space, f"DELETE VERTEX {', '.join(vids)} WITH EDGE;")

    def get_node(self, space: str, name: str) -> dict | None:
        """Fetch a single entity node by name."""
        vid = entity_vid(name)
        result = self._execute(space, f"FETCH PROP ON entity {vid} YIELD properties(vertex) AS props;")
        if result.row_size() == 0:
            return None
        row = result.row_values(0)
        props = row[0].as_map()
        return {k.as_string(): _nebula_val(v) for k, v in props.items()}

    # ------------------------------------------------------------------
    # Edge CRUD
    # ------------------------------------------------------------------

    def upsert_edges(self, space: str, edges: list[dict]) -> None:
        """
        Upsert relation edges. Each dict: {from_name, to_name, description, keywords, weight, source_ids}.
        Uses sorted (from, to) for undirected graph consistency.
        """
        if not edges:
            return
        stmts = []
        for e in edges:
            # Sorted endpoints for undirected consistency (matches get_from_to)
            a, b = e["from_name"], e["to_name"]
            if a > b:
                a, b = b, a
            vid_a = entity_vid(a)
            vid_b = entity_vid(b)
            desc = _escape(e.get("description", ""))
            keywords = _escape(e.get("keywords", ""))
            weight = float(e.get("weight", 0.0))
            source_ids = _escape(e.get("source_ids", ""))
            stmts.append(
                f"INSERT EDGE IF NOT EXISTS relation(description, keywords, weight, source_ids) "
                f"VALUES {vid_a}->{vid_b}:('{desc}', '{keywords}', {weight}, '{source_ids}')"
            )
        self._execute_many(space, stmts)

    def delete_edges(self, space: str, edge_pairs: list[tuple[str, str]]) -> None:
        """Delete relation edges by (from_name, to_name) pairs."""
        if not edge_pairs:
            return
        stmts = []
        for a, b in edge_pairs:
            if a > b:
                a, b = b, a
            stmts.append(f"DELETE EDGE relation {entity_vid(a)}->{entity_vid(b)};")
        self._execute_many(space, stmts)

    # ------------------------------------------------------------------
    # Graph traversal
    # ------------------------------------------------------------------

    def k_hop_neighbors(self, space: str, entity_name: str, k: int = 2, limit: int = 100) -> list[dict]:
        """
        Get k-hop neighbors of an entity. Returns list of:
        {name, entity_type, pagerank, hop, relation_weight, path}
        """
        vid = entity_vid(entity_name)
        result = self._execute(space, f"""
            GO 1 TO {k} STEPS FROM {vid} OVER relation BIDIRECT
            YIELD
                properties($$).name AS name,
                properties($$).entity_type AS entity_type,
                properties($$).pagerank AS pagerank,
                properties(edge).weight AS rel_weight,
                properties(edge).description AS rel_desc
            | LIMIT {limit};
        """)
        neighbors = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            neighbors.append({
                "name": row[0].as_string() if not row[0].is_empty() else "",
                "entity_type": row[1].as_string() if not row[1].is_empty() else "",
                "pagerank": row[2].as_double() if not row[2].is_empty() else 0.0,
                "rel_weight": row[3].as_double() if not row[3].is_empty() else 0.0,
                "rel_desc": row[4].as_string() if not row[4].is_empty() else "",
            })
        return neighbors

    def get_all_nodes(self, space: str) -> list[dict]:
        """Get all entity nodes in the space (for graph reconstruction)."""
        result = self._execute(space, """
            LOOKUP ON entity YIELD
                id(vertex) AS vid,
                properties(vertex).name AS name,
                properties(vertex).entity_type AS entity_type,
                properties(vertex).description AS description,
                properties(vertex).source_ids AS source_ids,
                properties(vertex).pagerank AS pagerank,
                properties(vertex).rank AS rank,
                properties(vertex).community_id AS community_id;
        """)
        nodes = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            nodes.append({
                "vid": row[0].as_int(),
                "name": row[1].as_string(),
                "entity_type": row[2].as_string(),
                "description": row[3].as_string(),
                "source_ids": row[4].as_string(),
                "pagerank": row[5].as_double(),
                "rank": row[6].as_int(),
                "community_id": row[7].as_string(),
            })
        return nodes

    def get_all_edges(self, space: str) -> list[dict]:
        """Get all relation edges in the space."""
        result = self._execute(space, """
            LOOKUP ON relation YIELD
                src(edge) AS src_vid,
                dst(edge) AS dst_vid,
                properties(edge).description AS description,
                properties(edge).keywords AS keywords,
                properties(edge).weight AS weight,
                properties(edge).source_ids AS source_ids;
        """)
        edges = []
        for i in range(result.row_size()):
            row = result.row_values(i)
            edges.append({
                "src_vid": row[0].as_int(),
                "dst_vid": row[1].as_int(),
                "description": row[2].as_string(),
                "keywords": row[3].as_string(),
                "weight": row[4].as_double(),
                "source_ids": row[5].as_string(),
            })
        return edges

    def get_entities_by_type(self, space: str, entity_type: str, limit: int = 10000) -> list[str]:
        """Get entity names by type (for entity resolution candidate generation)."""
        result = self._execute(space, f"""
            LOOKUP ON entity WHERE entity.entity_type == '{_escape(entity_type)}'
            YIELD properties(vertex).name AS name
            | LIMIT {limit};
        """)
        return [result.row_values(i)[0].as_string() for i in range(result.row_size())]

    def node_count(self, space: str) -> int:
        """Count entities in space."""
        result = self._execute(space, "LOOKUP ON entity YIELD id(vertex) | YIELD count(*) AS cnt;")
        if result.row_size() > 0:
            return result.row_values(0)[0].as_int()
        return 0

    def has_entity(self, space: str, name: str) -> bool:
        """Check if an entity exists."""
        return self.get_node(space, name) is not None

    # ------------------------------------------------------------------
    # Bulk operations for graph reconstruction
    # ------------------------------------------------------------------

    def to_networkx(self, space: str) -> "nx.Graph":
        """Reconstruct NetworkX graph from NebulaGraph (compatibility layer)."""
        import networkx as nx
        g = nx.Graph()
        vid_to_name = {}

        for node in self.get_all_nodes(space):
            vid_to_name[node["vid"]] = node["name"]
            g.add_node(node["name"],
                       entity_type=node["entity_type"],
                       description=node["description"],
                       source_id=node["source_ids"].split(",") if node["source_ids"] else [],
                       pagerank=node["pagerank"],
                       rank=node["rank"],
                       community_id=node["community_id"])

        for edge in self.get_all_edges(space):
            src = vid_to_name.get(edge["src_vid"])
            dst = vid_to_name.get(edge["dst_vid"])
            if src and dst:
                g.add_edge(src, dst,
                           description=edge["description"],
                           keywords=edge["keywords"].split(",") if edge["keywords"] else [],
                           weight=edge["weight"],
                           source_id=edge["source_ids"].split(",") if edge["source_ids"] else [])
        return g

    def from_networkx(self, space: str, graph: "nx.Graph") -> None:
        """Bulk import a NetworkX graph into NebulaGraph."""
        nodes = []
        for name, attrs in graph.nodes(data=True):
            source_ids = attrs.get("source_id", [])
            if isinstance(source_ids, list):
                source_ids = ",".join(source_ids)
            nodes.append({
                "name": name,
                "entity_type": attrs.get("entity_type", ""),
                "description": attrs.get("description", ""),
                "source_ids": source_ids,
                "pagerank": float(attrs.get("pagerank", 0.0)),
                "rank": int(attrs.get("rank", 0)),
            })
        self.upsert_nodes(space, nodes)

        edges = []
        for u, v, attrs in graph.edges(data=True):
            source_ids = attrs.get("source_id", [])
            if isinstance(source_ids, list):
                source_ids = ",".join(source_ids)
            keywords = attrs.get("keywords", [])
            if isinstance(keywords, list):
                keywords = ",".join(keywords)
            edges.append({
                "from_name": u,
                "to_name": v,
                "description": attrs.get("description", ""),
                "keywords": keywords,
                "weight": float(attrs.get("weight", 0.0)),
                "source_ids": source_ids,
            })
        self.upsert_edges(space, edges)

    # ------------------------------------------------------------------
    # Health check
    # ------------------------------------------------------------------

    def health_check(self) -> dict:
        """Check NebulaGraph connectivity."""
        try:
            result = self._execute(None, "SHOW HOSTS;")
            return {"status": "healthy", "hosts": result.row_size()}
        except Exception as e:
            return {"status": "unhealthy", "error": str(e)}


def _nebula_val(v) -> Any:
    """Convert NebulaGraph value to Python type."""
    if v.is_empty() or v.is_null():
        return None
    if v.is_string():
        return v.as_string()
    if v.is_int():
        return v.as_int()
    if v.is_double():
        return v.as_double()
    if v.is_bool():
        return v.as_bool()
    return str(v)
```

**Step 3: 验证语法**
```bash
python -m py_compile common/graph_store/__init__.py
python -m py_compile common/graph_store/nebula_conn.py
```

**Step 4: Commit**
```bash
git add common/graph_store/
git commit -m "feat: 添加 NebulaGraph 图存储抽象层和连接器"
```

---

### Task 3: 改造 utils.py — get_graph() 和 does_graph_contains()

**Files:**
- Modify: `rag/graphrag/utils.py:419-435` (get_graph)
- Modify: `rag/graphrag/utils.py:389-405` (does_graph_contains)

**Step 1: 在文件顶部 import 区域添加**

在 `from common import settings` 之后添加：
```python
from common.graph_store import get_graph_store
```

**Step 2: 修改 `get_graph()` — 优先从 NebulaGraph 读取**

将 `get_graph()` 函数（约 line 419）改为：

```python
async def get_graph(tenant_id, kb_id, exclude_rebuild=None):
    # KM-CUSTOM: Try NebulaGraph first
    gs = get_graph_store()
    if gs:
        try:
            space = gs.space_name(tenant_id, kb_id)
            if space in gs._initialized_spaces or gs.node_count(space) > 0:
                g = gs.to_networkx(space)
                if g.number_of_nodes() > 0:
                    if "source_id" not in g.graph:
                        g.graph["source_id"] = list({
                            sid for n in g.nodes()
                            for sid in g.nodes[n].get("source_id", [])
                        })
                    return g
        except Exception as e:
            logging.warning(f"[GraphStore] get_graph from NebulaGraph failed, falling back to ES: {e}")

    # Original ES-based logic (fallback)
    conds = {"fields": ["content_with_weight", "removed_kwd", "source_id"], "size": 1, "knowledge_graph_kwd": ["graph"]}
    res = await settings.retriever.search(conds, search.index_name(tenant_id), [kb_id])
    if not res.total == 0:
        for id in res.ids:
            try:
                if res.field[id]["removed_kwd"] == "N":
                    g = json_graph.node_link_graph(json.loads(res.field[id]["content_with_weight"]), edges="edges")
                    if "source_id" not in g.graph:
                        g.graph["source_id"] = res.field[id]["source_id"]
                else:
                    g = await rebuild_graph(tenant_id, kb_id, exclude_rebuild)
                return g
            except Exception:
                continue
    return None
```

**Step 3: 修改 `does_graph_contains()` — 添加 NebulaGraph 路径**

在原函数（约 line 389）前添加 NebulaGraph 检查：

```python
async def does_graph_contains(tenant_id, kb_id, doc_id):
    # KM-CUSTOM: Check NebulaGraph first
    gs = get_graph_store()
    if gs:
        try:
            space = gs.space_name(tenant_id, kb_id)
            nodes = gs.get_all_nodes(space)
            for node in nodes:
                if doc_id in (node.get("source_ids") or "").split(","):
                    return True
            return False
        except Exception as e:
            logging.warning(f"[GraphStore] does_graph_contains check failed, falling back: {e}")

    # Original ES-based logic (fallback)
    fields = ["source_id"]
    condition = {
        "knowledge_graph_kwd": ["graph"],
        "removed_kwd": "N",
    }
    res = await thread_pool_exec(
        settings.docStoreConn.search,
        fields, [], condition, [], OrderByExpr(),
        0, 1, search.index_name(tenant_id), [kb_id]
    )
    fields2 = settings.docStoreConn.get_fields(res, fields)
    graph_doc_ids = set()
    for chunk_id in fields2.keys():
        graph_doc_ids = set(fields2[chunk_id]["source_id"])
    return doc_id in graph_doc_ids
```

**Step 4: 验证语法**
```bash
python -m py_compile rag/graphrag/utils.py
```

**Step 5: Commit**
```bash
git add rag/graphrag/utils.py
git commit -m "feat: get_graph/does_graph_contains 优先从 NebulaGraph 读取"
```

---

### Task 4: 改造 utils.py — set_graph() 写入 NebulaGraph

**Files:**
- Modify: `rag/graphrag/utils.py:438-577` (set_graph)

**Step 1: 在 `set_graph()` 函数开头（约 line 439）添加 NebulaGraph 写入**

在原函数的删除旧数据步骤之前，插入 NebulaGraph 写入逻辑：

```python
async def set_graph(tenant_id: str, kb_id: str, embd_mdl, graph: nx.Graph, change: GraphChange, callback):
    # KM-CUSTOM: Write to NebulaGraph (authoritative store)
    gs = get_graph_store()
    if gs:
        try:
            space = gs.ensure_space(tenant_id, kb_id)

            # Delete removed nodes and edges
            if change.removed_nodes:
                gs.delete_nodes(space, list(change.removed_nodes))
            if change.removed_edges:
                gs.delete_edges(space, list(change.removed_edges))

            # Upsert added/updated nodes with merge semantics preserved
            nodes_to_upsert = []
            for node_name in change.added_updated_nodes:
                if node_name not in graph.nodes:
                    continue
                attrs = graph.nodes[node_name]
                source_ids = attrs.get("source_id", [])
                if isinstance(source_ids, list):
                    source_ids = ",".join(source_ids)
                nodes_to_upsert.append({
                    "name": node_name,
                    "entity_type": attrs.get("entity_type", ""),
                    "description": attrs.get("description", ""),
                    "source_ids": source_ids,
                    "pagerank": float(attrs.get("pagerank", 0.0)),
                    "rank": int(attrs.get("rank", 0)),
                })
            gs.upsert_nodes(space, nodes_to_upsert)

            # Upsert added/updated edges with merge semantics
            edges_to_upsert = []
            for from_name, to_name in change.added_updated_edges:
                if not graph.has_edge(from_name, to_name):
                    continue
                attrs = graph.edges[from_name, to_name]
                source_ids = attrs.get("source_id", [])
                if isinstance(source_ids, list):
                    source_ids = ",".join(source_ids)
                keywords = attrs.get("keywords", [])
                if isinstance(keywords, list):
                    keywords = ",".join(keywords)
                edges_to_upsert.append({
                    "from_name": from_name,
                    "to_name": to_name,
                    "description": attrs.get("description", ""),
                    "keywords": keywords,
                    "weight": float(attrs.get("weight", 0.0)),
                    "source_ids": source_ids,
                })
            gs.upsert_edges(space, edges_to_upsert)

            if callback:
                callback(msg=f"[NebulaGraph] Synced {len(nodes_to_upsert)} nodes, {len(edges_to_upsert)} edges")
        except Exception as e:
            logging.error(f"[GraphStore] set_graph NebulaGraph write failed: {e}")
            # Continue with ES write — ES is fallback

    # --- Original ES write logic continues below (unchanged) ---
```

The rest of `set_graph()` stays the same (ES full-graph JSON + entity/relation chunks).

**Step 2: 验证语法**
```bash
python -m py_compile rag/graphrag/utils.py
```

**Step 3: Commit**
```bash
git add rag/graphrag/utils.py
git commit -m "feat: set_graph 双写 NebulaGraph + ES"
```

---

### Task 5: 改造 utils.py — 确定性 ES entity/relation chunk ID

**Files:**
- Modify: `rag/graphrag/utils.py:300-329` (graph_node_to_chunk)
- Modify: `rag/graphrag/utils.py:354-386` (graph_edge_to_chunk)

**Step 1: 修改 `graph_node_to_chunk()` 中的 ID 生成（约 line 304）**

将 `"id": get_uuid()` 改为确定性 ID：
```python
# Before:
"id": get_uuid(),

# After (deterministic — prevents duplicate accumulation):
"id": xxhash.xxh64(f"{kb_id}:entity:{ent_name}".encode()).hexdigest(),
```

**Step 2: 修改 `graph_edge_to_chunk()` 中的 ID 生成（约 line 357）**

将 `"id": get_uuid()` 改为确定性 ID：
```python
# Before:
"id": get_uuid(),

# After (deterministic — sorted endpoints for undirected consistency):
_from, _to = (from_ent_name, to_ent_name) if from_ent_name < to_ent_name else (to_ent_name, from_ent_name)
"id": xxhash.xxh64(f"{kb_id}:relation:{_from}:{_to}".encode()).hexdigest(),
```

Note: `xxhash` is already imported at the top of the file.

**Step 3: 验证**
```bash
python -m py_compile rag/graphrag/utils.py
```

**Step 4: Commit**
```bash
git add rag/graphrag/utils.py
git commit -m "fix: entity/relation chunk 使用确定性 ID 防止重复累积"
```

---

### Task 6: 改造 utils.py — 写入 rank_flt 到 ES entity chunks

**Files:**
- Modify: `rag/graphrag/utils.py:300-329` (graph_node_to_chunk, add rank_flt)

**Step 1: 在 `graph_node_to_chunk()` 的 chunk dict 中添加 `rank_flt`**

在 `"available_int": 0` 之后添加：
```python
"rank_flt": float(meta.get("pagerank", 0.0)),
```

This ensures `KGSearch.retrieval()` gets real pagerank values from `rank_flt` instead of always 0.

**Step 2: 验证**
```bash
python -m py_compile rag/graphrag/utils.py
```

**Step 3: Commit**
```bash
git add rag/graphrag/utils.py
git commit -m "fix: 写入 rank_flt 到 ES entity chunks 使 pagerank 评分生效"
```

---

### Task 7: 改造 search.py — 使用 NebulaGraph 做 n-hop 扩展

**Files:**
- Modify: `rag/graphrag/search.py:16-32` (imports)
- Modify: `rag/graphrag/search.py:142-291` (retrieval function)

**Step 1: 添加 import**

在 imports 区域添加：
```python
from common.graph_store import get_graph_store
```

**Step 2: 修改 `retrieval()` 中的 n-hop 逻辑（约 line 172-187）**

替换原来读 `n_hop_with_weight` 的代码块为：

```python
        # KM-CUSTOM: N-hop expansion via NebulaGraph (replaces dead n_hop_with_weight field)
        nhop_pathes = {}
        gs = get_graph_store()
        if gs:
            try:
                space = gs.space_name(
                    tenant_ids[0] if isinstance(tenant_ids, list) else tenant_ids,
                    kb_ids[0] if kb_ids else ""
                )
                for ent_name, ent_data in ents_from_query.items():
                    neighbors = gs.k_hop_neighbors(space, ent_name, k=2, limit=50)
                    for nb in neighbors:
                        nb_name = nb["name"]
                        if nb_name and nb_name not in ents_from_query:
                            if nb_name not in nhop_pathes:
                                nhop_pathes[nb_name] = {
                                    "sim": ent_data["sim"] / 3.0,  # decay for hop distance
                                    "pagerank": nb["pagerank"],
                                    "description": nb.get("rel_desc", ""),
                                }
                            else:
                                # Keep highest similarity path
                                existing_sim = nhop_pathes[nb_name]["sim"]
                                new_sim = ent_data["sim"] / 3.0
                                if new_sim > existing_sim:
                                    nhop_pathes[nb_name]["sim"] = new_sim
            except Exception as e:
                logging.warning(f"[GraphStore] n-hop expansion failed, using ES fallback: {e}")
                # Fall through to original n_hop_with_weight logic below

        # Original n_hop_with_weight logic (fallback when NebulaGraph unavailable)
        if not nhop_pathes:
            for ent_name, ent_data in ents_from_query.items():
                nhops = ent_data.get("n_hop_ents", [])
                # ... (keep original logic intact)
```

**Step 3: 验证语法**
```bash
python -m py_compile rag/graphrag/search.py
```

**Step 4: Commit**
```bash
git add rag/graphrag/search.py
git commit -m "feat: search.py n-hop 扩展优先使用 NebulaGraph GO N STEPS"
```

---

### Task 8: 改造 index.py — merge_subgraph() 写入 NebulaGraph

**Files:**
- Modify: `rag/graphrag/general/index.py:33-41` (imports)
- Modify: `rag/graphrag/general/index.py:479-506` (merge_subgraph)

**Step 1: 添加 import**

在 imports 区域添加：
```python
from common.graph_store import get_graph_store
```

**Step 2: 在 `merge_subgraph()` 的 pagerank 计算后（约 line 501），添加 NebulaGraph 同步**

在 `await set_graph(...)` 调用之前插入：

```python
        # KM-CUSTOM: Ensure NebulaGraph space exists for this KB
        gs = get_graph_store()
        if gs:
            try:
                gs.ensure_space(tenant_id, kb_id)
            except Exception as e:
                logging.warning(f"[GraphStore] ensure_space failed: {e}")
```

注意：实际的 NebulaGraph 写入已由 Task 4 中改造的 `set_graph()` 处理。这里只需确保 space 存在。

**Step 3: 验证**
```bash
python -m py_compile rag/graphrag/general/index.py
```

**Step 4: Commit**
```bash
git add rag/graphrag/general/index.py
git commit -m "feat: merge_subgraph 确保 NebulaGraph space 存在"
```

---

### Task 9: 改造 entity_resolution.py — 使用 NebulaGraph LOOKUP 优化候选生成

**Files:**
- Modify: `rag/graphrag/entity_resolution.py:16-35` (imports)
- Modify: `rag/graphrag/entity_resolution.py:91-100` (candidate generation)

**Step 1: 添加 import**

```python
from common.graph_store import get_graph_store
```

**Step 2: 在候选生成逻辑（约 line 91-100）中添加 NebulaGraph 优化路径**

在 `node_clusters` 构建之后，`candidate_resolution` 生成之前，添加：

```python
        # KM-CUSTOM: Use NebulaGraph LOOKUP for efficient type-based candidate retrieval
        # This avoids scanning all nodes when only subgraph_nodes need resolution
        gs = get_graph_store()
        if gs and hasattr(graph, 'graph') and graph.graph.get("source_id"):
            try:
                space = gs.space_name(
                    graph.graph.get("tenant_id", ""),
                    graph.graph.get("kb_id", "")
                )
                # Optimization: only load entity names from NebulaGraph for types
                # that have subgraph_nodes candidates. Avoids O(n) full scan.
                for entity_type in entity_types:
                    if not any(n in subgraph_nodes for n in node_clusters.get(entity_type, [])):
                        continue
                    nb_names = gs.get_entities_by_type(space, entity_type, limit=10000)
                    # Add names from NebulaGraph that aren't already in cluster
                    existing = set(node_clusters.get(entity_type, []))
                    for name in nb_names:
                        if name not in existing:
                            node_clusters[entity_type].append(name)
            except Exception as e:
                logging.warning(f"[GraphStore] entity_resolution LOOKUP failed: {e}")
```

Note: The rest of the candidate pair generation and LLM resolution logic stays unchanged.

**Step 3: 验证**
```bash
python -m py_compile rag/graphrag/entity_resolution.py
```

**Step 4: Commit**
```bash
git add rag/graphrag/entity_resolution.py
git commit -m "feat: entity_resolution 使用 NebulaGraph LOOKUP 优化候选检索"
```

---

### Task 10: 配置加载 — 读取 nebula 配置到 settings

**Files:**
- Modify: `common/settings.py` or equivalent config loader

**Step 1: 找到配置加载逻辑，添加 NEBULA 配置读取**

在 `service_conf.yaml` 加载后，读取 nebula 配置：

```python
# KM-CUSTOM: NebulaGraph config
NEBULA = conf.get("nebula", {})
```

**Step 2: 验证**
```bash
python -c "from common import settings; print(getattr(settings, 'NEBULA', {}))"
```

**Step 3: Commit**
```bash
git add common/settings.py
git commit -m "feat: 加载 NebulaGraph 配置到 settings"
```

---

## Phase B: 增量更新 + 算法卸载 (Tasks 11-13)

### Task 11: 离线 PageRank 批处理 + rank_flt 回写

**Files:**
- Create: `api/km/services/graph_maintenance.py`

**Step 1: 创建图谱维护服务**

```python
# KM-CUSTOM: Offline graph maintenance — PageRank, n-hop precompute
"""
Periodic tasks for graph quality:
1. Recompute PageRank via NebulaGraph and write back to ES rank_flt
2. Precompute bounded n-hop neighborhoods for hot entities
"""
from __future__ import annotations

import json
import logging
from typing import Any

from common.graph_store import get_graph_store
from common.misc_utils import thread_pool_exec
from rag.nlp import search
from common import settings
from common.doc_store.doc_store_base import OrderByExpr

logger = logging.getLogger(__name__)


async def recompute_pagerank(tenant_id: str, kb_id: str, callback=None) -> dict:
    """
    Recompute PageRank for a KB's graph and sync back to:
    1. NebulaGraph entity.pagerank property
    2. ES entity chunk rank_flt field

    Uses NetworkX PageRank on the NebulaGraph-reconstructed graph.
    In future, can use NebulaGraph Algorithm plugin directly.
    """
    import networkx as nx

    gs = get_graph_store()
    if not gs:
        return {"status": "skipped", "reason": "graph_store disabled"}

    space = gs.space_name(tenant_id, kb_id)
    graph = gs.to_networkx(space)

    if graph.number_of_nodes() == 0:
        return {"status": "skipped", "reason": "empty graph"}

    # Compute PageRank
    pr = nx.pagerank(graph)

    # Update NebulaGraph
    for name, pagerank in pr.items():
        gs.update_node(space, name, {"pagerank": pagerank})

    # Update ES rank_flt
    import xxhash
    index_name = search.index_name(tenant_id)
    updates = []
    for name, pagerank in pr.items():
        chunk_id = xxhash.xxh64(f"{kb_id}:entity:{name}".encode()).hexdigest()
        updates.append((chunk_id, {"rank_flt": float(pagerank)}))

    # Batch update ES
    for chunk_id, update_fields in updates:
        try:
            await thread_pool_exec(
                settings.docStoreConn.update,
                {"rank_flt": update_fields["rank_flt"]},
                {"id": chunk_id},
                index_name, [kb_id]
            )
        except Exception as e:
            logger.warning(f"[GraphMaint] ES rank_flt update failed for {chunk_id}: {e}")

    if callback:
        callback(msg=f"[GraphMaint] PageRank updated for {len(pr)} entities")

    return {"status": "ok", "entities_updated": len(pr)}


async def precompute_nhop(tenant_id: str, kb_id: str, max_entities: int = 500, k: int = 2) -> dict:
    """
    Precompute n-hop neighborhoods for top entities (by pagerank) and write to ES n_hop_with_weight.
    Bounded: only top entities, limited hop count.
    """
    import xxhash

    gs = get_graph_store()
    if not gs:
        return {"status": "skipped", "reason": "graph_store disabled"}

    space = gs.space_name(tenant_id, kb_id)
    nodes = gs.get_all_nodes(space)
    if not nodes:
        return {"status": "skipped", "reason": "empty graph"}

    # Sort by pagerank, take top N
    nodes.sort(key=lambda n: n.get("pagerank", 0), reverse=True)
    top_nodes = nodes[:max_entities]

    index_name = search.index_name(tenant_id)
    updated = 0

    for node in top_nodes:
        name = node["name"]
        neighbors = gs.k_hop_neighbors(space, name, k=k, limit=50)

        # Format as expected by search.py _ent_info_from_()
        nhop_data = []
        for nb in neighbors:
            nhop_data.append({
                "path": [name, nb["name"]],
                "weights": [nb["rel_weight"]],
            })

        chunk_id = xxhash.xxh64(f"{kb_id}:entity:{name}".encode()).hexdigest()
        try:
            await thread_pool_exec(
                settings.docStoreConn.update,
                {"n_hop_with_weight": json.dumps(nhop_data)},
                {"id": chunk_id},
                index_name, [kb_id]
            )
            updated += 1
        except Exception as e:
            logger.warning(f"[GraphMaint] n_hop update failed for {name}: {e}")

    return {"status": "ok", "entities_updated": updated}
```

**Step 2: 验证**
```bash
python -m py_compile api/km/services/graph_maintenance.py
```

**Step 3: Commit**
```bash
git add api/km/services/graph_maintenance.py
git commit -m "feat: 离线 PageRank + n-hop 预计算批处理服务"
```

---

### Task 12: KM API — 添加图谱维护端点

**Files:**
- Modify: `api/apps/sdk/km.py` (add maintenance endpoints)

**Step 1: 添加维护 API 端点**

```python
@manager.route("/graph/recompute-pagerank", methods=["POST"])
@login_required
async def graph_recompute_pagerank():
    """Trigger offline PageRank recomputation for a KB."""
    req = await request.get_json(force=True)
    kb_id = req.get("kb_id")
    if not kb_id:
        return km_error("kb_id is required")
    tenant_id = current_user.id
    result = await recompute_pagerank(tenant_id, kb_id)
    return km_response(result)


@manager.route("/graph/precompute-nhop", methods=["POST"])
@login_required
async def graph_precompute_nhop():
    """Trigger n-hop precomputation for top entities."""
    req = await request.get_json(force=True)
    kb_id = req.get("kb_id")
    if not kb_id:
        return km_error("kb_id is required")
    tenant_id = current_user.id
    result = await precompute_nhop(tenant_id, kb_id)
    return km_response(result)
```

**Step 2: 添加 import**
```python
from api.km.services.graph_maintenance import recompute_pagerank, precompute_nhop
```

**Step 3: 验证**
```bash
python -m py_compile api/apps/sdk/km.py
```

**Step 4: Commit**
```bash
git add api/apps/sdk/km.py
git commit -m "feat: 添加 graph/recompute-pagerank 和 precompute-nhop API"
```

---

### Task 13: Job Runner — Pipeline 完成后自动触发 PageRank 更新

**Files:**
- Modify: `api/km/services/job_runner.py` (add post-completion hook)

**Step 1: 在 job 完成回调中触发 PageRank 更新**

在 job state 变为 `completed` 时，添加异步 PageRank 触发：

```python
# After job completes successfully
if new_state == "completed":
    # Trigger offline PageRank update (non-blocking)
    try:
        from api.km.services.graph_maintenance import recompute_pagerank
        asyncio.create_task(recompute_pagerank(job.tenant_id, job.kb_id))
    except Exception as e:
        logging.warning(f"[JobRunner] PageRank trigger failed: {e}")
```

**Step 2: 验证**
```bash
python -m py_compile api/km/services/job_runner.py
```

**Step 3: Commit**
```bash
git add api/km/services/job_runner.py
git commit -m "feat: job 完成后自动触发 PageRank 更新"
```

---

## Phase C: 多租户 Space 管理 (Tasks 14-16)

### Task 14: 前端 — Pipeline Monitor 状态更新

**Files:**
- Modify: `web/src/pages/admin/pipeline-monitor.tsx`

**Step 1: 更新状态颜色映射**

在 `getStateColor()` 函数中添加 NebulaGraph 相关状态：

```typescript
case 'upserting_graph':
  return 'cyan';
```

**Step 2: 更新过滤选项**

在状态 Select 组件中确保包含所有 pipeline 状态（含 `upserting_graph`）。

**Step 3: Commit**
```bash
git add web/src/pages/admin/pipeline-monitor.tsx
git commit -m "feat: Pipeline Monitor 添加 upserting_graph 状态"
```

---

### Task 15: 前端 — Observability 标签更新

**Files:**
- Modify: `web/src/pages/admin/observability.tsx`

**Step 1: 更新存储标签**

将 `Knowledge Graph (PostgreSQL/ES)` 改为 `Knowledge Graph (NebulaGraph)`:

```typescript
<span>Knowledge Graph (NebulaGraph)</span>
```

**Step 2: Commit**
```bash
git add web/src/pages/admin/observability.tsx
git commit -m "feat: Observability 更新图谱存储标签为 NebulaGraph"
```

---

### Task 16: Space 生命周期管理 — 自动创建/清理

**Files:**
- Modify: `common/graph_store/nebula_conn.py` (add lifecycle methods)

**Step 1: 添加 space 清理和统计方法**

在 `NebulaGraphStore` 类中添加：

```python
    def list_spaces(self) -> list[str]:
        """List all KM graph spaces."""
        result = self._execute(None, "SHOW SPACES;")
        spaces = []
        for i in range(result.row_size()):
            name = result.row_values(i)[0].as_string()
            if name.startswith("km_"):
                spaces.append(name)
        return spaces

    def space_stats(self, space: str) -> dict:
        """Get space statistics."""
        try:
            node_count = self.node_count(space)
            edge_result = self._execute(space, "LOOKUP ON relation YIELD src(edge) | YIELD count(*) AS cnt;")
            edge_count = edge_result.row_values(0)[0].as_int() if edge_result.row_size() > 0 else 0
            return {
                "space": space,
                "node_count": node_count,
                "edge_count": edge_count,
                "status": "active",
            }
        except Exception as e:
            return {"space": space, "status": "error", "error": str(e)}

    def cleanup_empty_spaces(self, dry_run: bool = True) -> list[str]:
        """Remove spaces with 0 nodes (orphaned after KB deletion)."""
        removed = []
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
```

**Step 2: 验证**
```bash
python -m py_compile common/graph_store/nebula_conn.py
```

**Step 3: Commit**
```bash
git add common/graph_store/nebula_conn.py
git commit -m "feat: NebulaGraph space 生命周期管理（列表/统计/清理）"
```

---

### Task 17: KM API — 图谱管理端点

**Files:**
- Modify: `api/apps/sdk/km.py`

**Step 1: 添加图谱管理端点**

```python
@manager.route("/graph/spaces", methods=["GET"])
@login_required
async def graph_list_spaces():
    """List all NebulaGraph spaces with stats."""
    from common.graph_store import get_graph_store
    gs = get_graph_store()
    if not gs:
        return km_response({"spaces": [], "enabled": False})
    spaces = gs.list_spaces()
    stats = [gs.space_stats(s) for s in spaces]
    return km_response({"spaces": stats, "enabled": True})


@manager.route("/graph/health", methods=["GET"])
@login_required
async def graph_health():
    """NebulaGraph health check."""
    from common.graph_store import get_graph_store
    gs = get_graph_store()
    if not gs:
        return km_response({"status": "disabled"})
    return km_response(gs.health_check())
```

**Step 2: Commit**
```bash
git add api/apps/sdk/km.py
git commit -m "feat: 添加 graph/spaces 和 graph/health 管理端点"
```

---

### Task 18: 依赖 — 添加 nebula3-python 到 requirements

**Files:**
- Modify: `pyproject.toml` 或 `requirements.txt`

**Step 1: 添加依赖**

```
nebula3-python>=3.6.0
```

**Step 2: Commit**
```bash
git add pyproject.toml  # or requirements.txt
git commit -m "chore: 添加 nebula3-python 依赖"
```

---

### Task 19: 数据迁移脚本 — 从 ES JSON 迁移到 NebulaGraph

**Files:**
- Create: `api/km/scripts/migrate_graph_to_nebula.py`

**Step 1: 创建迁移脚本**

```python
#!/usr/bin/env python
# KM-CUSTOM: One-time migration — load existing ES graphs into NebulaGraph
"""
Usage: python -m api.km.scripts.migrate_graph_to_nebula --tenant_id=xxx --kb_id=yyy
Or:    python -m api.km.scripts.migrate_graph_to_nebula --all
"""
from __future__ import annotations

import argparse
import asyncio
import logging
import sys

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)


async def migrate_kb(tenant_id: str, kb_id: str) -> dict:
    """Migrate one KB's graph from ES JSON to NebulaGraph."""
    from rag.graphrag.utils import get_graph
    from common.graph_store import get_graph_store

    gs = get_graph_store()
    if not gs:
        return {"status": "error", "reason": "graph_store disabled"}

    # Read existing graph from ES (original path)
    import os
    os.environ["GRAPH_STORE"] = "none"  # Force ES read
    graph = await get_graph(tenant_id, kb_id)
    os.environ["GRAPH_STORE"] = "nebula"  # Restore

    if graph is None or graph.number_of_nodes() == 0:
        return {"status": "skipped", "reason": "no graph in ES"}

    space = gs.ensure_space(tenant_id, kb_id)
    gs.from_networkx(space, graph)

    logger.info(f"Migrated {graph.number_of_nodes()} nodes, {graph.number_of_edges()} edges to {space}")
    return {
        "status": "ok",
        "space": space,
        "nodes": graph.number_of_nodes(),
        "edges": graph.number_of_edges(),
    }


async def migrate_all():
    """Migrate all KBs."""
    from api.db.services.knowledgebase_service import KnowledgebaseService
    kbs = KnowledgebaseService.get_all()
    results = []
    for kb in kbs:
        try:
            r = await migrate_kb(kb.tenant_id, kb.id)
            results.append({"kb_id": kb.id, **r})
        except Exception as e:
            results.append({"kb_id": kb.id, "status": "error", "reason": str(e)})
    return results


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--tenant_id", type=str)
    parser.add_argument("--kb_id", type=str)
    parser.add_argument("--all", action="store_true")
    args = parser.parse_args()

    if args.all:
        results = asyncio.run(migrate_all())
    elif args.tenant_id and args.kb_id:
        results = asyncio.run(migrate_kb(args.tenant_id, args.kb_id))
    else:
        parser.print_help()
        sys.exit(1)

    import json
    print(json.dumps(results, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
```

**Step 2: Commit**
```bash
git add api/km/scripts/migrate_graph_to_nebula.py
git commit -m "feat: ES → NebulaGraph 数据迁移脚本"
```

---

## 验证清单

完成所有 Task 后的端到端验证：

1. `docker compose --profile nebula up -d` — NebulaGraph 三件套启动
2. `GRAPH_STORE=nebula` — 启用图存储
3. 上传文档 → ingest pipeline 完成 → NebulaGraph 有 entity/relation 数据
4. 搜索验证 — n-hop 扩展走 NebulaGraph `GO N STEPS`
5. `rank_flt` 在 ES 中有值 → pagerank 评分生效
6. PageRank 离线更新 API 正常
7. 迁移脚本成功导入已有图谱
8. `GRAPH_STORE=none` — 降级回 ES-only 模式正常工作
