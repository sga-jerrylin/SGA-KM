# KM (Knowledge Memory) 设计文档

> 日期：2026-02-28
> 状态：已批准
> 参与者：Claude（架构）、Codex（后端发散）、Gemini（前端/产品发散）

---

## 1. 产品定位

**KM = Knowledge Memory**，企业级知识中心 + 记忆处理中心。

基于 RAGFlow v0.24.0，不是一个给人用的前端应用，而是 **AI 生态的基础设施组件**。

### 核心原则：Agent-First

| 优先级 | 接口 | 用户 |
|--------|------|------|
| 第一 | MCP Tools | AI Agent（OpenClaw 等） |
| 第二 | REST/gRPC API | 外部系统集成 |
| 第三 | Admin UI | 人类管理员（配置、监控、审核） |

### 人的使用场景（极少）
- 初始批量上传资料
- 系统配置和设置
- 偶尔的知识图谱可视化查看

### Agent 的使用场景（核心）
典型流程：人跟 Claw 聊天 → 提到论文 → Claw 下载论文 → 调 KM API 上传 → KM 自动 pipeline（解析→切片→向量化→实体提取→图谱合并）→ Claw 随时 query。

---

## 2. 架构总览

```
Agent (OpenClaw / 其他 AI Agent)
   |
MCP/API Gateway (认证/授权/Schema校验/幂等性)
   |
Job Orchestrator + Event Bus
   |
Ingestion DAG (parse → chunk → embed → extract KG → resolve → upsert → publish)
   |
Memory Store (MySQL) + Vector Store (ES/Infinity) + Graph Store
   |
Query Orchestrator (混合检索 + 图谱检索 + 重排 + 验证器)
   |
Status/Event API + Audit + Policy + Observability
   |
Admin Dashboard (轻量管控台)
```

---

## 3. MCP Server 设计

KM 作为 MCP Server 暴露以下工具，按工作流分组：

### 3.1 接收组（Ingestion）
| Tool | 说明 |
|------|------|
| `ingest_submit` | 单文件/URL，触发全自动 pipeline |
| `ingest_batch_submit` | 批量接收（manifest 模式） |
| `ingest_status` | 查询 job/item 状态 |
| `ingest_events_subscribe` | webhook/SSE 推送注册 |

### 3.2 记忆组（Memory）
| Tool | 说明 |
|------|------|
| `memory_upsert` | 写入/更新记忆（含 scope、TTL、重要度） |
| `memory_query` | 按语义检索记忆 |
| `memory_delete` | 软删除 + 保留策略 |
| `memory_feedback` | 记忆质量反馈（强化/衰退） |

### 3.3 检索组（Retrieval）
| Tool | 说明 |
|------|------|
| `knowledge_search` | 混合检索（hybrid/vector/keyword/graph-enhanced） |
| `knowledge_get_by_id` | 按 ID 获取文档/片段 |
| `evidence_trace` | 返回引用/溯源链 |

### 3.4 图谱组（Graph）
| Tool | 说明 |
|------|------|
| `graph_query` | 结构化图谱查询（按意图：find_path/neighbors/timeline/compare） |
| `graph_context_pack` | 返回子图 + 相关 chunks 供推理 |
| `artifact_get` | 获取解析产物（文本/chunks/实体/关系） |

### 3.5 治理组（Governance）
| Tool | 说明 |
|------|------|
| `policy_capabilities` | Agent 查询自身权限范围 |

### 统一响应信封

```json
{
  "status": "ok|pending|error",
  "data": {},
  "meta": {
    "trace_id": "uuid",
    "latency_ms": 23,
    "confidence": 0.87,
    "sources": []
  },
  "control": {
    "retry_after_ms": 3000,
    "next_tool_hint": "ingest_status",
    "idempotency_replay": false
  }
}
```

---

## 4. 记忆分层架构

### 4 层记忆模型

| 层级 | 名称 | 存储 | 生命周期 |
|------|------|------|----------|
| L0 | Session（会话记忆） | Redis + TTL | 分钟～小时 |
| L1 | Personal（个人记忆） | MySQL + Vector | 用户控制，可设 TTL |
| L2 | Team（团队记忆） | MySQL + Vector | 项目/团队生命周期 |
| L3 | Org（组织记忆） | MySQL + Vector + Graph | 长期，受治理策略管控 |

### 数据隔离

