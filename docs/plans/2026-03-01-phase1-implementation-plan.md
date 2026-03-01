# KM 全量技术实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将 RAGFlow v0.24.0 全面改造为 KM (Knowledge Memory) —— 企业级知识中心 + 记忆处理中心，实现全自动 Ingest Pipeline、Agent Job Control Plane、溯源账本、跨存储一致性、记忆承接层、Graph-Enhanced QA、知识治理、安全与配额、可观测性，以及完整的前端管控台。

**Architecture:** 所有 KM 新增代码遵循隔离原则：后端 `api/km/`，模型 `api/db/km_models.py`（`km_` 前缀表），路由 `api/apps/sdk/km.py`（利用 SDK 自动注册获得 `/api/v1/km` 前缀）。复用 RAGFlow 现有基础设施（Redis Streams 任务队列、ES/Infinity 文档存储、MinIO 对象存储），不修改 RAGFlow 原有表结构和核心文件。

**Tech Stack:** Python 3.12 / Quart (async) / Peewee ORM / Redis Streams / Elasticsearch / NetworkX / LLM (via LLMBundle)

---

## 技术验证结论（2026-03-01 Codex + Gemini 审查通过）

### 必须调整的 4 项（已合并到下方各 Task 中）

1. **KM 路由放 `api/apps/sdk/km.py`** — 利用 SDK 自动注册机制获得 `/api/v1` 前缀（原计划 `api/apps/sdk/km.py` 会被 `register_page()` 覆盖前缀）
2. **GraphRAG 触发前加 ES chunk 可见性轮询** — ES refresh lag ~1s，需 poll chunk count > 0 再触发
3. **审计日志改 outbox + batch flush** — 不在请求路径中同步 insert，复用 `bulk_insert_into_db()` 1000 行批量
4. **检查 embedding 维度** — `conf/mapping.json` 只支持 512/768/1024/1536，其他维度需扩展

### 分工表

| 角色 | 负责内容 | 模式 |
|------|----------|------|
| **Codex** | WS1-WS7, WS9-WS16（全部后端） | 多 agent 模式并行 |
| **Gemini** | WS8（图谱分享）, WS17（前端管控台 4 页） | 前端开发 |
| **Claude Sonnet Team** | 前端辅助（API 服务层、类型定义、Hook） | Agent Team 并行 |
| **Claude Opus** | 最终审核 + 集成验证 + Git 管理 | Code Review |

---

## 架构概览

```
Agent (OpenClaw)
  │  MCP/REST API
  ▼
km_app.py Blueprint (/api/v1/km/*)
  │
  ├── IngestService (Job Control Plane)
  │     ├── ingest_submit / ingest_status / ingest_cancel / ingest_retry
  │     ├── Idempotency (content_hash + tenant_id)
  │     ├── State Machine (queued → downloading → ... → completed)
  │     └── Event Push (webhook + SSE)
  │
  ├── MemoryService (记忆承接层)
  │     ├── memory_upsert / memory_query / memory_delete
  │     └── TTL / Archive (minimal)
  │
  ├── ProvenanceService (溯源账本)
  │     └── evidence_trace
  │
  └── GraphService (图谱增量)
        ├── 自动本体推荐
        └── 增量 merge (复用现有 GraphRAG)

KM Models (km_ 前缀表)
  ├── km_ingest_job     — Pipeline 任务主表
  ├── km_ingest_event   — 事件日志 (outbox)
  ├── km_provenance     — 溯源记录
  ├── km_memory         — 记忆条目
  ├── km_ontology       — 本体定义
  └── km_webhook        — Webhook 订阅
```

---

## 工作流 WS1：KM 模块骨架

### Task 1.1: 创建 KM 目录结构和模型文件

**Files:**
- Create: `api/km/__init__.py`
- Create: `api/km/services/__init__.py`
- Create: `api/km/services/ingest_service.py` (stub)
- Create: `api/km/services/memory_km_service.py` (stub)
- Create: `api/km/services/provenance_service.py` (stub)
- Create: `api/km/services/graph_km_service.py` (stub)
- Create: `api/db/km_models.py`

**KM 数据模型设计：**

```python
# api/db/km_models.py
from api.db.db_models import DataBaseModel
from peewee import *

class KmIngestJob(DataBaseModel):
    """Pipeline 任务主表 — Agent 提交的 ingest 请求"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, null=False, index=True)

    # 幂等键：tenant_id + idempotency_key 唯一
    idempotency_key = CharField(max_length=128, null=True, index=True)

    # 来源信息
    source_type = CharField(max_length=32, null=False)  # "file" | "url" | "text"
    source_url = TextField(null=True)
    source_filename = CharField(max_length=512, null=True)
    content_hash = CharField(max_length=64, null=True, index=True)  # xxhash of content

    # 目标知识库
    kb_id = CharField(max_length=32, null=False, index=True)

    # Pipeline 状态机
    state = CharField(max_length=32, null=False, default="queued", index=True)
    # queued → downloading → parsing → chunking → embedding
    #   → extracting_kg → resolving_entities → upserting_graph
    #   → completed | failed | cancelled | partial_completed

    progress_percent = IntegerField(default=0)
    error_code = CharField(max_length=64, null=True)
    error_msg = TextField(null=True)
    retryable = BooleanField(default=True)
    retry_count = IntegerField(default=0)
    max_retries = IntegerField(default=3)

    # 关联的 RAGFlow 资源
    document_id = CharField(max_length=32, null=True, index=True)

    # Pipeline 配置
    pipeline_config = JSONField(default={})
    # {
    #   "parser_id": "naive",
    #   "chunking_strategy": "auto",
    #   "extract_entities": true,
    #   "entity_types": null,  # null = auto detect
    #   "language": "Chinese",
    #   "priority": 0
    # }

    # 产物统计
    chunk_count = IntegerField(default=0)
    entity_count = IntegerField(default=0)
    relation_count = IntegerField(default=0)

    # Agent 溯源
    principal_id = CharField(max_length=64, null=True, index=True)  # 谁提交的
    delegator_id = CharField(max_length=64, null=True)  # 代理谁
    trace_id = CharField(max_length=64, null=True, index=True)

    # 时间戳
    started_at = DateTimeField(null=True)
    completed_at = DateTimeField(null=True)
    eta_seconds = IntegerField(null=True)

    class Meta:
        table_name = "km_ingest_job"
        indexes = (
            (("tenant_id", "idempotency_key"), True),  # UNIQUE
            (("tenant_id", "content_hash"), False),
        )


class KmIngestEvent(DataBaseModel):
    """事件日志 — outbox pattern，驱动 webhook 和 SSE"""
    id = CharField(max_length=32, primary_key=True)
    job_id = CharField(max_length=32, null=False, index=True)
    tenant_id = CharField(max_length=32, null=False, index=True)

    event_type = CharField(max_length=64, null=False, index=True)
    # job.state_changed | job.completed | job.failed | job.progress

    payload = JSONField(default={})
    # { state, progress_percent, error_code, ... }

    delivered = BooleanField(default=False, index=True)
    # outbox: False = 待推送, True = 已推送

    class Meta:
        table_name = "km_ingest_event"


class KmProvenance(DataBaseModel):
    """溯源记录 — 每个 chunk/entity/edge 的来源追踪"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, null=False, index=True)

    artifact_type = CharField(max_length=32, null=False, index=True)
    # "chunk" | "entity" | "relation" | "community"

    artifact_id = CharField(max_length=64, null=False, index=True)
    # chunk ID / entity name / relation ID

    # 来源文档
    source_doc_id = CharField(max_length=32, null=False, index=True)
    source_doc_name = CharField(max_length=512, null=True)
    source_offset_start = IntegerField(null=True)  # 字符偏移
    source_offset_end = IntegerField(null=True)
    source_page = IntegerField(null=True)

    # Pipeline 版本
    job_id = CharField(max_length=32, null=True, index=True)
    extractor_version = CharField(max_length=32, null=True)
    pipeline_version = CharField(max_length=32, null=True)

    # 质量信号
    confidence = FloatField(default=1.0)
    extraction_method = CharField(max_length=64, null=True)
    # "llm_light_kg" | "llm_general_kg" | "rule_based" | "manual"

    class Meta:
        table_name = "km_provenance"
        indexes = (
            (("tenant_id", "artifact_type", "artifact_id"), False),
        )


class KmMemory(DataBaseModel):
    """KM 记忆条目 — 面向外部 Agent 的记忆存储"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, null=False, index=True)

    # 记忆内容
    content = TextField(null=False)
    content_type = CharField(max_length=32, default="text")
    # "text" | "fact" | "event" | "procedure" | "preference"

    # 分层 & 作用域（由调用方决定）
    scope = CharField(max_length=32, default="personal", index=True)
    # "session" | "personal" | "team" | "org"
    owner_id = CharField(max_length=64, null=True, index=True)
    space_id = CharField(max_length=64, null=True, index=True)

    # 时效
    ttl_seconds = IntegerField(null=True)  # null = permanent
    expires_at = DateTimeField(null=True, index=True)

    # 质量信号
    importance = FloatField(default=0.5)  # 0.0~1.0
    access_count = IntegerField(default=0)
    last_accessed_at = DateTimeField(null=True)

    # 向量 (存储在 ES/Infinity 的 memory index)
    embedding_id = CharField(max_length=64, null=True)

    # Agent 溯源
    principal_id = CharField(max_length=64, null=True, index=True)
    trace_id = CharField(max_length=64, null=True)
    source_ref = TextField(null=True)  # 来源引用（对话ID、文档ID等）

    # 状态
    is_archived = BooleanField(default=False, index=True)
    is_deleted = BooleanField(default=False, index=True)

    class Meta:
        table_name = "km_memory"
        indexes = (
            (("tenant_id", "scope", "owner_id"), False),
        )


class KmOntology(DataBaseModel):
    """本体定义 — 实体类型和关系类型的管理"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, null=False, index=True)
    kb_id = CharField(max_length=32, null=False, index=True)

    # 本体类型
    ontology_type = CharField(max_length=32, null=False)
    # "entity_type" | "relation_type"

    name = CharField(max_length=128, null=False)
    description = TextField(null=True)

    # 来源
    source = CharField(max_length=32, default="auto")
    # "auto" | "template" | "manual"

    # 使用统计
    instance_count = IntegerField(default=0)

    # 是否激活
    is_active = BooleanField(default=True)

    class Meta:
        table_name = "km_ontology"
        indexes = (
            (("tenant_id", "kb_id", "ontology_type", "name"), True),  # UNIQUE
        )


class KmWebhook(DataBaseModel):
    """Webhook 订阅 — Agent 注册的回调地址"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, null=False, index=True)

    url = CharField(max_length=2048, null=False)
    secret = CharField(max_length=128, null=True)  # HMAC signing key

    # 事件过滤
    event_types = JSONField(default=[])
    # ["job.completed", "job.failed", "job.state_changed"]

    is_active = BooleanField(default=True)
    failure_count = IntegerField(default=0)
    last_failure_at = DateTimeField(null=True)

    class Meta:
        table_name = "km_webhook"
```

