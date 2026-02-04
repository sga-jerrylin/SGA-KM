#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
import threading
from quart import request
from api.apps import login_required, current_user
from api.utils.api_utils import get_json_result, server_error_response
from api.db.services.news_sync_service import NewsSyncService
from api.db.services.archive_sync_service import ArchiveSyncService
from common.constants import RetCode


@manager.route("/config", methods=["GET"])  # noqa: F821
@login_required
def get_sync_config():
    """
    Get current news synchronization configuration.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    responses:
      200:
        description: Configuration retrieved successfully.
        schema:
          type: object
          properties:
            enabled:
              type: boolean
              description: Whether sync is enabled.
            sync_time:
              type: string
              description: Daily sync time (HH:MM).
            graph_regen_time:
              type: string
              description: GraphRAG regeneration time (HH:MM).
    """
    try:
        config = NewsSyncService.get_config()
        return get_json_result(data=config)
    except Exception as e:
        return server_error_response(e)


@manager.route("/config", methods=["POST"])  # noqa: F821
@login_required
async def update_sync_config():
    """
    Update news synchronization configuration.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    parameters:
      - in: body
        name: body
        schema:
          type: object
          properties:
            enabled:
              type: boolean
            sync_time:
              type: string
            graph_regen_time:
              type: string
    responses:
      200:
        description: Configuration updated successfully.
    """
    try:
        req = await request.get_json()
        # If sync_user_id is not set, default to current admin user
        if not req.get("sync_user_id") and not NewsSyncService.get_config().get("sync_user_id"):
            req["sync_user_id"] = current_user.id

        updated_config = NewsSyncService.update_config(req)
        return get_json_result(data=updated_config)
    except Exception as e:
        return server_error_response(e)


@manager.route("/trigger", methods=["POST"])  # noqa: F821
@login_required
async def trigger_sync():
    """
    Manually trigger news synchronization.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    parameters:
      - in: body
        name: body
        schema:
          type: object
          properties:
            date:
              type: string
              description: Target date (YYYY-MM-DD). Defaults to today.
    responses:
      200:
        description: Sync task started.
    """
    try:
        req = await request.get_json() or {}
        target_date = req.get("date", None)

        def run_sync():
            # force=True 跳过 enabled 检查，允许手动触发
            NewsSyncService.sync_news(target_date=target_date, force=True)

        t = threading.Thread(target=run_sync, daemon=True)
        t.start()
        return get_json_result(data={"message": "同步任务已启动", "date": target_date or "today"})
    except Exception as e:
        return server_error_response(e)


@manager.route("/trigger_graph", methods=["POST"])  # noqa: F821
@login_required
async def trigger_graph():
    """
    Manually trigger GraphRAG regeneration.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    parameters:
      - in: body
        name: body
        schema:
          type: object
          properties:
            years:
              type: array
              items:
                type: string
              description: List of years to regenerate (e.g., ["2026"]).
    responses:
      200:
        description: Graph regen task started.
    """
    try:
        req = await request.get_json() or {}
        years = req.get("years", [])

        def run_graph():
            NewsSyncService.trigger_graph_regen(years)

        t = threading.Thread(target=run_graph, daemon=True)
        t.start()
        return get_json_result(data={"message": "Graph regen task started in background.", "years": years})
    except Exception as e:
        return server_error_response(e)


@manager.route("/status", methods=["GET"])  # noqa: F821
@login_required
def get_sync_status():
    """
    Get current sync status and last sync info.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    responses:
      200:
        description: Status retrieved successfully.
    """
    try:
        config = NewsSyncService.get_config()
        status = {
            "enabled": config.get("enabled", False),
            "last_sync_date": config.get("last_sync_date", "Never"),
            "sync_time": config.get("sync_time", "23:50"),
            "graph_regen_time": config.get("graph_regen_time", "04:00"),
            "kb_mapping": config.get("kb_mapping", {})
        }
        return get_json_result(data=status)
    except Exception as e:
        return server_error_response(e)