- 必填 `tenant_id`，贯穿所有表和索引
- 核心分区键：`tenant_id + scope + owner_id + space_id`
- 向量索引按 `tenant_id + scope` 隔离
- 图谱按 tenant 子图 + edge 可见性标签隔离

### 权限模型

- **RBAC**：粗粒度角色（viewer/editor/admin）
- **ABAC**：属性（部门、密级、地域）
- **ReBAC**：关系链（user → team → space → memory）
- 策略执行点：API Gateway + 检索层双重过滤

### Agent 身份认证

| 类型 | 认证方式 | 场景 |
|------|----------|------|
| `human_user` | 用户名密码/OAuth | 管理员登录 |
| `service_agent` | OAuth2 Client Credentials / JWT | Agent 直接调用 |
| `delegated_agent` | Token Exchange（代理用户） | Claw 代用户操作 |

审计字段：`principal_id` + `delegator_id` + `tool_name` + `trace_id`

---

## 5. 全自动 Pipeline

Agent 调用 `ingest_submit` 后，全流程自动执行：

### Pipeline 状态机

```
queued → downloading → parsing → chunking → embedding
  → extracting_kg → resolving_entities → upserting_graph
  → publishing_index → completed
                     → failed
                     → partial_completed
```

### 每个状态响应

```json
{
  "job_id": "uuid",
  "item_id": "uuid",
  "state": "extracting_kg",
  "progress_percent": 65,
  "retryable": true,
  "error_code": null,
  "created_at": "...",
  "updated_at": "...",
  "eta_seconds": 30
}
```

### 设计原则
- 每个阶段幂等且可重试
- 去重键：`tenant_id + content_hash + scope`
- 持续失败进入死信队列
- 低置信度实体/关系合并进入人工审核队列
- 支持 webhook 推送和轮询两种反馈模式

---

## 6. 谱模结合：Graph-Enhanced QA

### 双检索 + 证据融合 + 声明验证

1. **查询意图分类**：事实查询 / 多跳推理 / 比较 / 时间线
2. **实体链接**：将查询映射到图谱节点 ID
3. **图谱检索**：k-hop 邻域 + 约束路径搜索
4. **混合文档检索**：围绕图谱实体做 vector + keyword 检索
5. **证据融合重排**：语义分数 + 图谱中心性/路径相关性
6. **带引用生成**：严格引用约束的答案生成
7. **声明验证器**：剔除无证据支撑的陈述

### 输出
```json
{
  "answer": "...",
  "citations": [...],
  "reasoning_subgraph": {...},
  "confidence": 0.87
}
```

---

## 7. 知识图谱智能化：从人工到自进化

**现状问题**：当前图谱实体类型需要人工定义，非专业用户难以设计好的本体。

### 目标：LLM 驱动的自适应本体 + 自进化图谱

#### 7.1 自动本体发现

由 LLM 分析文档语料，自动推荐实体类型和关系类型：

```
文档语料 → LLM 分析 → 推荐本体 Schema
  → 管理员审核/一键采纳 → 应用到后续抽取
```

- 冷启动时，LLM 根据文档类型（论文/合同/报告/技术文档）推荐预设本体模板
- 随着语料增长，自动发现新实体类型和关系类型
- 管理员可审核也可全自动（配置策略）

#### 7.2 智能实体抽取

- 不再使用固定规则，而是 LLM + few-shot 动态抽取
- 根据文档类型自动选择抽取策略
- 支持多轮抽取：粗抽取 → 精抽取 → 交叉验证

#### 7.3 图谱自进化机制

| 机制 | 说明 |
|------|------|
| 增量学习 | 新文档自动发现新实体类型，提议本体扩展 |
| 冲突检测 | 新事实与已有事实矛盾时，标记并保留双方（带置信度） |
| 实体消歧 | 自动识别"同一实体的不同表述"并合并 |
| 关系推理 | 从已有事实推断隐含关系（A→B, B→C ⇒ A→C） |
| 质量衰退 | 长期无引用的事实自动降低置信度 |
| 人工校正反馈 | 管理员修正被纳入训练信号，持续优化抽取质量 |

#### 7.4 版本化知识事实

```json
{
  "fact_id": "uuid",
  "subject": "Entity A",
  "predicate": "acquired",
  "object": "Entity B",
  "confidence": 0.92,
  "valid_from": "2026-01-15",
  "valid_to": null,
  "source_id": "doc:paper-2026-001#p12",
  "observed_at": "2026-02-28",
  "version": 3
}
```