**RAGFlow 集成点（最小修改）：**

```python
# api/ragflow_server.py — 添加 2 行
# 在 init_database_tables() 中:
from api.db.km_models import init_km_tables  # KM-CUSTOM
init_km_tables()  # KM-CUSTOM
```

```python
# api/apps/__init__.py — 添加 KM Blueprint 注册
# 或 api/apps/sdk/km.py 放入 api/apps/ 目录自动发现
```

**技术要点：**
- Peewee `create_table(safe=True)` 幂等建表
- 迁移沿用 RAGFlow 的 `alter_db_add_column` 模式（吞 duplicate column 错误）
- 所有新表 `km_` 前缀，不与 RAGFlow 表冲突

---

### Task 1.2: 创建 KM API Blueprint

**Files:**
- Create: `api/apps/sdk/km.py`

**设计：**

```python
# api/apps/sdk/km.py
"""
KM (Knowledge Memory) API Blueprint
所有 KM 接口统一前缀 /api/v1/km/
使用 RAGFlow SDK 认证模式（API Key Bearer Token）
"""
from quart import Blueprint
from api.utils.api_utils import token_required, get_result, get_error_data_result

km_bp = Blueprint("km", __name__, url_prefix="/api/v1/km")

# --- Ingest ---
@km_bp.route("/ingest/submit", methods=["POST"])
@token_required
async def ingest_submit(tenant_id):
    """提交 ingest 任务"""
    pass

@km_bp.route("/ingest/<job_id>/status", methods=["GET"])
@token_required
async def ingest_status(tenant_id, job_id):
    """查询任务状态"""
    pass

@km_bp.route("/ingest/<job_id>/cancel", methods=["POST"])
@token_required
async def ingest_cancel(tenant_id, job_id):
    """取消任务"""
    pass

@km_bp.route("/ingest/<job_id>/retry", methods=["POST"])
@token_required
async def ingest_retry(tenant_id, job_id):
    """重试任务"""
    pass

@km_bp.route("/ingest/<job_id>/events", methods=["GET"])
@token_required
async def ingest_events(tenant_id, job_id):
    """SSE 事件流"""
    pass

# --- Memory ---
@km_bp.route("/memory", methods=["POST"])
@token_required
async def memory_upsert(tenant_id):
    """写入/更新记忆"""
    pass

@km_bp.route("/memory/query", methods=["POST"])
@token_required
async def memory_query(tenant_id):
    """语义检索记忆"""
    pass

@km_bp.route("/memory/<memory_id>", methods=["DELETE"])
@token_required
async def memory_delete(tenant_id, memory_id):
    """删除记忆"""
    pass

# --- Provenance ---
@km_bp.route("/provenance/<artifact_type>/<artifact_id>", methods=["GET"])
@token_required
async def evidence_trace(tenant_id, artifact_type, artifact_id):
    """查询溯源链"""
    pass

# --- Graph ---
@km_bp.route("/ontology/<kb_id>/recommend", methods=["POST"])
@token_required
async def ontology_recommend(tenant_id, kb_id):
    """自动本体推荐"""
    pass

# --- Webhook ---
@km_bp.route("/webhook", methods=["POST"])
@token_required
async def webhook_register(tenant_id):
    """注册 webhook"""
    pass

@km_bp.route("/webhook/<webhook_id>", methods=["DELETE"])
@token_required
async def webhook_unregister(tenant_id, webhook_id):
    """注销 webhook"""
    pass
```

**注册方式：**

RAGFlow 的 `api/apps/__init__.py` 会自动扫描 `*_app.py` 文件并注册 Blueprint。但 SDK 路由在 `api/apps/sdk/` 目录下用 `@token_required`，而 `api/apps/` 下的用 `@login_required`。

方案：`km_app.py` 放在 `api/apps/` 下，内部用 `@token_required` 装饰器（同 SDK 模式）。需要验证自动发现机制是否支持自定义 `url_prefix`。

**技术风险：**
- Blueprint 自动注册可能会覆盖 `url_prefix`，需要检查 `api/apps/__init__.py` 的注册逻辑
- 如果不兼容，改为手动注册（在 `ragflow_server.py` 中显式 `app.register_blueprint(km_bp)`）

---

## 工作流 WS2：Agent Job Control Plane

### Task 2.1: IngestService 核心 — 状态机 + 幂等提交

**Files:**
- Create: `api/km/services/ingest_service.py`

**状态机定义：**

```python
# 合法状态转换
STATE_TRANSITIONS = {
    "queued":              ["downloading", "parsing", "cancelled", "failed"],
    "downloading":         ["parsing", "failed", "cancelled"],
    "parsing":             ["chunking", "failed", "cancelled"],
    "chunking":            ["embedding", "failed", "cancelled"],
    "embedding":           ["extracting_kg", "completed", "failed", "cancelled"],
    "extracting_kg":       ["resolving_entities", "completed", "failed", "cancelled"],
    "resolving_entities":  ["upserting_graph", "failed", "cancelled"],
    "upserting_graph":     ["completed", "failed", "cancelled"],
    "completed":           [],  # 终态
    "failed":              ["queued"],  # retry → 回到 queued
    "cancelled":           [],  # 终态
    "partial_completed":   ["queued"],  # retry → 回到 queued
}
```

**幂等逻辑：**

```python
async def submit(self, tenant_id, params):
    # 1. 检查 idempotency_key
    if params.get("idempotency_key"):
        existing = KmIngestJob.get_or_none(
            KmIngestJob.tenant_id == tenant_id,
            KmIngestJob.idempotency_key == params["idempotency_key"]
        )
        if existing:
            return existing  # 幂等重放

    # 2. 检查 content_hash 去重
    content_hash = compute_hash(content)
    existing_by_hash = KmIngestJob.get_or_none(
        KmIngestJob.tenant_id == tenant_id,
        KmIngestJob.content_hash == content_hash,
        KmIngestJob.kb_id == params["kb_id"],
        KmIngestJob.state == "completed"
    )
    if existing_by_hash:
        return {"status": "duplicate", "existing_job_id": existing_by_hash.id}

    # 3. 创建 Job
    job = create_job(tenant_id, params, content_hash)

    # 4. 写 outbox 事件
    create_event(job.id, "job.created", {})

    # 5. 推入 Redis 队列
    enqueue_job(job)

    return job
```

**核心问题：如何与 RAGFlow 已有 pipeline 对接？**

两种方案：

**方案 A — 包装模式（推荐）：**
KM IngestService 作为上层编排者，内部调用 RAGFlow 现有的：
1. `FileService.upload_document()` — 上传文件到 MinIO + 创建 Document 记录
2. `DocumentService.run()` → `queue_tasks()` — 推入 RAGFlow 任务队列
3. RAGFlow `task_executor` 完成解析+切片+向量化
4. KM 监听 Document 进度，到达 embedding 完成后，触发 KG 抽取
5. KM 自己编排 KG 抽取 + 图谱合并

```
KM IngestService (编排层)
  │
  ├── [downloading] 下载文件(URL)/接收文件
  ├── [parsing+chunking+embedding] → 委托给 RAGFlow DocumentService.run()
  │     └── 轮询 Document.progress / Task.progress 跟踪状态
  ├── [extracting_kg] → 调用 run_graphrag_for_kb() (现有)
  ├── [resolving_entities] → 调用 resolve_entities() (现有)
  ├── [upserting_graph] → 调用 merge_subgraph() (现有)
  └── [completed] → 写溯源记录 + 发事件
```

**方案 B — 独立 worker：**
KM 自己的 task_executor，独立于 RAGFlow worker。需要复制大量代码，不推荐。

**选择方案 A，理由：**
- 复用 RAGFlow 成熟的解析/切片/向量化能力
- 不需要维护两套 worker
- KM 只做"编排+增强"（KG 抽取、溯源、事件）

**技术风险：**
- RAGFlow `DocumentService.run()` 是同步触发异步队列，KM 需要异步轮询 Document 进度
- 需要一个后台协程/线程来推进 KM Job 状态机

---

### Task 2.2: Job 状态推进器（Background Worker）

**Files:**
- Create: `api/km/services/job_runner.py`

**设计：**

```python
class KmJobRunner:
    """
    后台协程，周期性扫描 km_ingest_job 表，推进状态机。

    运行方式：在 ragflow_server.py 启动时注册后台任务。
    周期：每 3 秒扫描一次。
    """

    async def tick(self):
        # 1. 扫描 state IN ("queued", "downloading", "parsing", "chunking", "embedding")
        active_jobs = KmIngestJob.select().where(
            KmIngestJob.state.not_in(["completed", "failed", "cancelled"])
        )

        for job in active_jobs:
            await self.advance(job)

    async def advance(self, job):
        if job.state == "queued":
            await self._handle_queued(job)
        elif job.state in ("downloading",):
            await self._handle_downloading(job)
        elif job.state in ("parsing", "chunking", "embedding"):
            await self._check_ragflow_progress(job)
        elif job.state == "extracting_kg":
            await self._check_kg_progress(job)
        # ...

    async def _handle_queued(self, job):
        """queued → downloading/parsing"""
        if job.source_type == "url":
            # 下载文件
            transition(job, "downloading")
            # 启动下载协程
        elif job.source_type == "file":
            # 文件已在 MinIO，直接触发解析
            transition(job, "parsing")
            await self._trigger_ragflow_parse(job)

    async def _trigger_ragflow_parse(self, job):
        """调用 RAGFlow DocumentService.run() 触发解析"""
        doc = DocumentService.get_by_id(job.document_id)
        DocumentService.run(job.tenant_id, doc, kb_table_num_map={})

    async def _check_ragflow_progress(self, job):
        """轮询 RAGFlow Document/Task 进度"""
        doc = Document.get_by_id(job.document_id)

        if doc.run == TaskStatus.DONE:
            # 解析+切片+向量化完成
            job.chunk_count = doc.chunk_num
            transition(job, "extracting_kg")
            await self._trigger_kg_extraction(job)
        elif doc.run == TaskStatus.FAIL:
            transition(job, "failed", error_msg=doc.progress_msg)
        else:
            # 更新进度
            job.progress_percent = int(doc.progress * 50)  # RAGFlow部分占50%
            job.save()

    async def _trigger_kg_extraction(self, job):
        """触发 GraphRAG 抽取"""
        # 复用现有 run_graphrag_for_kb()
        # 需要构造 row dict (模拟 Knowledgebase 行)
        pass
```

