import type { AuditLog } from '@/interfaces/km';
import { getAuditLogs, getKmHealth } from '@/services/km-service';
import { useQuery } from '@tanstack/react-query';
import { Card, Empty, List, Tag } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Observability: React.FC = () => {
  const { t } = useTranslation();

  const { data: healthData, isError: healthError } = useQuery({
    queryKey: ['kmHealth'],
    queryFn: async () => {
      try {
        const res = await getKmHealth();
        return res?.data?.data || null;
      } catch {
        return null;
      }
    },
    retry: false,
  });

  const { data: logsData } = useQuery({
    queryKey: ['kmLogs'],
    queryFn: async () => {
      try {
        const res = await getAuditLogs({ page: 1, size: 10 });
        return res?.data?.data || [];
      } catch {
        return [];
      }
    },
    retry: false,
  });

  const logs: AuditLog[] = logsData && logsData.length > 0 ? logsData : [];

  const kmUnavailable = !healthData && healthError;

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto">
      <h1 className="text-2xl font-bold">
        {t('admin.observability', 'Observability')}
      </h1>

      {/* Health status banner */}
      {healthData ? (
        <Card
          size="small"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="flex items-center gap-3">
            <Tag color={healthData.status === 'healthy' ? 'green' : 'orange'}>
              {healthData.status}
            </Tag>
            <span className="text-sm text-text-secondary">
              v{healthData.version}
            </span>
            {Object.entries(healthData.checks ?? {}).map(([name, status]) => (
              <Tag
                key={name}
                color={
                  status === 'ok' || status === 'healthy' ? 'green' : 'red'
                }
              >
                {name}: {status}
              </Tag>
            ))}
          </div>
        </Card>
      ) : (
        <Card
          size="small"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="flex items-center gap-3">
            <Tag color="default">
              {kmUnavailable ? 'KM 服务未连接' : '检查中...'}
            </Tag>
            {kmUnavailable && (
              <span className="text-sm text-text-secondary">
                KM 服务 API (/api/v1/km) 尚未部署，可观测性数据暂不可用
              </span>
            )}
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Metrics — requires KM service */}
        <Card
          title="API Traffic & Latency"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="h-64 w-full flex items-center justify-center">
            <Empty description="KM 服务连接后显示 API 流量和延迟数据" />
          </div>
        </Card>

        {/* Storage Usage — requires KM service */}
        <Card
          title="Storage Usage vs Quota"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="h-64 w-full flex items-center justify-center">
            <Empty description="KM 服务连接后显示存储用量" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Agents — requires KM service */}
        <Card
          title="Top Agent Calls"
          className="bg-bg-card shadow-sm border border-border"
        >
          <Empty description="KM 服务连接后显示 Agent 调用排行" />
        </Card>

        {/* Audit Logs */}
        <Card
          title="Recent System Activity"
          className="bg-bg-card shadow-sm border border-border"
        >
          {logs.length === 0 ? (
            <Empty description="暂无审计日志" />
          ) : (
            <List
              className="h-64 overflow-y-auto pr-2"
              itemLayout="horizontal"
              dataSource={logs}
              renderItem={(item) => (
                <List.Item className="border-b border-border py-3">
                  <List.Item.Meta
                    title={
                      <div className="flex justify-between">
                        <span className="font-medium text-text-primary">
                          {item.action}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {item.created_at}
                        </span>
                      </div>
                    }
                    description={
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs">
                          {item.principal_type}: {item.principal_id}
                        </span>
                        <span className="text-xs text-text-secondary">|</span>
                        <span className="text-xs">
                          {item.resource_type}: {item.resource_id}
                        </span>
                        <Tag
                          color={item.status_code < 400 ? 'green' : 'red'}
                          className="ml-auto text-[10px] leading-[14px]"
                        >
                          {item.status_code}
                        </Tag>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Observability;
