import json
import logging
import threading
import time
import requests
import re
import hashlib
from datetime import datetime, timedelta, timedelta
from api.db.db_models import SystemSetting, Knowledgebase, Document
from api.db.services.knowledgebase_service import KnowledgebaseService
from api.db.services.document_service import DocumentService, queue_raptor_o_graphrag_tasks
from api.db.services.file_service import FileService
from api.db.services.task_service import GRAPH_RAPTOR_FAKE_DOC_ID

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
    # Default API URL (can be overridden via config)
    DEFAULT_API_URL = "http://oa.itg.cn/api/cube/restful/interface/getModeDataPageList/itg_intranetnews"

    # Auth Constants
    SYSTEM_ID = "AIKMP"
    PASSWORD = "Itg@AIKMP#20251125"

    @classmethod
    def get_api_url(cls):
        """Get API URL from config or use default"""
        config = cls.get_config()
        return config.get("api_url") or cls.DEFAULT_API_URL

    @classmethod
    def test_connection(cls, api_url=None):
        """
        Test connection to OA API
        :param api_url: Optional URL to test, uses configured URL if not provided
        :return: dict with success status and message
        """
        test_url = api_url or cls.get_api_url()
        try:
            headers = cls.get_auth_headers()
            # Build test request with correct format (form-urlencoded with datajson)
            payload = {
                "operationinfo": {"operator": "15273"},
                "mainTable": {"id": "1"},
                "pageInfo": {"pageNo": "1", "pageSize": "1"},
                "header": {
                    "systemid": headers["systemid"],
                    "currentDateTime": headers["currentDateTime"],
                    "Md5": headers["Md5"]
                }
            }
            data_str = json.dumps(payload, ensure_ascii=False)
            resp = requests.post(test_url, data={"datajson": data_str}, headers=headers, timeout=10)

            if resp.status_code == 200:
                data = resp.json()
                # OA API returns {"result": "[...]"} format
                if "result" in data:
                    result = data["result"]
                    # Try to parse the result if it's a string
                    if isinstance(result, str):
                        try:
                            result_list = json.loads(result)
                            count = len(result_list) if isinstance(result_list, list) else 0
                            return {
                                "success": True,
                                "message": f"连接成功，获取到 {count} 条测试数据",
                                "status_code": resp.status_code
                            }
                        except json.JSONDecodeError:
                            return {
                                "success": True,
                                "message": "连接成功，但响应数据解析异常",
                                "status_code": resp.status_code
                            }
                    else:
                        return {
                            "success": True,
                            "message": "连接成功",
                            "status_code": resp.status_code
                        }
                else:
                    return {
                        "success": True,
                        "message": f"连接成功，但响应格式可能不正确: {list(data.keys())[:5]}",
                        "status_code": resp.status_code
                    }
            else:
                return {
                    "success": False,
                    "message": f"HTTP错误: {resp.status_code}",
                    "status_code": resp.status_code
                }
        except requests.exceptions.Timeout:
            return {"success": False, "message": "连接超时"}
        except requests.exceptions.ConnectionError as e:
            return {"success": False, "message": f"连接失败: {str(e)[:100]}"}
        except Exception as e:
            return {"success": False, "message": f"测试失败: {str(e)[:100]}"}

    @classmethod
    def get_auth_headers(cls):
        """Generate dynamic auth headers"""
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        # MD5 = systemid + password + timestamp
        raw_str = f"{cls.SYSTEM_ID}{cls.PASSWORD}{timestamp}"
        md5_str = hashlib.md5(raw_str.encode("utf-8")).hexdigest()

        return {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "systemid": cls.SYSTEM_ID,
            "currentDateTime": timestamp,
            "Md5": md5_str
        }

    @classmethod
    def get_config(cls):
        setting = SystemSetting.get_or_none(SystemSetting.key == cls.CONFIG_KEY)
        current_year = str(datetime.now().year)
        default_config = {
            "sync_time": "02:00",
            "graph_regen_time": "04:00",
            "enabled": False,
            "kb_mapping": {},
            "kb_name_mapping": {},  # year -> kb_name
            "last_sync_date": "2026-01-01",
            "sync_user_id": "",
            # API URL configuration
            "api_url": cls.DEFAULT_API_URL,
            # News sync frequency settings
            "sync_frequency": "daily",  # daily, weekly, monthly
            "weekly_days": [1],  # 0=Sunday, 1=Monday, etc.
            "monthly_days": [1],  # 1-31
            # Graph rebuild frequency settings (separate from news sync)
            "graph_regen_frequency": "weekly",  # daily, weekly, monthly
            "graph_regen_weekly_days": [0],  # 0=Sunday - rebuild on weekends
            "graph_regen_monthly_days": [1],  # 1st of month
            # Current year info (computed)
            "current_year": current_year,
            "current_year_kb_id": "",
            "current_year_kb_name": f"ITG_News_{current_year}",
            "sync_count": 0
        }
        if not setting:
            return cls._enrich_config(default_config)
        try:
            config = {**default_config, **json.loads(setting.value)}
            return cls._enrich_config(config)
        except:
            return cls._enrich_config(default_config)

    @classmethod
    def _enrich_config(cls, config):
        """Enrich config with computed fields like current year KB info"""
        current_year = str(datetime.now().year)
        config["current_year"] = current_year

        # Get current year KB info
        mapping = config.get("kb_mapping", {})
        kb_name_mapping = config.get("kb_name_mapping", {})

        if current_year in mapping:
            kb_id = mapping[current_year]
            config["current_year_kb_id"] = kb_id
            # Get KB name from mapping or from actual KB
            if current_year in kb_name_mapping:
                config["current_year_kb_name"] = kb_name_mapping[current_year]
            else:
                kb = Knowledgebase.get_or_none(Knowledgebase.id == kb_id)
                if kb:
                    config["current_year_kb_name"] = kb.name
                else:
                    config["current_year_kb_name"] = f"ITG_News_{current_year}"
            # Get document count
            try:
                count = Document.select().where(Document.kb_id == kb_id).count()
                config["sync_count"] = count
            except:
                config["sync_count"] = 0
        else:
            config["current_year_kb_id"] = ""
            config["current_year_kb_name"] = kb_name_mapping.get(current_year, f"ITG_News_{current_year}")
            config["sync_count"] = 0

        return config

    @classmethod
    def update_config(cls, config):
        # Get raw config without enrichment for storage
        setting = SystemSetting.get_or_none(SystemSetting.key == cls.CONFIG_KEY)
        if setting:
            try:
                current = json.loads(setting.value)
            except:
                current = {}
        else:
            current = {}

        # Handle current_year_kb_name update -> store in kb_name_mapping
        if "current_year_kb_name" in config:
            current_year = str(datetime.now().year)
            kb_name_mapping = current.get("kb_name_mapping", {})
            kb_name_mapping[current_year] = config["current_year_kb_name"]
            current["kb_name_mapping"] = kb_name_mapping
            # Remove computed field from storage
            del config["current_year_kb_name"]

        # Remove other computed fields that shouldn't be stored
        for key in ["current_year", "current_year_kb_id", "sync_count"]:
            config.pop(key, None)

        current.update(config)
        SystemSetting.replace(key=cls.CONFIG_KEY, value=json.dumps(current)).execute()
        return cls.get_config()  # Return enriched config

    @classmethod
    def get_sync_user_id(cls):
        """Find the correct user ID for sync operations"""
        from api.db.services.user_service import UserService

        # 1. Try config first
        config = cls.get_config()
        if config.get("sync_user_id"):
            return config.get("sync_user_id")

        # 2. Try Xindeco admin
        user = UserService.query(email="zhengys1@xindeco.com.cn")
        if user:
            return user[0].id

        # 3. Try default admin
        user = UserService.query(email="admin@ragflow.io")
        if user:
            return user[0].id

        return None

    @classmethod
    def get_kb_id_for_year(cls, year, tenant_id, user_id):
        config = cls.get_config()
        mapping = config.get("kb_mapping", {})
        kb_name_mapping = config.get("kb_name_mapping", {})

        # 1. Check if mapping exists and KB still valid
        if str(year) in mapping:
            if Knowledgebase.get_or_none(Knowledgebase.id == mapping[str(year)]):
                return mapping[str(year)]

        # 2. Get KB name for this year
        kb_name = kb_name_mapping.get(str(year), f"ITG_News_{year}")

        # 3. Try to find existing KB by name first
        exists, existing_kb = KnowledgebaseService.get_by_name(kb_name, tenant_id)
        if exists and existing_kb:
            kb_id = existing_kb.id
            mapping[str(year)] = kb_id
            kb_name_mapping[str(year)] = kb_name
            cls.update_config({"kb_mapping": mapping, "kb_name_mapping": kb_name_mapping})
            logging.info(f"Found existing KB '{kb_name}' for year {year}: {kb_id}")
            return kb_id

        # 4. Create new KB if not exists
        logging.info(f"Creating new KB '{kb_name}' for year {year}")
        try:
            # Use general parser for news HTML files
            ok, payload = KnowledgebaseService.create_with_name(
                name=kb_name,
                tenant_id=tenant_id,
                parser_id="naive"  # general parser
            )
            if ok and payload and "id" in payload:
                # Actually save to database
                if KnowledgebaseService.save(**payload):
                    kb_id = payload["id"]
                    mapping[str(year)] = kb_id
                    kb_name_mapping[str(year)] = kb_name
                    cls.update_config({"kb_mapping": mapping, "kb_name_mapping": kb_name_mapping})
                    logging.info(f"Created KB '{kb_name}' for year {year}: {kb_id}")
                    return kb_id
                else:
                    logging.error(f"Failed to save KB for {year}")
            else:
                logging.error(f"Failed to create KB payload for {year}: {payload}")
        except Exception as e:
            logging.error(f"Failed to create KB for {year}: {e}")
            return None
        return None

    @classmethod
    def sync_news(cls, target_date=None, force=False):
        """
        Main sync logic - fetches news for a specific date (default: today)
        :param target_date: Target date in YYYY-MM-DD format
        :param force: If True, bypass the enabled check (for manual trigger)
        """
        config = cls.get_config()
        # 只有定时同步才检查 enabled，手动触发 (force=True) 时跳过检查
        if not force and not config.get("enabled", False):
            logging.info("News sync is disabled.")
            return set()

        user_id = cls.get_sync_user_id()
        if not user_id:
            logging.error("No valid user_id found for news sync.")
            return set()

        # Get tenant_id from user
        from api.db.services.user_service import UserTenantService
        tenants = UserTenantService.get_tenants_by_user_id(user_id)
        if not tenants:
            logging.error(f"User {user_id} belongs to no tenant.")
            return set()
        tenant_id = tenants[0]["tenant_id"]

        # Use target_date or default to today
        if target_date is None:
            target_date = datetime.now().strftime("%Y-%m-%d")

        logging.info(f"Starting news sync for date: {target_date}")

        # Track which years were updated
        updated_years = set()
        sync_count = 0

        try:
            # Fetch articles for the specific date
            data = cls._fetch_articles_by_date(target_date)
            if not data or "result" not in data:
                logging.info(f"No data returned for date {target_date}")
                return updated_years

            result_list = data["result"]
            if isinstance(result_list, str):
                try:
                    result_list = json.loads(result_list)
                except:
                    result_list = []

            if not result_list:
                logging.info(f"No articles found for date {target_date}")
                return updated_years

            logging.info(f"Found {len(result_list)} articles for {target_date}")

            for item in result_list:
                main_table = item.get("mainTable", {})
                doc_date = main_table.get("doccreatedate", target_date)
                doc_subject = main_table.get("docsubject", "Untitled")
                doc_content = main_table.get("doccontent", "")

                if not doc_content:
                    logging.info(f"[NewsSync] Skipping article with empty content: {doc_subject}")
                    continue

                year = doc_date.split("-")[0] if "-" in doc_date else str(datetime.now().year)
                logging.info(f"[NewsSync] Processing article: {doc_subject}, date: {doc_date}, year: {year}")

                kb_id = cls.get_kb_id_for_year(year, tenant_id, user_id)
                if not kb_id:
                    logging.warning(f"[NewsSync] Could not get/create KB for year {year}")
                    continue
                logging.info(f"[NewsSync] Using KB: {kb_id} for year {year}")

                # Generate unique filename
                file_name = f"{doc_date}_{cls._sanitize_filename(doc_subject)}.html"

                # Check for duplicates in existing documents
                existing_docs = Document.select().where(
                    Document.kb_id == kb_id,
                    Document.name == file_name
                )
                if existing_docs.count() > 0:
                    logging.info(f"[NewsSync] Document already exists, skipping: {file_name}")
                    continue

                # Upload
                file_obj = MemoryFile(doc_content, file_name)
                # get_by_id 返回 (success, kb_object)，注意顺序！
                success, kb_inst = KnowledgebaseService.get_by_id(kb_id)
                if not success or not kb_inst:
                    logging.error(f"[NewsSync] KB instance not found for id: {kb_id}")
                    continue

                try:
                    logging.info(f"[NewsSync] Uploading: {file_name} to KB {kb_id}")
                    err, files = FileService.upload_document(kb_inst, [file_obj], user_id)
                    if err:
                        logging.error(f"[NewsSync] Upload error for {file_name}: {err}")
                        continue
                    # 强制使用 naive (general) 解析器，不管知识库默认设置
                    if files:
                        doc = files[0][0]  # (doc_dict, blob)
                        doc_id = doc.get("id") if isinstance(doc, dict) else doc.id
                        DocumentService.update_by_id(doc_id, {"parser_id": "naive"})
                        logging.info(f"[NewsSync] Set parser to 'naive' for doc {doc_id}")

                        # 自动触发解析 - 使用 DocumentService.run()
                        try:
                            doc_for_run = doc if isinstance(doc, dict) else {"id": doc.id, "kb_id": kb_id, "parser_id": "naive"}
                            doc_for_run["kb_id"] = kb_id
                            doc_for_run["parser_id"] = "naive"
                            DocumentService.run(kb_inst.tenant_id, doc_for_run, {})
                            logging.info(f"[NewsSync] Queued parsing task for doc {doc_id}")
                        except Exception as parse_err:
                            logging.error(f"[NewsSync] Failed to queue parsing for {doc_id}: {parse_err}")
                    sync_count += 1
                    updated_years.add(year)
                    logging.info(f"[NewsSync] Successfully synced: {file_name}")
                except Exception as e:
                    logging.error(f"[NewsSync] Failed to upload {file_name}: {e}", exc_info=True)

        except Exception as e:
            logging.error(f"Sync error for date {target_date}: {e}")

        # Update last sync date
        cls.update_config({"last_sync_date": target_date})
        logging.info(f"Sync completed for {target_date}. Imported {sync_count} documents.")
        return updated_years

    @classmethod
    def sync_news_range(cls, start_date=None, end_date=None, force=False):
        """
        Sync news from start_date to end_date (inclusive).
        Used by scheduled sync to catch up from last_sync_date to today.
        :param start_date: Start date in YYYY-MM-DD format
        :param end_date: End date in YYYY-MM-DD format
        :param force: If True, bypass the enabled check (for manual trigger)
        """
        config = cls.get_config()

        # Default: from last_sync_date to today
        if start_date is None:
            start_date = config.get("last_sync_date", "2026-01-01")
        if end_date is None:
            end_date = datetime.now().strftime("%Y-%m-%d")

        logging.info(f"Starting range sync from {start_date} to {end_date}")

        all_updated_years = set()
        total_synced = 0

        try:
            # Parse dates
            start = datetime.strptime(start_date, "%Y-%m-%d")
            end = datetime.strptime(end_date, "%Y-%m-%d")

            # Iterate through each day
            current = start
            while current <= end:
                date_str = current.strftime("%Y-%m-%d")
                # 传递 force 参数，确保手动触发时跳过 enabled 检查
                updated_years = cls.sync_news(date_str, force=force)
                all_updated_years.update(updated_years)
                current += timedelta(days=1)
                total_synced += 1

        except Exception as e:
            logging.error(f"Range sync error: {e}")

        logging.info(f"Range sync completed. Synced {total_synced} days, updated years: {all_updated_years}")
        return all_updated_years

    @classmethod
    def trigger_graph_regen(cls, years_to_update=None):
        """Trigger GraphRAG for specific years"""
        config = cls.get_config()
        mapping = config.get("kb_mapping", {})

        # If years_to_update is empty/None, do nothing or do all?
        # Safer to do nothing unless specified, or current year.
        if not years_to_update:
            return

        for year in years_to_update:
            year = str(year)
            if year not in mapping:
                continue

            kb_id = mapping[year]
            logging.info(f"Triggering GraphRAG for {year} (KB: {kb_id})")

            try:
                # 1. Get all doc IDs
                docs = DocumentService.get_by_kb_id(kb_id, 1, 100000, "create_time", False, "", [], [], [])
                if not docs:
                    continue

                doc_ids = [d["id"] for d in docs]
                sample_doc = docs[0]

                # 2. Queue task
                task_id = queue_raptor_o_graphrag_tasks(
                    sample_doc_id=sample_doc,
                    ty="graphrag",
                    priority=0,
                    fake_doc_id=GRAPH_RAPTOR_FAKE_DOC_ID,
                    doc_ids=doc_ids
                )

                # 3. Update KB
                KnowledgebaseService.update_by_id(kb_id, {"graphrag_task_id": task_id})
                logging.info(f"GraphRAG task queued for KB {kb_id}: {task_id}")

            except Exception as e:
                logging.error(f"Failed to trigger GraphRAG for KB {kb_id}: {e}")

    @classmethod
    def _fetch_articles_by_date(cls, date_str, page_no=1, page_size=100):
        """Fetch articles for a specific date using doccreatedate filter"""
        headers = cls.get_auth_headers()
        payload = {
            "operationinfo": {"operator": "15273"},
            "mainTable": {
                "doccreatedate": date_str  # Key: filter by date
            },
            "pageInfo": {"pageNo": str(page_no), "pageSize": str(page_size)},
            "header": {
                "systemid": headers["systemid"],
                "currentDateTime": headers["currentDateTime"],
                "Md5": headers["Md5"]
            }
        }
        data_str = json.dumps(payload, ensure_ascii=False)
        api_url = cls.get_api_url()
        resp = requests.post(api_url, data={"datajson": data_str}, headers=headers, timeout=30)
        resp.raise_for_status()
        return resp.json()

    @classmethod
    def _fetch_page(cls, page_no):
        """Legacy method for paginated fetching (kept for compatibility)"""
        headers = cls.get_auth_headers()
        payload = {
            "operationinfo": {"operator": "15273"},
            "mainTable": {"id": "1"},
            "pageInfo": {"pageNo": str(page_no), "pageSize": "10"},
            "header": {
                "systemid": headers["systemid"],
                "currentDateTime": headers["currentDateTime"],
                "Md5": headers["Md5"]
            }
        }
        data_str = json.dumps(payload, ensure_ascii=False)
        api_url = cls.get_api_url()
        resp = requests.post(api_url, data={"datajson": data_str}, headers=headers, timeout=30)
        resp.raise_for_status()
        return resp.json()

    @staticmethod
    def _sanitize_filename(name):
        return re.sub(r'[\\/:*?"<>|]', '_', name)[:100]

    @classmethod
    def _should_sync_today(cls, config):
        """Check if news sync should run today based on frequency settings"""
        frequency = config.get("sync_frequency", "daily")
        now = datetime.now()

        if frequency == "daily":
            return True
        elif frequency == "weekly":
            # weekday(): Monday=0, Sunday=6
            # But we store: Sunday=0, Monday=1, etc. (JS convention)
            current_weekday = (now.weekday() + 1) % 7  # Convert to JS convention
            weekly_days = config.get("weekly_days", [1])  # Default Monday
            return current_weekday in weekly_days
        elif frequency == "monthly":
            current_day = now.day
            monthly_days = config.get("monthly_days", [1])  # Default 1st
            return current_day in monthly_days

        return True  # Default to daily

    @classmethod
    def _should_regen_graph_today(cls, config):
        """Check if graph rebuild should run today based on its own frequency settings"""
        frequency = config.get("graph_regen_frequency", "weekly")
        now = datetime.now()

        if frequency == "daily":
            return True
        elif frequency == "weekly":
            current_weekday = (now.weekday() + 1) % 7  # Convert to JS convention
            weekly_days = config.get("graph_regen_weekly_days", [0])  # Default Sunday
            return current_weekday in weekly_days
        elif frequency == "monthly":
            current_day = now.day
            monthly_days = config.get("graph_regen_monthly_days", [1])  # Default 1st
            return current_day in monthly_days

        return True  # Default to weekly

    @classmethod
    def start_scheduler(cls):
        """Simple thread-based scheduler with support for daily/weekly/monthly"""
        def run():
            logging.info("News Sync Scheduler started.")
            while True:
                try:
                    config = cls.get_config()
                    if not config.get("enabled", False):
                        time.sleep(60)
                        continue

                    now = datetime.now()
                    current_time = now.strftime("%H:%M")

                    # News Sync Task - check its own frequency
                    if current_time == config.get("sync_time", "02:00"):
                        if cls._should_sync_today(config):
                            logging.info(f"Running scheduled news sync (frequency: {config.get('sync_frequency', 'daily')})")
                            # Sync from last_sync_date to today (range sync)
                            last_sync = config.get("last_sync_date")
                            today = now.strftime("%Y-%m-%d")
                            if last_sync and last_sync < today:
                                # Sync all days from last_sync_date+1 to today
                                start = (datetime.strptime(last_sync, "%Y-%m-%d") + timedelta(days=1)).strftime("%Y-%m-%d")
                                cls.sync_news_range(start, today)
                            else:
                                # Just sync today
                                cls.sync_news(today)
                        else:
                            logging.debug(f"Skipping news sync - not scheduled for today")
                        time.sleep(61)
                        continue

                    # Graph Regen Task - check its own frequency (separate from news sync)
                    if current_time == config.get("graph_regen_time", "04:00"):
                        if cls._should_regen_graph_today(config):
                            logging.info(f"Running scheduled graph rebuild (frequency: {config.get('graph_regen_frequency', 'weekly')})")
                            current_year = str(now.year)
                            cls.trigger_graph_regen([current_year])
                        else:
                            logging.debug(f"Skipping graph rebuild - not scheduled for today")
                        time.sleep(61)
                        continue

                    time.sleep(30)
                except Exception as e:
                    logging.error(f"Scheduler error: {e}")
                    time.sleep(60)

        t = threading.Thread(target=run, daemon=True)
        t.start()