**集成到 ragflow_server.py：**

```python
# api/ragflow_server.py — 添加 KM Job Runner
from api.km.services.job_runner import KmJobRunner  # KM-CUSTOM

# 在 app startup 中:
@app.before_serving
async def start_km_runner():  # KM-CUSTOM
    runner = KmJobRunner()
    asyncio.create_task(runner.run_forever())
```

**技术风险：**
- `DocumentService.run()` 内部调用的 `queue_tasks()` 需要 `kb_table_num_map` 参数（知识库→表编号映射），需要正确构造
- GraphRAG 的 `run_graphrag_for_kb()` 是阻塞式的，需要在线程池中运行
- 多实例部署时需要分布式锁（可复用 RAGFlow 的 `RedisDistributedLock`）

---

### Task 2.3: Webhook 推送 + SSE 事件流

**Files:**
- Create: `api/km/services/event_service.py`

**Webhook 推送设计：**

```python
class EventService:
    """
    Outbox 模式：
    1. 业务操作写 km_ingest_event 表（delivered=False）
    2. 后台扫描 undelivered events
    3. 按 tenant_id 查找 km_webhook 订阅
    4. POST 到 webhook URL (带 HMAC 签名)
    5. 成功 → delivered=True; 失败 → retry (指数退避)
    """

    @staticmethod
    def publish(job_id, tenant_id, event_type, payload):
        """写入 outbox"""
        KmIngestEvent.insert(
            id=get_uuid(),
            job_id=job_id,
            tenant_id=tenant_id,
            event_type=event_type,
            payload=payload,
            delivered=False
        )

    async def deliver_pending(self):
        """扫描并推送未投递事件"""
        events = KmIngestEvent.select().where(
            KmIngestEvent.delivered == False
        ).order_by(KmIngestEvent.create_time).limit(100)

        for event in events:
            webhooks = KmWebhook.select().where(
                KmWebhook.tenant_id == event.tenant_id,
                KmWebhook.is_active == True
            )
            for wh in webhooks:
                if event.event_type in wh.event_types or not wh.event_types:
                    await self._post_webhook(wh, event)

            event.delivered = True
            event.save()
```

**SSE 端点设计：**

```python
# api/apps/sdk/km.py
@km_bp.route("/ingest/<job_id>/events", methods=["GET"])
@token_required
async def ingest_events_sse(tenant_id, job_id):
    """SSE 事件流 — 实时推送 job 状态变化"""
    async def generate():
        last_event_id = 0
        while True:
            events = KmIngestEvent.select().where(
                KmIngestEvent.job_id == job_id,
                KmIngestEvent.id > last_event_id
            ).order_by(KmIngestEvent.create_time)

            for event in events:
                yield f"data:{json.dumps(event.payload)}\n\n"
                last_event_id = event.id

            # 检查 job 是否结束
            job = KmIngestJob.get_by_id(job_id)
            if job.state in ("completed", "failed", "cancelled"):
                yield f"data:{json.dumps({'state': job.state, 'done': True})}\n\n"
                break

            await asyncio.sleep(1)

    resp = Response(generate(), mimetype="text/event-stream")
    resp.headers["Cache-Control"] = "no-cache"
    resp.headers["Connection"] = "keep-alive"
    resp.headers["X-Accel-Buffering"] = "no"
    return resp
```

---

## 工作流 WS3：溯源账本（Provenance Ledger）

### Task 3.1: 溯源记录写入

**Files:**
- Implement: `api/km/services/provenance_service.py`

**设计：**

```python
class ProvenanceService:
    """
    在 pipeline 的各个阶段写入溯源记录：

    1. chunking 完成后 → 每个 chunk 记录来源文档 + 页码 + 偏移量
    2. entity extraction 后 → 每个实体记录来源 chunk + 抽取方法 + 置信度
    3. relation extraction 后 → 每个关系记录来源 chunk + 抽取方法
    """

    PIPELINE_VERSION = "1.0.0"

    @classmethod
    def record_chunks(cls, tenant_id, job_id, doc_id, doc_name, chunks):
        """批量记录 chunk 溯源"""
        records = []
        for chunk in chunks:
            records.append({
                "id": get_uuid(),
                "tenant_id": tenant_id,
                "artifact_type": "chunk",
                "artifact_id": chunk["chunk_id"],
                "source_doc_id": doc_id,
                "source_doc_name": doc_name,
                "source_page": chunk.get("page_num"),
                "source_offset_start": chunk.get("offset_start"),
                "source_offset_end": chunk.get("offset_end"),
                "job_id": job_id,
                "pipeline_version": cls.PIPELINE_VERSION,
                "confidence": 1.0,
                "extraction_method": "parser",
            })
        bulk_insert_into_db(KmProvenance, records, True)

    @classmethod
    def record_entities(cls, tenant_id, job_id, doc_id, entities, method="llm_light_kg"):
        """批量记录实体溯源"""
        records = []
        for entity in entities:
            records.append({
                "id": get_uuid(),
                "tenant_id": tenant_id,
                "artifact_type": "entity",
                "artifact_id": entity["entity_name"],
                "source_doc_id": doc_id,
                "source_doc_name": entity.get("source_doc_name"),
                "job_id": job_id,
                "extractor_version": "light_kg_v1",
                "pipeline_version": cls.PIPELINE_VERSION,
                "confidence": entity.get("confidence", 0.8),
                "extraction_method": method,
            })
        bulk_insert_into_db(KmProvenance, records, True)
```

**集成点：**
- 在 `KmJobRunner._check_ragflow_progress()` 中，当 Document 处理完成后，读取 chunks 并写溯源
- 在 `KmJobRunner._trigger_kg_extraction()` 中，包装 GraphRAG 的抽取结果，写实体/关系溯源

**技术风险：**
- RAGFlow chunks 存在 ES 中，没有 MySQL 备份。需要从 `docStoreConn` 读取 chunk 信息
- chunks 的 offset 信息可能在 RAGFlow 解析过程中丢失（部分 parser 不保留 offset）

---

### Task 3.2: 溯源查询 API

**Files:**
- Implement: `api/apps/sdk/km.py` 中的 `evidence_trace` 端点

**设计：**

```python
@km_bp.route("/provenance/<artifact_type>/<artifact_id>", methods=["GET"])
@token_required
async def evidence_trace(tenant_id, artifact_type, artifact_id):
    """
    查询溯源链
    返回：artifact → source chunks → source documents → ingest jobs
    """
    records = KmProvenance.select().where(
        KmProvenance.tenant_id == tenant_id,
        KmProvenance.artifact_type == artifact_type,
        KmProvenance.artifact_id == artifact_id
    ).order_by(KmProvenance.create_time.desc())

    return get_result(data=[{
        "source_doc_id": r.source_doc_id,
        "source_doc_name": r.source_doc_name,
        "source_page": r.source_page,
        "source_offset": [r.source_offset_start, r.source_offset_end],
        "confidence": r.confidence,
        "extraction_method": r.extraction_method,
        "job_id": r.job_id,
        "pipeline_version": r.pipeline_version,
        "created_at": str(r.create_date),
    } for r in records])
```

---

## 工作流 WS4：全自动 Ingest Pipeline

### Task 4.1: ingest_submit 端点完整实现

**Files:**
- Implement: `api/apps/sdk/km.py` 中的 `ingest_submit`
- Implement: `api/km/services/ingest_service.py`

**请求格式：**

```json
POST /api/v1/km/ingest/submit
Authorization: Bearer <api_key>

{
  "source_type": "url",                    // "url" | "file" | "text"
  "source_url": "https://arxiv.org/...",   // when source_type=url
  "kb_id": "kb-uuid",                      // 目标知识库
  "pipeline_config": {
    "parser_id": "naive",                   // 解析器（可选，默认 auto）
    "extract_entities": true,               // 是否做 KG 抽取
    "entity_types": null,                   // null = 自动推荐
    "language": "Chinese",
    "priority": 0                           // 队列优先级
  },
  "idempotency_key": "agent-request-123",  // 幂等键（可选）
  "trace_id": "trace-uuid"                 // 调用链 ID（可选）
}
```

**响应格式：**

```json
{
  "status": "ok",
  "data": {
    "job_id": "km-job-uuid",
    "state": "queued",
    "progress_percent": 0,
    "created_at": "2026-03-01T10:00:00Z"
  },
  "meta": {
    "trace_id": "trace-uuid",
    "idempotency_replay": false
  },
  "control": {
    "next_tool_hint": "ingest_status",
    "poll_interval_ms": 3000,
    "events_url": "/api/v1/km/ingest/<job_id>/events"
  }
}
```

**核心流程：**

```python
async def ingest_submit(tenant_id):
    params = await request.json

    # 1. 验证 kb_id 存在且属于该 tenant
    kb = KnowledgebaseService.get_by_id(params["kb_id"])
    if not kb or kb.tenant_id != tenant_id:
        return get_error_data_result("Knowledge base not found")

    # 2. 幂等检查
    if params.get("idempotency_key"):
        existing = KmIngestJob.get_or_none(
            tenant_id=tenant_id,
            idempotency_key=params["idempotency_key"]
        )
        if existing:
            return get_result(data=job_to_dict(existing),
                            meta={"idempotency_replay": True})

    # 3. 根据 source_type 处理
    if params["source_type"] == "url":
        # 下载到临时文件
        job = create_job(tenant_id, params, state="queued")
    elif params["source_type"] == "file":
        # 文件在请求 multipart 中
        file_obj = (await request.files).get("file")
        content_hash = compute_xxhash(file_obj.read())

        # 内容去重
        dup = check_duplicate(tenant_id, content_hash, params["kb_id"])
        if dup:
            return get_result(data={"duplicate": True, "existing_job_id": dup.id})

        # 上传到 MinIO + 创建 Document
        doc = await upload_to_ragflow(kb, file_obj, tenant_id)
        job = create_job(tenant_id, params, state="queued",
                        document_id=doc["id"], content_hash=content_hash)

    # 4. 写 outbox 事件
    EventService.publish(job.id, tenant_id, "job.created", job_to_dict(job))

    # 5. 返回
    return get_result(data=job_to_dict(job), ...)
```

