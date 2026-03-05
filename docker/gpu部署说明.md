# GPU部署说明（v2.0.5）

本文用于在新机器上部署 `SGA-KM v2.0.5` 的 GPU 版本，重点规避以下问题：
- 部署成老版本（代码没切到正确 tag）
- Admin 页面还是旧页面（`web/dist` 未重建）
- `GLOBAL_LLM_ENABLED` / 租户 ID 相关异常（容器未加载到最新后端代码）

## 1. 前置条件

1. 机器有 NVIDIA GPU，且宿主机执行 `nvidia-smi` 正常。
2. 已安装 Docker（建议 Docker Desktop / Docker Engine 24+）。
3. Docker 可使用 GPU（必须通过）：

```bash
docker run --rm --gpus all nvidia/cuda:12.4.1-base-ubuntu22.04 nvidia-smi
```

4. 机器可访问 Docker Hub（至少能拉取以下镜像）：
   - `infiniflow/ragflow:v0.24.0`
   - `mysql:8.0.39`
   - `elasticsearch:8.11.3`
   - `valkey/valkey:8`
   - `quay.io/minio/minio:RELEASE.2025-06-13T11-33-47Z`

## 2. 拉代码并切到正确版本（必须）

```bash
git clone https://github.com/sga-jerrylin/SGA-KM.git
cd SGA-KM
git fetch --all --tags --prune
git checkout v2.0.5
git rev-parse --short HEAD
```

确认这一步能输出一个 commit 短哈希即可（表示已经成功切换到代码版本）。

再执行一次：

```bash
git describe --tags --exact-match
```

期望输出：`v2.0.5`。

## 3. 部署前代码自检（避免 ID/配置问题）

确认 `docker/docker-compose.yml` 已包含以下关键项：

```bash
grep -n "tenant_llm_service.py\|workers=1" docker/docker-compose.yml
```

期望至少看到：
- `../api/db/services/tenant_llm_service.py:/ragflow/api/db/services/tenant_llm_service.py`
- `--workers=1`

## 4. 核对 `docker/.env`

至少确认以下配置：

```env
COMPOSE_PROJECT_NAME=km
DEVICE=gpu
AUTO_INSTALL_TORCH=0
RAGFLOW_IMAGE=infiniflow/ragflow:v0.24.0
SVR_WEB_HTTP_PORT=18880
SVR_WEB_HTTPS_PORT=18443
SVR_HTTP_PORT=19380
ADMIN_SVR_HTTP_PORT=19381

# OCR/GPU 稳定性（推荐）
OCR_GPU_MEM_LIMIT_MB=6144
OCR_ARENA_EXTEND_STRATEGY=kNextPowerOfTwo
OCR_GPUMEM_ARENA_SHRINKAGE=1
MAX_CONCURRENT_TASKS=1
MAX_CONCURRENT_CHUNK_BUILDERS=1
```

说明：
- `AUTO_INSTALL_TORCH=0`：避免容器启动时重复装 torch。
- `RAGFLOW_IMAGE` 不要写成 `ragflow-custom:latest`，否则新机器容易出现 `pull access denied`。
- 若机器访问 `huggingface.co` 不稳定，建议在 `.env` 打开：
  - `HF_ENDPOINT=https://hf-mirror.com`

## 5. 前端静态资源重建（避免 Admin 旧页面）

`docker-compose` 使用 `../web/dist:/ragflow/web/dist` 挂载。  
所以新机器部署前必须构建一次 `web/dist`：

```bash
cd web
npm install
npm run build
test -f dist/index.html && echo WEB_DIST_OK
cd ../docker
```

## 6. 启动服务

```bash
cd docker
docker compose pull
docker compose up -d --force-recreate
docker compose ps
```

期望：
- `km-es01-1` healthy
- `km-mysql-1` healthy
- `km-redis-1` healthy
- `km-minio-1` healthy
- `km-ragflow-gpu-1` Up

## 7. 验证

1. 首页：

```bash
curl -I http://127.0.0.1:18880/
```

应返回 `200`。

2. Admin 服务：

```bash
curl http://127.0.0.1:19381/api/v1/admin/ping
```

应返回 `{"code":0,"data":"PONG",...}`。

3. 容器内 GPU 可见性：

```bash
docker exec km-ragflow-gpu-1 nvidia-smi
```

4. 校验 ID 相关修复代码已加载：

```bash
docker exec km-ragflow-gpu-1 sh -lc "python - <<'PY'
from api.db.services.tenant_llm_service import TenantLLMService
print('resolve_config_tenant_id:', hasattr(TenantLLMService, 'resolve_config_tenant_id'))
print('resolve_mineru_model_name:', hasattr(TenantLLMService, 'resolve_mineru_model_name'))
PY"
```

期望两项都是 `True`。

5. 校验 PDF 解析模型是否就绪（关键）：

```bash
docker exec km-ragflow-gpu-1 sh -lc "test -f /ragflow/rag/res/deepdoc/updown_concat_xgb.model && echo MODEL_OK || echo MODEL_MISSING"
```

应返回 `MODEL_OK`。

## 8. 首次登录

- 访问：`http://<服务器IP>:18880/`
- 超级管理员账号使用 `docker/.env` 中：
  - `DEFAULT_SUPERUSER_EMAIL`
  - `DEFAULT_SUPERUSER_PASSWORD`

## 9. 常见问题

1. 启动后发现是老版本
- 原因：没有切到新 tag，或者拉了代码但没 `checkout`。
- 处理：重新执行第 2 节，并确认 `git describe --tags --exact-match` 输出 `v2.0.5`。

2. Admin 页面还是旧页面
- 原因：`web/dist` 没重建，或浏览器缓存旧静态资源。
- 处理：执行第 5 节重建；浏览器强制刷新（Ctrl+F5）。

3. Admin/系统设置出现租户 ID 或 `GLOBAL_LLM_ENABLED` 相关异常
- 原因：容器运行的是旧代码，或 `docker-compose.yml` 缺少 `tenant_llm_service.py` 挂载。
- 处理：执行第 3 节自检后，执行：

```bash
cd docker
docker compose up -d --force-recreate ragflow-gpu
```

4. PDF 解析报错：`updown_concat_xgb.model: No such file or directory`
- 原因：`docker-compose` 使用 `../rag/res:/ragflow/rag/res` 挂载时，会以宿主机目录为准；若宿主机缺少该模型，容器内也会缺失。
- 处理：确保网络可访问 HuggingFace；必要时在 `.env` 设置 `HF_ENDPOINT=https://hf-mirror.com` 后重启。

5. 需要彻底重置（会清空数据）

```bash
docker compose down -v
docker compose up -d --force-recreate
```