- 事实不被覆盖，而是版本递增
- 竞争性声明可共存（带置信度和来源）
- 支持时间线查询（"2025年Q3时，A和B是什么关系？"）

---

## 8. 缺失模块清单

基于现有 RAGFlow 能力，需要新增：

| 模块 | 优先级 | 说明 |
|------|--------|------|
| MCP Gateway | P0 | Agent 认证 + 工具路由 + 幂等性 |
| Job Orchestrator | P0 | 异步 pipeline 编排 + 事件总线 |
| Memory Service | P0 | 4 层记忆 CRUD + 向量检索 |
| Agent Auth | P0 | service_agent / delegated_agent 认证 |
| Graph-Enhanced QA | P1 | 双检索 + 证据融合 + 声明验证 |
| 自适应本体引擎 | P1 | LLM 自动设计/进化实体和关系类型 |
| 记忆生命周期 | P1 | 衰退/强化/归档/删除策略 |
| 知识治理 | P2 | PII/DLP、保留策略、RTBF |
| 信任度评分 | P2 | 事实/记忆质量评估 |
| 评估平台 | P2 | 检索质量、幻觉率、图谱覆盖率 |
| 可观测性 | P2 | 延迟、成功率、SLO 仪表板 |
| 租户配额 | P3 | Token/存储/查询预算 |
| Developer Portal | P3 | API 文档、SDK、MCP 接入指南 |
| 本体管理 + 迁移 | P3 | Schema 版本管理和迁移工具 |

---

## 9. 前端设计方向

### 品牌调性
- 定位：AI 基础设施 / 企业神经中枢
- 支持自定义 Logo + 欢迎词 + 登录页标语
- 默认暗黑主题，科技感

### 管控台核心页面

| 页面 | 功能 |
|------|------|
| Dashboard | Pipeline 状态、Agent 调用量、知识资产概览 |
| Agent Gateway | MCP 活动监控、调用日志、Agent 密钥管理 |
| 知识地图 | 增强版图谱可视化（缩放体验） |
| 记忆空间 | 私人/团队/组织记忆浏览和管理 |
| Pipeline 监控 | 任务队列状态、失败重试、人工审核队列 |
| 品牌设置 | Logo 上传、欢迎词编辑 |
| 系统设置 | 模型配置、权限、租户管理 |

### 特色交互
- 双屏推理路径（聊天 + 图谱节点依次点亮）
- 文档"消化"动画（上传时实时展示实体提取过程）
- Agent 活动雷达（实时显示 MCP 调用）

---

## 10. API 策略

| 协议 | 用途 |
|------|------|
| MCP | Agent 工具调用（第一接口） |
| REST | 外部系统集成、webhook |
| gRPC | 内部服务间高吞吐通信 |
| GraphQL | Admin UI 聚合查询（可选） |

设计约定：
- 变更操作必须幂等
- 重操作默认异步
- 稳定枚举 + 机器可读错误码
- 向后兼容版本策略（`/v1`，只加不删）
- 响应必带 trace_id + sources

---

## 11. 实施路线图

### 前置任务（已完成）
- [x] 剥离厦门国贸定制代码（新闻/档案同步）
- [x] Logo/品牌定制功能（产品名、欢迎语、标语、双 Logo 上传）

### 架构决策
- MCP Gateway 不做：所有 API 通过外部 mcphub 统一中转
- 记忆分层由调用方决定：KM 只负责存储承接
- 智能切片需 eval 验证后再上（YAGNI，Codex 建议）
- 记忆生命周期保持最小化（TTL/归档），复杂策略由调用方实现

### Phase 1：引擎基座（4-6 周）
**后端**
- 全自动 Ingest Pipeline（`ingest_submit` → 解析 → 切片 → 向量化 → 实体抽取 → 图谱合并）
- Agent Job Control Plane：`ingest_cancel` / `ingest_retry` / 状态机 + 幂等键 + webhook/SSE 推送
- 溯源账本（Provenance Ledger）：每个 chunk/实体/边记录来源文档ID+偏移量、抽取器版本、pipeline 版本
- 跨存储一致性：MySQL 为 source of truth，ES/向量/图谱作为派生索引，outbox pattern + reconciler
- 记忆承接层（`memory_upsert` / `memory_query` API，最小 TTL/归档）

**图谱**
- LLM 驱动的实体/关系自动抽取（替代手工定义，集成到 pipeline）
- 增量图谱更新（新文档增量 merge，非全量重建）
- 自动本体推荐（冷启动模板）