**技术难点：**
- URL 下载需要异步（httpx），可能很耗时
- multipart 文件上传需要同时支持 `request.files` 和 JSON body
- `upload_to_ragflow()` 需要调用 `FileService.upload_document()` 但该方法是同步的，需要 `thread_pool_exec`

---

### Task 4.2: ingest_status / ingest_cancel / ingest_retry

**Files:**
- Implement: `api/apps/sdk/km.py` 中对应端点

**status 响应：**

```json
{
  "status": "ok",
  "data": {
    "job_id": "uuid",
    "state": "extracting_kg",
    "progress_percent": 65,
    "retryable": true,
    "error_code": null,
    "error_msg": null,
    "chunk_count": 42,
    "entity_count": 18,
    "relation_count": 25,
    "created_at": "...",
    "started_at": "...",
    "eta_seconds": 30
  }
}
```

**cancel 逻辑：**

```python
async def ingest_cancel(tenant_id, job_id):
    job = KmIngestJob.get_or_none(id=job_id, tenant_id=tenant_id)
    if not job:
        return get_error_data_result("Job not found")

    if job.state in ("completed", "cancelled"):
        return get_error_data_result(f"Cannot cancel job in state {job.state}")

    # 如果 RAGFlow Document 正在处理，也取消它
    if job.document_id:
        DocumentService.do_cancel(job.document_id)
        cancel_all_task_of(job.document_id)

    transition(job, "cancelled")
    EventService.publish(job.id, tenant_id, "job.cancelled", {})
    return get_result(data=job_to_dict(job))
```

**retry 逻辑：**

```python
async def ingest_retry(tenant_id, job_id):
    job = KmIngestJob.get_or_none(id=job_id, tenant_id=tenant_id)
    if job.state not in ("failed", "partial_completed"):
        return get_error_data_result("Only failed jobs can be retried")
    if job.retry_count >= job.max_retries:
        return get_error_data_result("Max retries exceeded")

    job.retry_count += 1
    transition(job, "queued")  # 回到队列
    EventService.publish(job.id, tenant_id, "job.retrying", {})
    return get_result(data=job_to_dict(job))
```

---

## 工作流 WS5：记忆承接层

### Task 5.1: memory_upsert API

**Files:**
- Implement: `api/km/services/memory_km_service.py`

**请求格式：**

```json
POST /api/v1/km/memory
Authorization: Bearer <api_key>

{
  "content": "用户偏好：不喜欢在周五开会",
  "content_type": "preference",
  "scope": "personal",
  "owner_id": "user-123",
  "space_id": "project-abc",
  "importance": 0.8,
  "ttl_seconds": null,
  "source_ref": "conversation:conv-456#msg-789",
  "trace_id": "trace-uuid"
}
```

**核心逻辑：**

```python
class KmMemoryService:

    @classmethod
    async def upsert(cls, tenant_id, params):
        """写入/更新记忆"""
        # 1. 生成 embedding
        embd_mdl = LLMBundle(tenant_id, LLMType.EMBEDDING)
        embedding = await thread_pool_exec(
            embd_mdl.encode, [params["content"]]
        )

        # 2. 创建/更新记忆记录
        memory = KmMemory.insert(
            id=get_uuid(),
            tenant_id=tenant_id,
            content=params["content"],
            content_type=params.get("content_type", "text"),
            scope=params.get("scope", "personal"),
            owner_id=params.get("owner_id"),
            space_id=params.get("space_id"),
            importance=params.get("importance", 0.5),
            ttl_seconds=params.get("ttl_seconds"),
            expires_at=compute_expiry(params.get("ttl_seconds")),
            principal_id=params.get("principal_id"),
            trace_id=params.get("trace_id"),
            source_ref=params.get("source_ref"),
        )

        # 3. 写入向量索引 (ES/Infinity)
        index_name = f"km_memory_{tenant_id}"
        docStoreConn.insert([{
            "id": memory.id,
            "content_ltks": rag_tokenizer.tokenize(params["content"]),
            "content_sm_ltks": rag_tokenizer.fine_grained_tokenize(
                rag_tokenizer.tokenize(params["content"])
            ),
            f"q_{len(embedding[0])}_vec": embedding[0].tolist(),
            "tenant_id": tenant_id,
            "scope": params.get("scope", "personal"),
            "owner_id": params.get("owner_id", ""),
            "importance_flt": params.get("importance", 0.5),
        }], index_name, None)

        return memory
```

**技术风险：**
- ES index `km_memory_{tenant_id}` 需要预创建 mapping（向量维度取决于 embedding model）
- RAGFlow 的 `docStoreConn` 对 index 有 mapping 自动推断，但向量字段名是 `q_{N}_vec` 格式

---

### Task 5.2: memory_query API

**Files:**
- Implement: `api/km/services/memory_km_service.py`

**请求格式：**

```json
POST /api/v1/km/memory/query
Authorization: Bearer <api_key>

{
  "query": "用户对周五的态度",
  "scope": "personal",
  "owner_id": "user-123",
  "top_k": 10,
  "min_similarity": 0.5,
  "content_types": ["preference", "fact"],
  "include_archived": false
}
```

**核心逻辑：**

```python
@classmethod
async def query(cls, tenant_id, params):
    """语义检索记忆"""
    # 1. Query embedding
    embd_mdl = LLMBundle(tenant_id, LLMType.EMBEDDING)
    query_vec = await thread_pool_exec(
        embd_mdl.encode, [params["query"]]
    )

    # 2. 构建过滤条件
    filters = {"tenant_id": tenant_id}
    if params.get("scope"):
        filters["scope"] = params["scope"]
    if params.get("owner_id"):
        filters["owner_id"] = params["owner_id"]

    # 3. 向量检索
    index_name = f"km_memory_{tenant_id}"
    results = docStoreConn.search(
        selectFields=["id", "content_ltks", "importance_flt"],
        highlightFields=["content_ltks"],
        condition=filters,
        matchExprs=[MatchExpr(query_vec[0], topn=params.get("top_k", 10))],
        indexNames=index_name,
        knowledgebaseIds=[]
    )

    # 4. 关联 MySQL 记录
    memory_ids = [r["id"] for r in results]
    memories = KmMemory.select().where(KmMemory.id.in_(memory_ids))

    # 5. 过滤已过期 + 已删除
    now = datetime.now()
    valid = [m for m in memories
             if not m.is_deleted
             and (not m.expires_at or m.expires_at > now)
             and (params.get("include_archived") or not m.is_archived)]

    # 6. 更新 access_count
    for m in valid:
        m.access_count += 1
        m.last_accessed_at = now
        m.save()

    return valid
```

---

## 工作流 WS6：图谱增量更新 + 自动本体

### Task 6.1: 图谱自动触发集成

**现状分析：**

RAGFlow 的 GraphRAG 是"手动触发"模式：
1. 用户在 KB 设置中启用 GraphRAG
2. 上传文档 → 手动解析（产生 chunks）
3. 手动点击"运行图谱"→ `queue_raptor_o_graphrag_tasks()` 推入队列
4. task_executor 执行 `run_graphrag_for_kb()`

**KM 目标：** pipeline 自动触发，解析+向量化完成后自动执行 GraphRAG。

**实现方案：**

在 `KmJobRunner` 中，当 Document 处理完成（`doc.run == DONE`）且 `pipeline_config.extract_entities == true` 时：

```python
async def _trigger_kg_extraction(self, job):
    """自动触发 GraphRAG 抽取"""
    kb = KnowledgebaseService.get_by_id(job.kb_id)
    tenant = TenantService.get_by_tenant_id(job.tenant_id)

    # 构造 GraphRAG 需要的 row dict
    row = {
        "id": kb.id,
        "tenant_id": job.tenant_id,
        "embd_id": kb.embd_id,
        "parser_config": kb.parser_config,
    }

    # 获取 LLM 和 Embedding 模型
    llm_bdl = LLMBundle(job.tenant_id, LLMType.CHAT)
    embd_bdl = LLMBundle(job.tenant_id, LLMType.EMBEDDING)

    # 获取本体配置（实体类型）
    entity_types = await self._get_entity_types(job)

    # 在线程池中执行（GraphRAG 是 CPU/IO 密集型）
    from rag.graphrag.general.index import run_graphrag
    await thread_pool_exec(
        run_graphrag,
        row,
        [job.document_id],
        job.tenant_id,
        llm_bdl,
        embd_bdl,
        entity_types,
        callback=lambda prog, msg: self._update_kg_progress(job, prog, msg)
    )

    transition(job, "completed")
```

**增量性：** RAGFlow 现有的 `merge_subgraph()` 已经支持增量合并（新文档的子图 merge 到全局图）。`graph_merge()` 使用 NetworkX 的 node/edge 合并。所以**增量更新已经内建**，不需要额外开发。

---

### Task 6.2: 自动本体推荐

**Files:**
- Implement: `api/km/services/graph_km_service.py`

**设计：**

