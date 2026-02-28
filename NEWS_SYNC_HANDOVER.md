# 国贸 RAGFlow 新闻自动同步功能实施交接文档

## 1. 项目背景与需求
- **目标**：实现厦门国贸集团内网新闻的自动增量同步，并自动更新 RAG 知识库。
- **现状**：
  - 2003-2025 年数据已入库（无需处理）。
  - 需要自动同步 2026 年及后续年份的每日新增新闻。
  - 需要定时触发 GraphRAG（知识图谱）的重建（针对当日更新的年份）。
- **核心策略**：
  - **同步频率**：每天 **23:50** 执行一次。
  - **增量方式**：利用接口的 `doccreatedate` 字段，只拉取 **当天** 的新闻。
  - **用户身份**：使用国贸超管账号 `zhengys1@xindeco.com.cn` 执行后台任务。

---

## 2. 后端开发方案

### 2.1 核心服务类 (`api/db/services/news_sync_service.py`)

创建一个新的服务类 `NewsSyncService`，负责鉴权、拉取、上传和调度。

**关键逻辑点**：
1.  **鉴权 (MD5)**：
    - `systemid`: "AIKMP"
    - `password`: "Itg@AIKMP#20251125"
    - `currentDateTime`: `yyyyMMddHHmmss`
    - `Md5`: `md5(systemid + password + timestamp)`
2.  **拉取逻辑**：
    - 构造请求体，设置 `mainTable.doccreatedate = 当前日期(YYYY-MM-DD)`。
    - 仅拉取第 1 页（通常当天新闻不会超过 10 条/页，建议设置 pageSize=100 以防万一）。
3.  **上传逻辑**：
    - 将 HTML 内容封装为内存文件对象。
    - 调用 `FileService.upload_document` 上传到对应年份的 KB。
4.  **调度器**：
    - 启动一个后台线程，每分钟检查一次时间。
    - 到达 `23:50` 时触发同步。
    - 同步完成后（或指定时间）触发 GraphRAG 构建。

**代码参考模板**：

```python
# api/db/services/news_sync_service.py

import json
import logging
import threading
import time
import requests
import re
import hashlib
from datetime import datetime
from api.db.db_models import SystemSetting, Knowledgebase
from api.db.services.knowledgebase_service import KnowledgebaseService
from api.db.services.document_service import DocumentService, queue_raptor_o_graphrag_tasks
from api.db.services.file_service import FileService
from api.db.services.task_service import GRAPH_RAPTOR_FAKE_DOC_ID

# 内存文件适配器
class MemoryFile:
    def __init__(self, content, filename):
        self.content = content.encode('utf-8') if isinstance(content, str) else content
        self.filename = filename
        self.size = len(self.content)
        self.content_type = "text/html"
    def read(self):
        return self.content

class NewsSyncService:
    CONFIG_KEY = "news_sync_config"
    API_URL = "http://oa.itg.cn/api/cube/restful/interface/getModeDataPageList/itg_intranetnews"

    # 鉴权信息
    SYSTEM_ID = "AIKMP"
    PASSWORD = "Itg@AIKMP#20251125"

    @classmethod
    def get_auth_headers(cls):
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        raw = f"{cls.SYSTEM_ID}{cls.PASSWORD}{timestamp}"
        md5_val = hashlib.md5(raw.encode("utf-8")).hexdigest()
        return {
            "User-Agent": "Mozilla/5.0...",
            "systemid": cls.SYSTEM_ID,
            "currentDateTime": timestamp,
            "Md5": md5_val
        }

    @classmethod
    def get_sync_user_id(cls):
        # 优先使用国贸超管
        from api.db.services.user_service import UserService
        user = UserService.query(email="zhengys1@xindeco.com.cn")
        if user: return user[0].id
        user = UserService.query(email="admin@ragflow.io") # 兜底
        if user: return user[0].id
        return None

    @classmethod
    def sync_daily_news(cls):
        """执行每日同步的核心方法"""
        config = cls.get_config()
        if not config.get("enabled", False):
            return

        user_id = cls.get_sync_user_id()
        if not user_id:
            logging.error("NewsSync: No valid user_id found.")
            return

        # 获取 Tenant ID (假设用户只属于一个租户)
        from api.db.services.user_service import UserTenantService
        tenants = UserTenantService.get_tenants_by_user_id(user_id)
        tenant_id = tenants[0]["tenant_id"]

        today_str = datetime.now().strftime("%Y-%m-%d")
        logging.info(f"NewsSync: Starting sync for date {today_str}")

        # 1. 调用接口拉取当日新闻
        try:
            articles = cls._fetch_articles_by_date(today_str)
        except Exception as e:
            logging.error(f"NewsSync: API Error - {e}")
            return

        if not articles:
            logging.info("NewsSync: No articles found for today.")
            return

        # 2. 获取或创建当年的 KB (例如 "ITG_News_2026")
        current_year = str(datetime.now().year)
        kb_id = cls.get_or_create_kb(current_year, tenant_id)
        kb_inst, _ = KnowledgebaseService.get_by_id(kb_id)

        # 3. 循环上传
        success_count = 0
        for item in articles:
            main = item.get("mainTable", {})
            subject = main.get("docsubject", "Untitled")
            content = main.get("doccontent", "")

            if not content: continue

            filename = f"{today_str}_{cls._sanitize(subject)}.html"
            file_obj = MemoryFile(content, filename)

            try:
                FileService.upload_document(kb_inst, [file_obj], user_id)
                success_count += 1
                logging.info(f"NewsSync: Uploaded {filename}")
            except Exception as e:
                logging.error(f"NewsSync: Upload failed for {filename} - {e}")

        # 4. 如果有新数据，触发 GraphRAG 更新
        if success_count > 0:
            # 简单策略：立即触发，或者等待定时任务触发
            # cls.trigger_graph_regen([current_year])
            pass

    @classmethod
    def _fetch_articles_by_date(cls, date_str):
        """按日期筛选拉取"""
        headers = cls.get_auth_headers()
        payload = {
            "operationinfo": {"operator": "15273"},
            "mainTable": {
                "doccreatedate": date_str  # 关键：按日期筛选
            },
            "pageInfo": {"pageNo": "1", "pageSize": "100"},
            "header": {
                "systemid": headers["systemid"],
                "currentDateTime": headers["currentDateTime"],
                "Md5": headers["Md5"]
            }
        }
        # 发送请求... (略)
        return [] # 返回 result 列表

    @classmethod
    def start_scheduler(cls):
        """后台调度线程"""
        def run():
            while True:
                try:
                    config = cls.get_config()
                    if not config.get("enabled", False):
                        time.sleep(60); continue

                    now_hm = datetime.now().strftime("%H:%M")
                    target_time = config.get("sync_time", "23:50")

                    if now_hm == target_time:
                        cls.sync_daily_news()
                        # 触发图谱更新(可选延迟)
                        cls.trigger_graph_regen([str(datetime.now().year)])
                        time.sleep(61) # 避免一分钟内重复触发

                    time.sleep(20)
                except:
                    time.sleep(60)

        threading.Thread(target=run, daemon=True).start()
```

