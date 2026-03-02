#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
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
import time

from api.db.db_models import SystemSetting
from api.db.services.common_service import CommonService
from common import settings


class SystemSettingService(CommonService):
    model = SystemSetting

    _cache = {}
    _cache_at = {}
    _cache_ttl_seconds = 3

    @classmethod
    def _get_cached(cls, key):
        now = time.time()
        cached_at = cls._cache_at.get(key)
        if cached_at is None:
            return None
        if now - cached_at > cls._cache_ttl_seconds:
            return None
        return cls._cache.get(key)

    @classmethod
    def _set_cached(cls, key, value):
        cls._cache[key] = value
        cls._cache_at[key] = time.time()

    @classmethod
    def get_value(cls, key, default=None):
        cached = cls._get_cached(key)
        if cached is not None:
            return cached

        obj = cls.get_or_none(key=key)
        value = obj.value if obj else default
        cls._set_cached(key, value)
        return value

    @classmethod
    def set_value(cls, key, value):
        if cls.filter_update([cls.model.key == key], {"value": value}) == 0:
            cls.save(key=key, value=value)
        cls._set_cached(key, value)
        return value

    @classmethod
    def get_bool(cls, key, default=False):
        value = cls.get_value(key, None)
        if value is None:
            return default
        if isinstance(value, bool):
            return value
        return str(value).lower() in ("1", "true", "yes", "on")

    @classmethod
    def set_bool(cls, key, value: bool):
        return cls.set_value(key, "1" if value else "0")

    @classmethod
    def get_global_llm_enabled(cls):
        default_enabled = getattr(settings, "GLOBAL_LLM_ENABLED", True)
        return cls.get_bool("global_llm_enabled", default_enabled)