```python
class GraphKmService:

    ONTOLOGY_PROMPT = """分析以下文档片段，推荐适合的实体类型和关系类型。

文档片段：
{samples}

请返回 JSON 格式：
{{
  "entity_types": ["类型1", "类型2", ...],
  "relation_types": ["关系1", "关系2", ...],
  "reasoning": "推荐理由"
}}

要求：
- 实体类型不超过 10 个
- 关系类型不超过 15 个
- 优先使用通用类型（人物、组织、地点、事件、概念、技术、产品）
- 根据文档领域补充专业类型
"""

    @classmethod
    async def recommend_ontology(cls, tenant_id, kb_id):
        """
        基于知识库已有文档的 chunks，LLM 推荐本体。

        流程：
        1. 从 ES 随机采样 20 个 chunks
        2. LLM 分析并推荐实体/关系类型
        3. 存入 km_ontology 表
        4. 返回推荐结果供管理员确认
        """
        # 1. 采样 chunks
        index_name = search.index_name(tenant_id)
        chunks = docStoreConn.search(
            selectFields=["content_ltks"],
            condition={"kb_id": kb_id},
            indexNames=index_name,
            orderBy="random",
            limit=20
        )
        samples = "\n---\n".join([c["content_ltks"][:500] for c in chunks])

        # 2. LLM 推荐
        llm = LLMBundle(tenant_id, LLMType.CHAT)
        response = await thread_pool_exec(
            llm.chat, cls.ONTOLOGY_PROMPT.format(samples=samples)
        )
        result = json.loads(extract_json(response))

        # 3. 写入 km_ontology
        for et in result["entity_types"]:
            KmOntology.insert(
                id=get_uuid(), tenant_id=tenant_id, kb_id=kb_id,
                ontology_type="entity_type", name=et, source="auto"
            ).on_conflict(action="IGNORE").execute()

        for rt in result["relation_types"]:
            KmOntology.insert(
                id=get_uuid(), tenant_id=tenant_id, kb_id=kb_id,
                ontology_type="relation_type", name=rt, source="auto"
            ).on_conflict(action="IGNORE").execute()

        return result

    @classmethod
    async def get_entity_types(cls, tenant_id, kb_id):
        """获取知识库的实体类型列表"""
        types = KmOntology.select(KmOntology.name).where(
            KmOntology.tenant_id == tenant_id,
            KmOntology.kb_id == kb_id,
            KmOntology.ontology_type == "entity_type",
            KmOntology.is_active == True
        )
        if types:
            return [t.name for t in types]
        else:
            # 冷启动默认
            return ["人物", "组织", "地点", "事件", "概念", "技术", "产品"]
```

**技术风险：**
- LLM 推荐的实体类型质量不确定，需要管理员审核流程
- `docStoreConn.search` 不支持 `orderBy="random"`，需要用其他方式采样
- 实体类型传入 GraphRAG 的 `entity_types` 参数时格式需要匹配

---

## 工作流 WS7：跨存储一致性

### Task 7.1: Outbox Pattern 实现

**设计理念：**

MySQL 是 source of truth。ES/Vector/Graph 都是派生索引。如果派生索引与 MySQL 不一致：
- 以 MySQL 为准
- Outbox 事件驱动重建

**现有机制分析：**

RAGFlow 已经有类似机制：
- `DocumentService.update_progress()` 后台线程每 6s 同步 Document 进度
- `insert_chunks()` 写入 ES 后更新 `TaskService.update_chunk_ids()` (MySQL)
- 如果 ES 写入失败，Task 标记为 failed，可重试

**KM 增强方案：**

对于 KM 的 `km_ingest_job` 和 `km_provenance`，MySQL 写入是原子的（在同一事务中）。ES 索引是最终一致的。

```python
class ConsistencyService:
    """
    Reconciler — 定期检查 MySQL 和 ES 的一致性
    运行频率：每 10 分钟
    """

    @classmethod
    async def reconcile_memories(cls, tenant_id):
        """检查 km_memory 表和 ES km_memory_{tenant_id} 索引的一致性"""
        # 1. MySQL 中所有活跃记忆
        mysql_ids = set(m.id for m in KmMemory.select(KmMemory.id).where(
            KmMemory.tenant_id == tenant_id,
            KmMemory.is_deleted == False
        ))

        # 2. ES 中所有记忆
        es_ids = set(docStoreConn.get_all_ids(f"km_memory_{tenant_id}"))

        # 3. MySQL 有但 ES 没有 → 重新索引
        missing_in_es = mysql_ids - es_ids
        if missing_in_es:
            await cls._reindex_memories(tenant_id, missing_in_es)

        # 4. ES 有但 MySQL 没有 → 删除 ES 记录
        orphans_in_es = es_ids - mysql_ids
        if orphans_in_es:
            docStoreConn.delete({"id": list(orphans_in_es)}, f"km_memory_{tenant_id}")
```

**技术风险：**
- `docStoreConn` 的接口可能不支持 `get_all_ids()`，需要检查 ES connector API
- 全量对账在数据量大时可能很慢，需要增量对账策略

---

## 工作流 WS8：图谱可分享链接（前端）

### Task 8.1: 公开图谱页面路由

**Files:**
- Create: `web/src/pages/dataset/knowledge-graph/share.tsx`（或复用现有组件）
- Modify: `web/src/routes.tsx`（添加公开路由）

**设计：**

```
URL: /graph/{kb_id}?token={share_token}
```

- `share_token` 是临时访问令牌，由管理员生成
- 无需登录即可查看图谱
- 只读模式（不能编辑/删除）

**后端 API：**

```python
# admin/server/routes.py
@admin_bp.route("/graph-share/<kb_id>/token", methods=["POST"])
@login_required
def create_graph_share_token(kb_id):
    """生成图谱分享令牌（24h 有效）"""
    token = generate_token()
    SystemSettingService.set_value(
        f"graph_share_{token}",
        json.dumps({"kb_id": kb_id, "expires": time.time() + 86400})
    )
    return {"token": token, "url": f"/graph/{kb_id}?token={token}"}

@admin_bp.route("/graph-share/verify", methods=["GET"])
def verify_graph_share_token():
    """验证分享令牌（公开接口）"""
    token = request.args.get("token")
    kb_id = request.args.get("kb_id")
    data = SystemSettingService.get_value(f"graph_share_{token}")
    if not data:
        return {"valid": False}
    info = json.loads(data)
    if info["kb_id"] != kb_id or info["expires"] < time.time():
        return {"valid": False}
    return {"valid": True, "kb_id": kb_id}
```

**前端：**

复用现有 `ForceGraph` 组件，封装为独立页面：
- 验证 share_token
- 获取图谱数据（通过现有 `/v1/kb/{id}/knowledge_graph` API + token 认证）
- 只读展示

**技术风险：**
- 现有图谱 API 需要 `@login_required`，分享模式需要绕过
- 可以用 share_token 查找 kb_id → 临时注入认证上下文

---

## 实现优先级和依赖关系

```
WS1 (模块骨架)
  ↓
WS2 (Job Control Plane)  ←→  WS3 (溯源账本)
  ↓                              ↓
WS4 (完整 Pipeline 串联)  ←──  WS6 (图谱增量+本体)
  ↓
WS5 (记忆承接层)  [独立，可并行]
WS7 (跨存储一致性)  [独立，可并行]
WS8 (图谱分享链接)  [独立，可并行]
```

**建议实施顺序：**

| 批次 | 工作流 | 负责人 | 预计工期 |
|------|--------|--------|----------|
| Batch 1 | WS1 模块骨架 | Codex | 2天 |
| Batch 2 | WS2 Job Control + WS3 溯源 | Codex | 5天 |
| Batch 3 | WS4 Pipeline 串联 + WS6 图谱 | Codex | 5天 |
| Batch 4a | WS5 记忆层 | Codex | 3天 |
| Batch 4b | WS8 图谱分享 | Gemini | 2天 |
| Batch 5 | WS7 一致性 | Codex | 2天 |
| Batch 6 | 集成测试 + 修复 | All | 3天 |

---

## 技术风险汇总

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| Blueprint 自动注册不支持自定义 prefix | KM 路由无法正常注册 | 改为手动注册，2 行代码 |
| `DocumentService.run()` 需要 `kb_table_num_map` | Job Runner 调用失败 | 阅读源码确认参数构造方式 |
| GraphRAG `run_graphrag_for_kb()` 阻塞式 | Job Runner 被阻塞 | 在线程池中执行 |
| ES chunk 无 offset 信息 | 溯源记录不完整 | 在解析阶段扩展 chunk 字段 |
| ES index mapping 需要预创建 | memory 向量检索失败 | 在 init_km_tables() 中创建 mapping |
| 多实例部署时 Job Runner 竞争 | 同一 Job 被多次推进 | Redis 分布式锁 |
| LLM 本体推荐质量不确定 | 抽取效果差 | 提供审核机制 + 冷启动模板 |
| URL 下载可能超时/失败 | Pipeline 卡在 downloading | httpx 超时 + retry |

---

## 对 RAGFlow 原文件的修改清单（最小化）

| 文件 | 修改内容 | 行数 |
|------|----------|------|
| `api/ragflow_server.py` | 导入 km_models + init_km_tables + start km runner | ~6 行 |
| `api/apps/__init__.py` | 注册 km_bp（如果自动发现不支持） | ~2 行 |

**总计：对 RAGFlow 原文件修改不超过 10 行。**

---

## 待验证技术问题（需要 Codex/Gemini 评审）

### 后端（Codex）

1. **Blueprint 注册**：`api/apps/__init__.py` 的 `register_page()` 逻辑如何处理自定义 `url_prefix`？km_app.py 的 Blueprint 前缀是 `/api/v1/km`，但自动注册可能用 `manager` 作为 Blueprint name 并覆盖 prefix。
2. **kb_table_num_map 参数**：`DocumentService.run()` 需要这个参数，如何正确构造？或者能否用 `queue_tasks()` 直接替代？
3. **GraphRAG 自动触发时序**：在 task_executor 完成 embedding 后、KmJobRunner 检测到 Document DONE 之前，是否有竞态条件？
4. **ES index 动态创建**：`km_memory_{tenant_id}` 索引如何处理向量字段 mapping？RAGFlow 的 `docStoreConn` 是否支持动态创建索引？
5. **Outbox 事件投递**：Webhook POST 失败后的 retry 策略（指数退避 + 最大次数 + 死信）如何实现？独立线程还是 Redis delayed message？
6. **thread_pool_exec 并发**：Job Runner 中多个 job 同时执行 GraphRAG（CPU密集）是否会耗尽线程池？需要限流？

### 前端（Gemini）

1. **图谱分享页面**：复用现有 `ForceGraph` 组件时，如何处理认证？创建一个独立的 public route 还是在现有路由上加 token 参数？
2. **前端路由架构**：当前 RAGFlow 前端路由是否支持无需登录的公开页面？
3. **图谱数据获取**：分享模式下如何绕过 `@login_required` 获取图谱数据？是新建一个公开 API 还是用 token 模拟认证？