### 2.2 API 接口 (`api/apps/sync_app.py`)

创建 Flask Blueprint，提供给前端设置页面使用。

- `GET /api/v1/sync/config`: 获取当前配置。
- `POST /api/v1/sync/config`: 更新配置（开关、时间、KB ID 映射）。
- `POST /api/v1/sync/trigger`: 手动触发（用于立即测试）。

### 2.3 服务入口挂载 (`api/ragflow_server.py`)

- 在 `if __name__ == '__main__':` 块中，HTTP 服务启动前，添加：
  ```python
  from api.db.services.news_sync_service import NewsSyncService
  NewsSyncService.start_scheduler()
  ```
- 注册 Blueprint: 在 `api/apps/__init__.py` 中通常会自动发现 `_app.py` 结尾的文件，需要确认 `sync_app.py` 是否生效。

---

## 3. 前端开发方案

### 3.1 管理页面 (`web/src/pages/admin/settings.tsx`)

在“系统设置”页面增加一个新的 Card 面板：**“新闻同步设置 (News Sync)”**。

**界面元素**：
1.  **自动同步开关** (Switch)：控制 `enabled`。
2.  **同步时间** (TimePicker/Input)：设置 `sync_time`，默认 `23:50`。
3.  **当前年份知识库 ID** (Input)：显示 `2026` 对应的 KB ID，允许修改。
4.  **操作按钮**：
    - [保存配置]
    - [立即同步 (测试)]：调用 `trigger` 接口。

**数据交互**：
- 调用 `api.get_sync_config()` 获取初始状态。
- 调用 `api.update_sync_config()` 保存。

---

## 4. 验证与测试步骤

1.  **后端单元测试**：
    - 先运行 `verify_md5.py` 确保签名算法正确。
    - 使用 `requests` 模拟一次 `_fetch_articles_by_date` 调用，确认能拉取到数据。
2.  **集成测试**：
    - 启动 RAGFlow 后端。
    - 通过前端“立即同步”按钮触发。
    - 观察日志 (`logs/ragflow_server.log`) 是否有 `NewsSync: Uploaded ...`。
    - 在 RAGFlow 知识库界面检查是否出现了新文件。
3.  **定时任务测试**：
    - 将同步时间设置改为当前时间 + 2分钟。
    - 等待观察是否自动触发。

---

## 5. 给开发 Agent 的行动指令

1.  **创建文件**：直接根据上面的代码模板，创建 `api/db/services/news_sync_service.py`。
2.  **创建接口**：创建 `api/apps/sync_app.py`。
3.  **修改入口**：编辑 `api/ragflow_server.py` 启动调度器。
4.  **前端修改**：修改 `web/src/pages/admin/settings.tsx` 添加设置面板。
5.  **验证**：手动调用一次触发接口，检查日志。