**前端**
- 图谱可分享链接 / 独立页面（URL 直接打开图谱可视化）

### Phase 2：谱模结合 + 智能检索（4-6 周）
**后端**
- Graph-Enhanced QA 7 步流水线（意图分类 → 实体链接 → 图谱检索 → 混合文档检索 → 证据融合 → 引用生成 → 声明验证）
- `knowledge_search`（graph-enhanced 模式）
- `graph_query` / `graph_context_pack`
- 引用溯源 + confidence 评分
- 跨知识库联邦检索（多库检索 + 合并 + 去重）

**前端**
- 双屏推理路径可视化
- 知识地图（Google Earth 式缩放）

**图谱**
- 实体消歧 + 冲突检测
- 版本化知识事实
- 增量本体进化

### Phase 3：知识质量 + 治理（4-6 周）
**后端**
- 知识质量 + 冲突检测（trust scoring，多源矛盾标记）
- 知识新鲜度 / 过期机制（TTL、版本标记、freshness score）
- 反馈回流 Correction API（retrieval → use → feedback → improve 闭环）
- 知识治理（PII/DLP、保留策略、入库前 DLP 钩子）
- 容量 + 成本治理（租户/Agent 配额、限流、并发控制、优先队列、背压机制）
- Agent 安全原语（service principal、代理委托、最小权限 scope、审计链 `principal_id/delegator_id/trace_id`）

**前端**
- 知识可观测性仪表板（知识健康、使用热度、盲区检测、死知识标记）
- 记忆时间线

**图谱**
- 知识孤岛 / 碰撞检测
- 关系推理（隐含关系发现）
- 人工校正反馈循环

### Phase 4：生态对接 + 打磨（4-6 周）
**后端**
- Developer Portal（API 文档、SDK、接入指南）
- 可观测性 + SLO
- 评估平台

**前端**
- 主题系统
- 人机协作工作台（低置信度审核）

**图谱**
- 本体管理 + 迁移工具
- 图谱质量评估仪表板

---

## 12. 关键技术决策记录

| 决策 | 选择 | 理由 |
|------|------|------|
| 主协议 | MCP | Agent-First，OpenClaw 原生支持 |
| 向量存储 | ES/Infinity（沿用） | 已有基础设施 |
| 图存储 | 待定（Neo4j/NebulaGraph/现有 ES 图模式） | Phase 1 评估 |
| Pipeline 编排 | 事件驱动（Redis Streams） | 轻量，沿用现有 Redis |
| 实体抽取 | LLM + few-shot | 替代人工规则，支持自进化 |
| 认证 | OAuth2 + JWT | 标准协议，支持 Agent 和人类 |

---

## 13. KM 记忆 vs RAGFlow 内置记忆

### RAGFlow 内置记忆的局限

RAGFlow v0.24 新增的 Memory 模块分析（基于源码）：

| 维度 | RAGFlow 内置记忆 | KM 记忆 |
|------|------------------|---------|
| 数据来源 | 仅内部 Agent 对话自动截取 | 外部 Agent 通过 MCP/API 主动写入 |
| 记忆类型 | 4 种固定类型（Raw/Semantic/Episodic/Procedural） | 自适应类型，LLM 自动发现 |
| 存储 | ES 平坦向量索引 | 向量 + 知识图谱双存储 |
| 遗忘策略 | FIFO（满了删最旧） | 智能衰退/强化/归档 |
| 权限 | me/team 两级 | L0~L3 四层 + RBAC/ABAC/ReBAC |
| 接口 | REST API only | MCP + REST + gRPC |
| 图谱 | storage_type='graph' 代码未实现 | 完整图谱模式 |
| 关联 | 记忆之间无关联 | 实体/关系网络 |

### KM 的记忆定位

KM 的核心场景：**对话发生在 RAGFlow 外部**（用户 ↔ OpenClaw），KM 只是记忆后端。

```
用户 ←→ OpenClaw（主战场，RAGFlow 外部）
              ↓ MCP 调用
             KM（记忆写入/知识检索）
```

RAGFlow 内置记忆只解决"自己的 Agent 聊天"，对 KM 生态基本无用。KM 需要从零建设面向外部 Agent 的记忆服务。

### 策略

- **不改造 RAGFlow 内置记忆模块**：保留但不依赖，避免增加合并冲突
- **KM 记忆作为独立模块新建**：通过 MCP Gateway 暴露，与 RAGFlow 核心解耦
- 复用 RAGFlow 的向量存储和文档解析基础设施，但记忆逻辑独立