---

## 工作流 WS9：Graph-Enhanced QA（谱模结合检索）

### Task 9.1: 查询意图分类 + 实体链接

**Files:**
- Create: `api/km/services/qa_service.py`

**设计：**

QA 七步流水线：意图分类 → 实体链接 → 图谱检索 → 混合文档检索 → 证据融合 → 引用生成 → 声明验证

```python
class QAService:
    """Graph-Enhanced QA — 谱模结合检索"""

    INTENT_PROMPT = """分析用户问题的查询意图，返回 JSON：
{
  "intent": "fact_lookup|multi_hop|comparison|timeline|aggregation",
  "entities": ["实体1", "实体2"],
  "keywords": ["关键词1"],
  "constraints": {"time": null, "scope": null}
}

问题：{query}"""

    @classmethod
    async def enhanced_search(cls, tenant_id, kb_ids, query, params={}):
        """
        完整的 Graph-Enhanced QA 流水线

        Returns:
            {
                "answer": "...",
                "citations": [...],
                "reasoning_subgraph": {...},
                "confidence": 0.87
            }
        """
        # Step 1: 意图分类
        llm = LLMBundle(tenant_id, LLMType.CHAT)
        intent = await cls._classify_intent(llm, query)

        # Step 2: 实体链接 — 将查询中的实体映射到图谱节点
        linked_entities = await cls._link_entities(
            tenant_id, kb_ids, intent["entities"]
        )

        # Step 3: 图谱检索 — k-hop 邻域 + 约束路径
        graph_context = await cls._graph_retrieval(
            tenant_id, kb_ids, linked_entities, intent
        )

        # Step 4: 混合文档检索 — vector + keyword + 图谱实体约束
        doc_chunks = await cls._hybrid_retrieval(
            tenant_id, kb_ids, query, linked_entities
        )

        # Step 5: 证据融合重排
        fused_evidence = await cls._fuse_and_rerank(
            graph_context, doc_chunks, query
        )

        # Step 6: 带引用生成
        answer, citations = await cls._generate_with_citations(
            llm, query, fused_evidence, intent
        )

        # Step 7: 声明验证
        verified_answer = await cls._verify_claims(
            llm, answer, fused_evidence
        )

        return {
            "answer": verified_answer,
            "citations": citations,
            "reasoning_subgraph": graph_context.get("subgraph"),
            "confidence": cls._compute_confidence(citations, graph_context),
        }
```

**实体链接实现：**

```python
@classmethod
async def _link_entities(cls, tenant_id, kb_ids, entity_mentions):
    """将查询中提到的实体名映射到图谱中的节点 ID"""
    linked = []
    for mention in entity_mentions:
        # 1. 精确匹配
        for kb_id in kb_ids:
            index_name = search.index_name(tenant_id)
            results = docStoreConn.search(
                selectFields=["entity_name", "description", "rank_flt"],
                condition={
                    "knowledge_graph_kwd": "entity",
                    "kb_id": kb_id,
                    "entity_kwd": mention
                },
                indexNames=index_name,
            )
            if results:
                linked.append({"mention": mention, "node": results[0], "method": "exact"})
                break

        # 2. 模糊匹配（embedding similarity）
        if not any(l["mention"] == mention for l in linked):
            embd = LLMBundle(tenant_id, LLMType.EMBEDDING)
            vec = await thread_pool_exec(embd.encode, [mention])
            results = docStoreConn.search(
                condition={"knowledge_graph_kwd": "entity", "kb_id": kb_ids[0]},
                matchExprs=[MatchExpr(vec[0], topn=3)],
                indexNames=search.index_name(tenant_id),
            )
            if results and results[0].get("similarity", 0) > 0.7:
                linked.append({"mention": mention, "node": results[0], "method": "fuzzy"})

    return linked
```

**技术要点：**
- 复用现有 `KGSearch` 的 entity/relation 检索能力（`rag/graphrag/search.py`）
- 在现有 `KGSearch.retrieval()` 基础上增强，不重写
- 声明验证器是新增的 LLM 步骤

---

### Task 9.2: knowledge_search API 端点

**Files:**
- Add to: `api/apps/sdk/km.py`

```python
@km_bp.route("/knowledge/search", methods=["POST"])
@token_required
async def knowledge_search(tenant_id):
    """
    混合检索（graph-enhanced 模式）

    请求：
    {
        "query": "A公司和B公司的合作关系",
        "kb_ids": ["kb-1", "kb-2"],
        "mode": "graph_enhanced",  // "vector" | "keyword" | "hybrid" | "graph_enhanced"
        "top_k": 10,
        "min_confidence": 0.5,
        "include_graph_context": true,
        "include_citations": true
    }
    """
    params = await request.json
    query = params["query"]
    kb_ids = params["kb_ids"]
    mode = params.get("mode", "graph_enhanced")

    if mode == "graph_enhanced":
        result = await QAService.enhanced_search(tenant_id, kb_ids, query, params)
    elif mode in ("vector", "keyword", "hybrid"):
        # 退化为普通检索（复用 RAGFlow 现有检索）
        result = await cls._basic_retrieval(tenant_id, kb_ids, query, mode, params)

    return get_result(data=result)
```

### Task 9.3: graph_query / graph_context_pack 端点

```python
@km_bp.route("/graph/query", methods=["POST"])
@token_required
async def graph_query(tenant_id):
    """
    结构化图谱查询

    支持的意图：
    - find_path: 两个实体之间的路径
    - neighbors: 实体的 k-hop 邻域
    - timeline: 实体的时间线事件
    - compare: 两个实体的比较
    """
    params = await request.json
    intent = params["intent"]  # find_path | neighbors | timeline | compare
    kb_id = params["kb_id"]

    if intent == "neighbors":
        entity = params["entity"]
        k = params.get("hops", 2)
        subgraph = await GraphKmService.get_neighbors(tenant_id, kb_id, entity, k)
    elif intent == "find_path":
        source = params["source"]
        target = params["target"]
        subgraph = await GraphKmService.find_path(tenant_id, kb_id, source, target)
    # ... other intents

    return get_result(data=subgraph)

@km_bp.route("/graph/context-pack", methods=["POST"])
@token_required
async def graph_context_pack(tenant_id):
    """
    返回子图 + 相关 chunks 供推理

    用途：Agent 拿到子图后自行推理，不经过 KM 的 QA 流水线
    """
    params = await request.json
    entities = params["entities"]
    kb_id = params["kb_id"]
    hops = params.get("hops", 2)

    subgraph = await GraphKmService.get_context_subgraph(
        tenant_id, kb_id, entities, hops
    )
    related_chunks = await GraphKmService.get_related_chunks(
        tenant_id, kb_id, entities
    )

    return get_result(data={
        "subgraph": subgraph,
        "chunks": related_chunks,
        "entity_count": len(subgraph.get("nodes", [])),
        "relation_count": len(subgraph.get("edges", [])),
    })
```

**技术风险：**
- 现有 `KGSearch` 是面向 Dialog 的，参数格式与 KM API 不完全匹配
- 多 KB 联邦检索需要合并多个图谱的结果，需要处理跨 KB 实体重名

---

## 工作流 WS10：跨知识库联邦检索

### Task 10.1: 多 KB 检索 + 合并 + 去重

**Files:**
- Create: `api/km/services/federation_service.py`

**设计：**

```python
class FederationService:
    """跨知识库联邦检索"""

    @classmethod
    async def federated_search(cls, tenant_id, kb_ids, query, top_k=10):
        """
        对多个知识库并行检索，合并去重

        1. 并行对每个 KB 执行向量检索
        2. 合并结果
        3. 基于 content_hash 去重
        4. 全局重排（保留 source_kb_id 溯源）
        """
        import asyncio

        # 并行检索
        tasks = [
            cls._search_single_kb(tenant_id, kb_id, query, top_k)
            for kb_id in kb_ids
        ]
        results_per_kb = await asyncio.gather(*tasks)

        # 合并
        all_results = []
        for kb_id, results in zip(kb_ids, results_per_kb):
            for r in results:
                r["source_kb_id"] = kb_id
                all_results.append(r)

        # 去重（基于 content hash 或高相似度）
        deduped = cls._dedup_by_similarity(all_results, threshold=0.95)

        # 全局重排（按 similarity 分数排序）
        deduped.sort(key=lambda x: x.get("similarity", 0), reverse=True)

        return deduped[:top_k]
```

**技术风险：**
- 并行检索可能对 ES 造成压力
- 跨 KB 去重需要统一的 embedding 模型（不同 KB 可能用不同 embedding）

---

## 工作流 WS11：实体消歧 + 冲突检测 + 版本化事实

### Task 11.1: 增强实体消歧

**现状：** RAGFlow 已有 `EntityResolution` 类（`rag/graphrag/entity_resolution.py`），使用 LLM + editdistance 合并重复实体。

**增强方案：**

```python
class EnhancedEntityResolution:
    """增强版实体消歧 — 在现有基础上添加冲突检测和版本化"""

    @classmethod
    async def resolve_with_conflict_detection(cls, tenant_id, kb_id, graph, new_entities):
        """
        1. 执行标准实体消歧（复用现有 EntityResolution）
        2. 检测事实冲突（新事实 vs 已有事实）
        3. 标记冲突，不自动覆盖
        """
        # 标准消歧
        from rag.graphrag.entity_resolution import EntityResolution
        llm = LLMBundle(tenant_id, LLMType.CHAT)
        resolver = EntityResolution(llm)
        resolved = await thread_pool_exec(resolver, graph, new_entities)

        # 冲突检测
        conflicts = []
        for node in new_entities:
            existing = graph.nodes.get(node)
            if existing:
                # 比较描述是否矛盾
                is_conflict = await cls._check_contradiction(
                    llm, existing.get("description", ""), node.get("description", "")
                )
                if is_conflict:
                    conflicts.append({
                        "entity": node,
                        "existing_description": existing.get("description"),
                        "new_description": node.get("description"),
                        "resolution": "pending_review"
                    })

        return resolved, conflicts
```

### Task 11.2: 版本化知识事实

**新增模型：**