@manager.route("/validate_kb", methods=["POST"])  # noqa: F821
@login_required
async def validate_news_kb_mapping():
    """
    验证知识库映射 - 用户同时输入名称和 ID，双重验证确保映射正确
    用于新闻同步的知识库映射确认
    """
    try:
        from api.db.db_models import Knowledgebase
        from api.db.services.user_service import UserTenantService
        req = await request.get_json()
        kb_name = req.get("kb_name")
        kb_id = req.get("kb_id")
        year = req.get("year")  # 映射的年份

        if not kb_name:
            return get_json_result(code=RetCode.BAD_REQUEST, message="知识库名称不能为空")
        if not kb_id:
            return get_json_result(code=RetCode.BAD_REQUEST, message="知识库 ID 不能为空")

        # 获取用户的 tenant_id
        tenants = UserTenantService.get_tenants_by_user_id(current_user.id)
        if not tenants:
            return get_json_result(code=RetCode.BAD_REQUEST, message="用户未关联租户")
        tenant_id = tenants[0]["tenant_id"]

        # 按 ID 查找知识库
        kb = Knowledgebase.get_or_none(Knowledgebase.id == kb_id)
        if not kb:
            return get_json_result(code=RetCode.NOT_FOUND, message=f"未找到 ID 为 '{kb_id}' 的知识库")

        # 验证名称是否匹配
        if kb.name != kb_name:
            return get_json_result(code=RetCode.BAD_REQUEST, message=f"知识库名称不匹配：输入 '{kb_name}'，实际 '{kb.name}'")

        # 验证租户权限 - 超级用户可以访问所有知识库
        is_superuser = getattr(current_user, 'is_superuser', False)
        if not is_superuser and kb.tenant_id != tenant_id:
            return get_json_result(code=RetCode.FORBIDDEN, message="无权访问该知识库")

        doc_count = kb.doc_num if hasattr(kb, 'doc_num') else 0

        # 如果指定了年份，保存映射
        if year:
            config = NewsSyncService.get_config()
            kb_mapping = config.get("kb_mapping", {})
            kb_name_mapping = config.get("kb_name_mapping", {})
            kb_mapping[str(year)] = kb_id
            kb_name_mapping[str(year)] = kb_name
            NewsSyncService.update_config({
                "kb_mapping": kb_mapping,
                "kb_name_mapping": kb_name_mapping
            })

        return get_json_result(data={
            "valid": True,
            "kb_id": kb_id,
            "kb_name": kb_name,
            "doc_count": doc_count,
            "message": "映射成功"
        })
    except Exception as e:
        return server_error_response(e)


# ==================== Archive Sync APIs ====================