---

## 14. 智能切片引擎

### 问题

当前 RAGFlow 的切片方式（naive/book/paper/presentation）基于预设模板，按段落/页面/标题切分。对于"记忆类"内容和复杂文档，切片质量不够。

### 目标：LLM 驱动的语义感知切片

#### 按文档类型自适应

| 文档类型 | 切片策略 | 粒度 |
|----------|----------|------|
| 论文 | 按 section/figure/table/conclusion | 段落级 |
| 合同 | 按条款/附件 | 条款级 |
| 会议纪要 | 按议题/决议/行动项 | 议题级 |
| 技术文档 | 按章节/API/配置项 | 章节级 |
| Agent 记忆 | 按独立事实/决策 | 事实级 |
| 通用文档 | LLM 判断语义边界 | 自适应 |

#### 切片流程

```
文档上传 → 文档类型识别（LLM/规则）→ 选择切片策略
  → LLM 语义边界检测 → 切片 → 每个 chunk 自动标注（类型/主题/重要度）
  → 向量化 → 实体/关系抽取 → 图谱合并
```

#### Agent 可指定粒度

通过 `ingest_submit` 的 `chunking_strategy` 参数：
```json
{
  "url": "https://arxiv.org/pdf/xxxx",
  "chunking_strategy": "auto|paper|contract|memo|fact|custom",
  "chunking_granularity": "paragraph|section|fact",
  "extract_entities": true
}
```

---

## 15. RAGFlow 升级兼容策略

### 核心原则：KM 定制代码与 RAGFlow 上游最大限度解耦

#### 代码分离策略

| 层级 | 策略 |
|------|------|
| 新增文件 | 放在独立目录（`api/km/`、`web/src/km/`），不混入 RAGFlow 原目录 |
| 修改原文件 | 最小化修改，用钩子/插件模式注入，标记 `# KM-CUSTOM` 注释 |
| 配置 | KM 配置独立文件，不改动 RAGFlow 原配置结构 |
| 数据库 | 新表用 `km_` 前缀，不修改 RAGFlow 原表结构 |
| 前端路由 | KM 页面挂载在独立路由前缀下 |

#### Git 升级流程

```
1. RAGFlow 上游发布新版本（如 v0.25.0）
2. git fetch upstream && git merge upstream/v0.25.0
3. 冲突只发生在"修改原文件"的部分（已最小化）
4. 新增的 KM 独立目录不会冲突
5. 运行测试验证兼容性
6. 更新 KM 版本号
```

#### 具体隔离措施

**后端**：
- `api/km/` — KM 专属模块（MCP Gateway、记忆服务、智能切片等）
- `api/apps/km_app.py` — KM 路由（独立 Blueprint）
- `api/db/km_models.py` — KM 数据模型（`km_` 前缀表）
- 对 RAGFlow 原文件的修改限于：注册 KM Blueprint、启动 KM 服务（几行代码）

**前端**：
- `web/src/km/` — KM 专属组件和页面
- `web/src/pages/admin/` — 保留现有 Admin 页面（已是我们的定制）
- 通过路由配置挂载，不修改 RAGFlow 原路由结构

**数据库**：
- 新表：`km_memory`、`km_agent_token`、`km_audit_log`、`km_ontology` 等
- 不修改 RAGFlow 的 `knowledgebase`、`document`、`memory` 等原表
- 通过外键或 ID 引用关联

---

## 附录：参考资料

- [大模型智能体与知识图谱融合指南](https://www.betteryeah.com/blog/guide-to-integration-of-large-model-agents-and-knowledge-graphs)
- [GraphRAG & Knowledge Graphs: Making Data AI-Ready for 2026](https://flur.ee/fluree-blog/graphrag-knowledge-graphs-making-your-data-ai-ready-for-2026/)
- [大模型时代的知识图谱年度进展报告](https://www.secrss.com/articles/75214)
- [电子标准院《知识图谱与大模型融合实践案例集》](https://www.secrss.com/articles/87045)
- [From LLMs to Knowledge Graphs: Production-Ready Systems 2025](https://medium.com/@claudiubranzan/from-llms-to-knowledge-graphs-building-production-ready-graph-systems-in-2025-2b4aff1ec99a)
- [LLM-Powered Knowledge Graphs for Enterprise Intelligence](https://arxiv.org/html/2503.07993v1)