```python
class KmFact(DataBaseModel):
    """版本化知识事实"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, index=True)
    kb_id = CharField(max_length=32, index=True)

    subject = CharField(max_length=256, index=True)
    predicate = CharField(max_length=128, index=True)
    object = CharField(max_length=256, index=True)

    confidence = FloatField(default=0.8)
    valid_from = DateTimeField(null=True)
    valid_to = DateTimeField(null=True)

    source_doc_id = CharField(max_length=32, null=True)
    observed_at = DateTimeField()
    version = IntegerField(default=1)

    # 状态：active | superseded | conflicted | retracted
    status = CharField(max_length=32, default="active")

    class Meta:
        table_name = "km_fact"
        indexes = (
            (("tenant_id", "kb_id", "subject", "predicate", "object"), False),
        )
```

**版本递增逻辑：**

```python
@classmethod
def upsert_fact(cls, tenant_id, kb_id, subject, predicate, obj, source_doc_id, confidence):
    """
    如果事实已存在且内容不同 → 版本递增，旧版 status='superseded'
    如果事实已存在且内容相同 → 更新 confidence（取最大值）
    如果不存在 → 新建
    """
    existing = KmFact.select().where(
        KmFact.tenant_id == tenant_id,
        KmFact.kb_id == kb_id,
        KmFact.subject == subject,
        KmFact.predicate == predicate,
        KmFact.status == "active"
    ).first()

    if existing:
        if existing.object == obj:
            # 同一事实，更新置信度
            existing.confidence = max(existing.confidence, confidence)
            existing.save()
            return existing
        else:
            # 竞争性声明 — 版本递增
            existing.status = "superseded"
            existing.save()
            return KmFact.insert(
                id=get_uuid(), tenant_id=tenant_id, kb_id=kb_id,
                subject=subject, predicate=predicate, object=obj,
                confidence=confidence, source_doc_id=source_doc_id,
                observed_at=datetime.now(),
                version=existing.version + 1
            )
    else:
        return KmFact.insert(
            id=get_uuid(), tenant_id=tenant_id, kb_id=kb_id,
            subject=subject, predicate=predicate, object=obj,
            confidence=confidence, source_doc_id=source_doc_id,
            observed_at=datetime.now(), version=1
        )
```

---

## 工作流 WS12：知识质量 + 新鲜度 + 反馈

### Task 12.1: Trust Scoring（信任度评分）

**Files:**
- Create: `api/km/services/quality_service.py`

```python
class QualityService:
    """知识质量评估"""

    @classmethod
    def compute_trust_score(cls, artifact_type, artifact_id, tenant_id):
        """
        信任度 = f(来源可信度, 多源交叉验证, 时效性, 使用反馈)

        Factors:
        - source_reliability: 来源文档的可信度 (0-1)
        - cross_validation: 多个独立来源是否验证 (0-1)
        - freshness: 时间衰减 (1.0 → 0.5 over 180 days)
        - feedback_score: 用户/Agent 正向反馈比例 (0-1)
        """
        provenances = KmProvenance.select().where(
            KmProvenance.tenant_id == tenant_id,
            KmProvenance.artifact_type == artifact_type,
            KmProvenance.artifact_id == artifact_id
        )

        # 多源验证
        unique_sources = set(p.source_doc_id for p in provenances)
        cross_validation = min(len(unique_sources) / 3, 1.0)

        # 时间衰减
        most_recent = max(p.create_date for p in provenances) if provenances else datetime.now()
        days_old = (datetime.now() - most_recent).days
        freshness = max(0.5, 1.0 - (days_old / 365))

        # 平均置信度
        avg_confidence = sum(p.confidence for p in provenances) / len(provenances) if provenances else 0.5

        trust = 0.3 * avg_confidence + 0.3 * cross_validation + 0.2 * freshness + 0.2 * 0.5  # feedback placeholder

        return {"trust_score": round(trust, 3), "factors": {
            "source_confidence": round(avg_confidence, 3),
            "cross_validation": round(cross_validation, 3),
            "freshness": round(freshness, 3),
        }}
```

### Task 12.2: Feedback Correction API

```python
@km_bp.route("/feedback", methods=["POST"])
@token_required
async def submit_feedback(tenant_id):
    """
    反馈回流 API

    请求：
    {
        "artifact_type": "entity",
        "artifact_id": "entity-name",
        "feedback_type": "positive|negative|correction",
        "correction_value": "纠正后的值",
        "trace_id": "trace-uuid"
    }
    """
    params = await request.json

    # 记录反馈
    KmFeedback.insert(
        id=get_uuid(),
        tenant_id=tenant_id,
        artifact_type=params["artifact_type"],
        artifact_id=params["artifact_id"],
        feedback_type=params["feedback_type"],
        correction_value=params.get("correction_value"),
        principal_id=params.get("principal_id"),
        trace_id=params.get("trace_id"),
    )

    # 如果是纠正 → 更新实体/关系
    if params["feedback_type"] == "correction":
        await QualityService.apply_correction(tenant_id, params)

    return get_result(data={"status": "recorded"})
```

**新增模型：**

```python
class KmFeedback(DataBaseModel):
    """反馈记录"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, index=True)
    artifact_type = CharField(max_length=32, index=True)
    artifact_id = CharField(max_length=64, index=True)
    feedback_type = CharField(max_length=32)  # positive | negative | correction
    correction_value = TextField(null=True)
    principal_id = CharField(max_length=64, null=True)
    trace_id = CharField(max_length=64, null=True)

    class Meta:
        table_name = "km_feedback"
```

### Task 12.3: 知识新鲜度 / 过期机制

```python
class FreshnessService:
    """知识新鲜度管理"""

    @classmethod
    async def sweep_expired(cls, tenant_id):
        """定期扫描过期记忆，标记归档"""
        now = datetime.now()
        expired = KmMemory.select().where(
            KmMemory.tenant_id == tenant_id,
            KmMemory.expires_at.is_null(False),
            KmMemory.expires_at < now,
            KmMemory.is_archived == False,
            KmMemory.is_deleted == False
        )
        for m in expired:
            m.is_archived = True
            m.save()
        return len(list(expired))

    @classmethod
    def compute_freshness(cls, artifact_create_date, half_life_days=180):
        """指数衰减新鲜度"""
        days_old = (datetime.now() - artifact_create_date).days
        import math
        return math.exp(-0.693 * days_old / half_life_days)  # half-life decay
```

---

## 工作流 WS13：容量 + 成本治理

### Task 13.1: 租户配额模型

**新增模型：**

```python
class KmQuota(DataBaseModel):
    """租户/Agent 配额"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, index=True)

    # 存储配额
    max_documents = IntegerField(default=10000)
    max_storage_bytes = BigIntegerField(default=10 * 1024**3)  # 10GB
    max_memories = IntegerField(default=100000)

    # 速率限制
    max_ingest_per_hour = IntegerField(default=100)
    max_query_per_minute = IntegerField(default=60)
    max_concurrent_jobs = IntegerField(default=5)

    # 当前用量
    current_documents = IntegerField(default=0)
    current_storage_bytes = BigIntegerField(default=0)
    current_memories = IntegerField(default=0)

    class Meta:
        table_name = "km_quota"
```

### Task 13.2: 限流中间件

```python
class RateLimiter:
    """基于 Redis 的滑动窗口限流"""

    @staticmethod
    async def check(tenant_id, action, limit, window_seconds):
        """
        Redis ZSET 滑动窗口

        Returns: (allowed: bool, remaining: int, retry_after: int)
        """
        key = f"km_rate:{tenant_id}:{action}"
        now = time.time()
        window_start = now - window_seconds

        pipe = REDIS_CONN.pipeline()
        pipe.zremrangebyscore(key, 0, window_start)  # 清理过期
        pipe.zcard(key)  # 当前窗口内请求数
        pipe.zadd(key, {str(now): now})  # 记录本次
        pipe.expire(key, window_seconds)
        _, count, _, _ = pipe.execute()

        if count > limit:
            return False, 0, int(window_seconds - (now - window_start))
        return True, limit - count, 0
```

**集成到 KM Blueprint：**

```python
@km_bp.before_request
async def check_rate_limit():
    """全局限流检查"""
    tenant_id = request.headers.get("X-Tenant-ID")
    if not tenant_id:
        return

    allowed, remaining, retry_after = await RateLimiter.check(
        tenant_id, "api", 60, 60  # 60 requests per minute
    )
    if not allowed:
        return get_error_data_result(
            "Rate limit exceeded",
            code=429,
            headers={"Retry-After": str(retry_after)}
        )
```

---

## 工作流 WS14：Agent 安全原语

### Task 14.1: Service Principal + 审计链

**新增模型：**

```python
class KmAuditLog(DataBaseModel):
    """审计日志 — 所有 KM API 调用记录"""
    id = CharField(max_length=32, primary_key=True)
    tenant_id = CharField(max_length=32, index=True)

    # 调用方身份
    principal_type = CharField(max_length=32)  # human_user | service_agent | delegated_agent
    principal_id = CharField(max_length=64, index=True)
    delegator_id = CharField(max_length=64, null=True, index=True)

    # 操作
    action = CharField(max_length=128, index=True)  # ingest.submit | memory.upsert | knowledge.search
    resource_type = CharField(max_length=64, null=True)
    resource_id = CharField(max_length=64, null=True)

    # 追踪
    trace_id = CharField(max_length=64, null=True, index=True)
    ip_address = CharField(max_length=64, null=True)
    user_agent = CharField(max_length=256, null=True)

    # 结果
    status_code = IntegerField(default=200)
    error_msg = TextField(null=True)
    latency_ms = IntegerField(default=0)

    class Meta:
        table_name = "km_audit_log"
```

### Task 14.2: 审计中间件

```python
@km_bp.after_request
async def audit_log(response):
    """自动记录所有 KM API 调用"""
    KmAuditLog.insert(
        id=get_uuid(),
        tenant_id=request.tenant_id,
        principal_type=request.principal_type or "service_agent",
        principal_id=request.principal_id or "unknown",
        delegator_id=request.headers.get("X-Delegator-ID"),
        action=f"{request.method} {request.path}",
        trace_id=request.headers.get("X-Trace-ID"),
        ip_address=request.remote_addr,
        user_agent=request.headers.get("User-Agent"),
        status_code=response.status_code,
        latency_ms=int((time.time() - request.start_time) * 1000),
    )
    return response
```

---

## 工作流 WS15：知识治理（PII/DLP）

### Task 15.1: DLP 钩子

