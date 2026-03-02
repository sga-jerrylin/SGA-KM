# GPU部署说明（v2.0.2）

本文用于在新机器上部署 `SGA-KM v2.0.2` 的 GPU 版本。

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

## 2. 拉代码并切版本

```bash
git clone https://github.com/sga-jerrylin/SGA-KM.git
cd SGA-KM
git checkout v2.0.2
```

## 3. 核对 `docker/.env`

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
```

说明：
- `AUTO_INSTALL_TORCH=0`：避免容器启动时重复装 torch。
- `RAGFLOW_IMAGE` 不要写成 `ragflow-custom:latest`，否则新机器容易出现 `pull access denied`。

## 4. 启动服务

```bash
cd docker
docker compose pull
docker compose up -d --force-recreate
```

查看状态：

```bash
docker compose ps
```

期望：
- `km-es01-1` healthy
- `km-mysql-1` healthy
- `km-redis-1` healthy
- `km-minio-1` healthy
- `km-ragflow-gpu-1` Up

## 5. 验证

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

## 6. 首次登录

- 访问：`http://<服务器IP>:18880/`
- 超级管理员账号使用 `docker/.env` 中：
  - `DEFAULT_SUPERUSER_EMAIL`
  - `DEFAULT_SUPERUSER_PASSWORD`

## 7. 常见问题

1. `pull access denied for ragflow-custom`
- 原因：`.env` 里用了 `ragflow-custom:latest`。
- 处理：改回 `RAGFLOW_IMAGE=infiniflow/ragflow:v0.24.0` 后重新 `pull/up`。

2. 页面 `403` 或静态资源不对
- 检查 `docker-compose.yml` 是否包含：
  - `../web/dist:/ragflow/web/dist`

3. Admin 系统设置报错 `GLOBAL_LLM_ENABLED`
- 请确认代码版本是 `v2.0.2`（该兼容已在此版本修复）。

4. 需要彻底重置（会清空数据）

```bash
docker compose down -v
docker compose up -d --force-recreate
```