@manager.route("/archive/config", methods=["GET"])  # noqa: F821
@login_required
def get_archive_config():
    """
    Get current archive synchronization configuration.
    """
    try:
        config = ArchiveSyncService.get_config()
        return get_json_result(data=config)
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/config", methods=["POST"])  # noqa: F821
@login_required
async def update_archive_config():
    """
    Update archive synchronization configuration.
    """
    try:
        req = await request.get_json()
        if not req.get("sync_user_id") and not ArchiveSyncService.get_config().get("sync_user_id"):
            req["sync_user_id"] = current_user.id
        updated_config = ArchiveSyncService.update_config(req)
        return get_json_result(data=updated_config)
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/categories", methods=["GET"])  # noqa: F821
@login_required
def get_archive_categories():
    """
    Get archive document type categories from archive system.
    """
    try:
        config = ArchiveSyncService.get_config()
        categories = config.get("categories", [])
        return get_json_result(data=categories)
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/categories/refresh", methods=["POST"])  # noqa: F821
@login_required
def refresh_archive_categories():
    """
    Refresh archive categories from archive system API.
    """
    try:
        categories = ArchiveSyncService.refresh_categories()
        return get_json_result(data=categories)
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/validate_kb", methods=["POST"])  # noqa: F821
@login_required
async def validate_archive_kb_mapping():
    """
    验证档案分类的知识库映射
    用户同时输入知识库名称和 ID，双重验证确保映射正确
    docclassfyname 对应的知识库
    """
    try:
        from api.db.services.knowledgebase_service import KnowledgebaseService
        from api.db.db_models import Knowledgebase
        from api.db.services.user_service import UserTenantService
        req = await request.get_json()
        kb_name = req.get("kb_name")
        kb_id = req.get("kb_id")
        classfy_name = req.get("classfy_name")  # docclassfyname 字段值

        if not kb_name:
            return get_json_result(code=RetCode.BAD_REQUEST, message="知识库名称不能为空")
        if not kb_id:
            return get_json_result(code=RetCode.BAD_REQUEST, message="知识库 ID 不能为空")

        # 获取用户的 tenant_id
        tenants = UserTenantService.get_tenants_by_user_id(current_user.id)
        if not tenants:
            return get_json_result(code=RetCode.BAD_REQUEST, message="用户未关联租户")
        tenant_id = tenants[0]["tenant_id"]

        # 按 ID 查找知识库
        kb = Knowledgebase.get_or_none(Knowledgebase.id == kb_id)
        if not kb:
            return get_json_result(code=RetCode.NOT_FOUND, message=f"未找到 ID 为 '{kb_id}' 的知识库")

        # 验证名称是否匹配
        if kb.name != kb_name:
            return get_json_result(code=RetCode.BAD_REQUEST, message=f"知识库名称不匹配：输入 '{kb_name}'，实际 '{kb.name}'")

        # 验证租户权限 - 超级用户可以访问所有知识库
        is_superuser = getattr(current_user, 'is_superuser', False)
        if not is_superuser and kb.tenant_id != tenant_id:
            return get_json_result(code=RetCode.FORBIDDEN, message="无权访问该知识库")

        doc_count = kb.doc_num if hasattr(kb, 'doc_num') else 0

        # 保存映射 - 使用 classfy_name (docclassfyname) 作为 key
        if classfy_name:
            config = ArchiveSyncService.get_config()
            category_mapping = config.get("category_mapping", {})  # classfy_name -> kb_id
            category_name_mapping = config.get("category_name_mapping", {})  # classfy_name -> kb_name
            category_mapping[classfy_name] = kb_id
            category_name_mapping[classfy_name] = kb_name
            ArchiveSyncService.update_config({
                "category_mapping": category_mapping,
                "category_name_mapping": category_name_mapping
            })

        return get_json_result(data={
            "valid": True,
            "kb_id": kb_id,
            "kb_name": kb_name,
            "doc_count": doc_count,
            "message": "映射成功"
        })
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/trigger", methods=["POST"])  # noqa: F821
@login_required
async def trigger_archive_sync():
    """
    Manually trigger archive synchronization.
    """
    try:
        req = await request.get_json() or {}
        doctype_code = req.get("doctype")  # Optional: sync specific category
        category_name = req.get("category_name")  # Optional: category name for KB creation
        days_back = req.get("days_back", 7)

        def run_sync():
            if doctype_code:
                ArchiveSyncService.sync_category(doctype_code, category_name=category_name)
            else:
                ArchiveSyncService.sync_all_categories(days_back=days_back)

        t = threading.Thread(target=run_sync, daemon=True)
        t.start()
        return get_json_result(data={
            "message": "档案同步任务已启动",
            "doctype": doctype_code or "all",
            "days_back": days_back
        })
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/trigger_graph", methods=["POST"])  # noqa: F821
@login_required
async def trigger_archive_graph():
    """
    Manually trigger GraphRAG regeneration for archive KBs.
    """
    try:
        req = await request.get_json() or {}
        doctype_codes = req.get("doctypes", None)  # List of doctype codes

        def run_graph():
            ArchiveSyncService.trigger_graph_regen(doctype_codes)

        t = threading.Thread(target=run_graph, daemon=True)
        t.start()
        return get_json_result(data={
            "message": "Archive graph regen task started in background.",
            "doctypes": doctype_codes or "all"
        })
    except Exception as e:
        return server_error_response(e)


# ==================== Connection Test APIs ====================

@manager.route("/test_connection", methods=["POST"])  # noqa: F821
@login_required
async def test_news_connection():
    """
    Test connection to OA news API.
    ---
    tags:
      - News Sync
    security:
      - ApiKeyAuth: []
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              api_url:
                type: string
                description: Optional API URL to test. Uses configured URL if not provided.
    responses:
      200:
        description: Connection test result.
    """
    try:
        req = await request.get_json() or {}
        api_url = req.get("api_url")  # Optional: test specific URL
        result = NewsSyncService.test_connection(api_url)
        return get_json_result(data=result)
    except Exception as e:
        return server_error_response(e)


@manager.route("/archive/test_connection", methods=["POST"])  # noqa: F821
@login_required
async def test_archive_connection():
    """
    Test connection to Archive API.
    ---
    tags:
      - Archive Sync
    security:
      - ApiKeyAuth: []
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              api_base_url:
                type: string
                description: Optional API base URL to test. Uses configured URL if not provided.
    responses:
      200:
        description: Connection test result.
    """
    try:
        req = await request.get_json() or {}
        api_base_url = req.get("api_base_url")  # Optional: test specific URL
        result = ArchiveSyncService.test_connection(api_base_url)
        return get_json_result(data=result)
    except Exception as e:
        return server_error_response(e)