```python
class DLPService:
    """入库前数据泄露防护"""

    # 敏感信息正则模式
    PATTERNS = {
        "phone_cn": r"1[3-9]\d{9}",
        "id_card_cn": r"\d{17}[\dXx]",
        "email": r"[\w.-]+@[\w.-]+\.\w+",
        "bank_card": r"\d{16,19}",
        "ip_address": r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}",
    }

    @classmethod
    def scan(cls, content, policy="warn"):
        """
        扫描内容中的敏感信息

        policy:
          "warn" — 标记但不阻止
          "mask" — 自动脱敏（替换为 ***）
          "block" — 拒绝入库
        """
        findings = []
        for name, pattern in cls.PATTERNS.items():
            matches = re.findall(pattern, content)
            if matches:
                findings.append({"type": name, "count": len(matches)})

        if policy == "mask" and findings:
            masked = content
            for name, pattern in cls.PATTERNS.items():
                masked = re.sub(pattern, "***", masked)
            return masked, findings

        if policy == "block" and findings:
            raise ValueError(f"DLP blocked: found {findings}")

        return content, findings

    @classmethod
    async def scan_before_ingest(cls, tenant_id, content):
        """Pipeline hook — 在 chunk 入库前扫描"""
        # 获取租户 DLP 策略
        policy = SystemSettingService.get_value(f"km_dlp_policy_{tenant_id}") or "warn"
        return cls.scan(content, policy)
```

---

## 工作流 WS16：可观测性

### Task 16.1: Metrics 采集

```python
class MetricsService:
    """KM 指标采集"""

    @classmethod
    def record_api_call(cls, tenant_id, endpoint, latency_ms, status_code):
        """记录 API 调用指标（写入 Redis，定期聚合）"""
        key = f"km_metrics:{tenant_id}:{endpoint}"
        now = int(time.time())
        minute_bucket = now - (now % 60)

        pipe = REDIS_CONN.pipeline()
        pipe.hincrby(f"{key}:{minute_bucket}", "count", 1)
        pipe.hincrby(f"{key}:{minute_bucket}", "total_latency", latency_ms)
        if status_code >= 400:
            pipe.hincrby(f"{key}:{minute_bucket}", "errors", 1)
        pipe.expire(f"{key}:{minute_bucket}", 86400)  # 保留 24h
        pipe.execute()

    @classmethod
    def get_dashboard_metrics(cls, tenant_id, hours=24):
        """获取仪表板指标"""
        now = int(time.time())
        metrics = {
            "total_ingest_jobs": KmIngestJob.select().where(
                KmIngestJob.tenant_id == tenant_id
            ).count(),
            "active_jobs": KmIngestJob.select().where(
                KmIngestJob.tenant_id == tenant_id,
                KmIngestJob.state.not_in(["completed", "failed", "cancelled"])
            ).count(),
            "total_memories": KmMemory.select().where(
                KmMemory.tenant_id == tenant_id,
                KmMemory.is_deleted == False
            ).count(),
            "total_provenance_records": KmProvenance.select().where(
                KmProvenance.tenant_id == tenant_id
            ).count(),
        }
        return metrics
```

### Task 16.2: Health Check 端点

```python
@km_bp.route("/health", methods=["GET"])
async def km_health():
    """KM 健康检查（公开端点）"""
    checks = {}

    # MySQL
    try:
        KmIngestJob.select().limit(1).execute()
        checks["mysql"] = "ok"
    except Exception as e:
        checks["mysql"] = f"error: {e}"

    # Redis
    try:
        REDIS_CONN.ping()
        checks["redis"] = "ok"
    except:
        checks["redis"] = "error"

    # ES
    try:
        docStoreConn.health()
        checks["elasticsearch"] = "ok"
    except:
        checks["elasticsearch"] = "error"

    all_ok = all(v == "ok" for v in checks.values())
    return get_result(data={
        "status": "healthy" if all_ok else "degraded",
        "checks": checks,
        "version": "1.0.0",
    })
```

---

## 工作流 WS17：前端管控台

### Task 17.1: Dashboard 页面

**Files:**
- Create: `web/src/pages/admin/dashboard.tsx`

**设计：**

显示 KM 核心指标：
- Pipeline 任务概览（进行中/完成/失败）
- Agent 调用量趋势图
- 知识资产统计（文档数/实体数/关系数/记忆数）
- 最近活动日志

### Task 17.2: Pipeline 监控页面

**Files:**
- Create: `web/src/pages/admin/pipeline-monitor.tsx`

**设计：**

- 任务列表（可筛选状态）
- 任务详情面板（状态机可视化、进度条、日志）
- 重试/取消操作按钮
- 人工审核队列（低置信度实体）

### Task 17.3: 记忆管理页面

**Files:**
- Create: `web/src/pages/admin/memories.tsx`

**设计：**

- 记忆列表（按 scope/type/owner 筛选）
- 语义搜索
- 记忆详情（内容、溯源、访问统计）
- 批量归档/删除

### Task 17.4: 可观测性仪表板

**Files:**
- Create: `web/src/pages/admin/observability.tsx`

**设计：**

- API 调用量/延迟/错误率图表
- 知识健康评分
- 存储用量 vs 配额
- Agent 调用 Top N

---

## 完整数据模型汇总

| 表名 | 工作流 | 用途 |
|------|--------|------|
| `km_ingest_job` | WS2 | Pipeline 任务主表 |
| `km_ingest_event` | WS2 | 事件 outbox |
| `km_provenance` | WS3 | 溯源记录 |
| `km_memory` | WS5 | 记忆条目 |
| `km_ontology` | WS6 | 本体定义 |
| `km_webhook` | WS2 | Webhook 订阅 |
| `km_fact` | WS11 | 版本化事实 |
| `km_feedback` | WS12 | 反馈记录 |
| `km_quota` | WS13 | 租户配额 |
| `km_audit_log` | WS14 | 审计日志 |

**ES 索引：**
- `km_memory_{tenant_id}` — 记忆向量索引

---

## 全量实施依赖图

```
WS1 (骨架)
  ↓
├── WS2 (Job Control) ── WS3 (溯源)
│     ↓
│     WS4 (Pipeline) ── WS6 (图谱+本体)
│     ↓
│     WS7 (一致性)
│
├── WS5 (记忆) [可并行]
│
├── WS9 (Graph-Enhanced QA) ── 依赖 WS6
│     ↓
│     WS10 (联邦检索)
│
├── WS11 (消歧+冲突+版本) ── 依赖 WS6
│
├── WS12 (质量+新鲜度+反馈) ── 依赖 WS3
│
├── WS13 (配额限流) [独立]
├── WS14 (安全审计) [独立]
├── WS15 (DLP) [独立]
├── WS16 (可观测性) [独立]
│
├── WS8 (图谱分享) ── Gemini
└── WS17 (前端管控台) ── Gemini
      ↓ 依赖所有后端 API
```

## 实施批次建议

| 批次 | 工作流 | 负责人 | 说明 |
|------|--------|--------|------|
| B1 | WS1 骨架 | Codex | 模型+目录+Blueprint |
| B2 | WS2+WS3 | Codex | Job Control + 溯源 |
| B3 | WS4+WS6 | Codex | Pipeline 串联 + 图谱 |
| B4 | WS5+WS13+WS14 | Codex | 记忆 + 配额 + 审计 |
| B5 | WS9+WS10 | Codex | QA + 联邦检索 |
| B6 | WS11+WS12+WS15 | Codex | 消歧 + 质量 + DLP |
| B7 | WS7+WS16 | Codex | 一致性 + 可观测性 |
| F1 | WS8 | Gemini | 图谱分享 |
| F2 | WS17 | Gemini | 前端管控台 |
| INT | 集成测试 | All | 端到端测试 |

---

## 全量技术风险汇总

| # | 风险 | 影响 | 缓解 |
|---|------|------|------|
| 1 | Blueprint 自动注册不支持自定义 prefix | 路由失败 | 手动注册 |
| 2 | DocumentService.run() 参数构造 | Job Runner 失败 | 读源码验证 |
| 3 | GraphRAG 阻塞式 | Runner 被阻塞 | thread_pool_exec |
| 4 | ES chunk 无 offset | 溯源不完整 | 扩展 parser |
| 5 | ES index mapping | memory 检索失败 | 预创建 mapping |
| 6 | 多实例竞争 | 重复处理 | Redis 分布式锁 |
| 7 | LLM 本体推荐质量 | 抽取效果差 | 审核 + 模板 |
| 8 | URL 下载超时 | 卡 downloading | httpx + retry |
| 9 | KGSearch 接口不匹配 | QA 接入困难 | 包装适配层 |
| 10 | 多 KB 不同 embedding | 联邦检索不一致 | 统一 embedding 或分别检索 |
| 11 | DLP 正则漏报/误报 | 敏感信息泄露 | LLM 辅助 + 人工审核 |
| 12 | 审计日志量大 | MySQL 压力 | 定期归档 + 分区表 |
| 13 | 声明验证增加延迟 | QA 响应慢 | 可选开关 |
| 14 | Webhook 推送失败堆积 | 事件积压 | 死信队列 + 报警 |

---

## 待 Codex/Gemini 验证的完整问题清单

### Codex（后端）

1. Blueprint 注册方式：自动发现 vs 手动注册？
2. `kb_table_num_map` 参数如何构造？
3. GraphRAG 自动触发的竞态条件？
4. ES index 动态创建和 mapping？
5. Webhook retry 策略实现？
6. thread_pool_exec 并发限流？
7. `docStoreConn.search()` 的完整参数签名和返回格式？
8. Redis Streams 在 KM 场景下是否需要独立的 consumer group？
9. Peewee `on_conflict(action="IGNORE")` 在 MySQL 8.0 下是否生效？
10. `KGSearch` 类如何复用？需要继承还是组合？
11. 声明验证器的 prompt 设计和 LLM 调用成本？
12. 审计日志在高并发下的 MySQL 写入压力？

### Gemini（前端）

1. 图谱分享页面的路由和认证方案？
2. 前端路由是否支持无登录的公开页面？
3. Dashboard 页面的图表库选型（echarts/recharts/antv）？
4. Pipeline 监控页面的实时更新方案（轮询 vs SSE）？
5. 记忆管理页面的语义搜索交互设计？
6. 可观测性仪表板的数据刷新策略？
7. Admin 路由扩展（新增 4 个页面）对现有布局的影响？
