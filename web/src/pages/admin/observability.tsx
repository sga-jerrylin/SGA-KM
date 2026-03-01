import type { AuditLog } from '@/interfaces/km';
import { getAuditLogs, getKmHealth } from '@/services/km-service';
import { useQuery } from '@tanstack/react-query';
import { Card, List, Progress, Table, Tag } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Observability: React.FC = () => {
  const { t } = useTranslation();

  const { data: healthData } = useQuery({
    queryKey: ['kmHealth'],
    queryFn: async () => {
      try {
        const res = await getKmHealth();
        return res?.data?.data || null;
      } catch {
        return null;
      }
    },
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
  });

  const apiMetrics = [
    { time: '10:00', volume: 120, latency: 150 },
    { time: '10:05', volume: 150, latency: 180 },
    { time: '10:10', volume: 110, latency: 140 },
    { time: '10:15', volume: 200, latency: 220 },
    { time: '10:20', volume: 300, latency: 350 },
    { time: '10:25', volume: 250, latency: 280 },
    { time: '10:30', volume: 180, latency: 190 },
  ];

  const agentCalls = [
    {
      id: '1',
      agent: 'Customer Support Bot',
      calls: 14500,
      error_rate: '0.5%',
    },
    {
      id: '2',
      agent: 'Internal HR Assistant',
      calls: 8200,
      error_rate: '1.2%',
    },
    { id: '3', agent: 'Sales Analyzer', calls: 4300, error_rate: '0.1%' },
    { id: '4', agent: 'Code Reviewer', calls: 2100, error_rate: '3.4%' },
    { id: '5', agent: 'Data Extractor', calls: 1800, error_rate: '0.8%' },
  ];

  const agentColumns = [
    { title: 'Agent Name', dataIndex: 'agent', key: 'agent' },
    { title: 'Total Calls', dataIndex: 'calls', key: 'calls' },
    { title: 'Error Rate', dataIndex: 'error_rate', key: 'error_rate' },
  ];

  const storageQuota = {
    documents: { used: 45, total: 100, unit: 'GB' },
    vector: { used: 12, total: 50, unit: 'GB' },
    graph: { used: 3.5, total: 20, unit: 'GB' },
  };

  // Use real logs if available, otherwise show placeholder data
  const logs: AuditLog[] =
    logsData && logsData.length > 0
      ? logsData
      : [
          {
            id: '1',
            principal_type: 'user',
            principal_id: 'admin',
            action: 'Deleted memory',
            resource_type: 'memory',
            resource_id: 'mem-123',
            status_code: 200,
            latency_ms: 45,
            created_at: '2026-03-01 10:35:12',
          },
          {
            id: '2',
            principal_type: 'system',
            principal_id: 'system',
            action: 'Archived old memories',
            resource_type: 'memory',
            resource_id: 'batch-45',
            status_code: 200,
            latency_ms: 120,
            created_at: '2026-03-01 10:30:05',
          },
          {
            id: '3',
            principal_type: 'agent',
            principal_id: 'agent:sales',
            action: 'Failed to extract kg',
            resource_type: 'job',
            resource_id: 'job-999',
            status_code: 500,
            latency_ms: 3200,
            created_at: '2026-03-01 10:15:40',
          },
          {
            id: '4',
            principal_type: 'user',
            principal_id: 'admin',
            action: 'Updated ontology',
            resource_type: 'ontology',
            resource_id: 'kb-abc',
            status_code: 200,
            latency_ms: 80,
            created_at: '2026-03-01 09:55:00',
          },
        ];

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto">
      <h1 className="text-2xl font-bold">
        {t('admin.observability', 'Observability')}
      </h1>

      {/* Health status banner */}
      {healthData && (
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
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Metrics Chart */}
        <Card
          title="API Traffic & Latency"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={apiMetrics}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="time"
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                  }}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="volume"
                  name="Volume (req/min)"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="latency"
                  name="Latency (ms)"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Storage Usage */}
        <Card
          title="Storage Usage vs Quota"
          className="bg-bg-card shadow-sm border border-border"
        >
          <div className="flex flex-col gap-6 h-64 justify-center px-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Document Storage (MinIO)</span>
                <span>
                  {storageQuota.documents.used} / {storageQuota.documents.total}{' '}
                  {storageQuota.documents.unit}
                </span>
              </div>
              <Progress
                percent={Math.round(
                  (storageQuota.documents.used / storageQuota.documents.total) *
                    100,
                )}
                status="active"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Vector Index (Infinity/ES)</span>
                <span>
                  {storageQuota.vector.used} / {storageQuota.vector.total}{' '}
                  {storageQuota.vector.unit}
                </span>
              </div>
              <Progress
                percent={Math.round(
                  (storageQuota.vector.used / storageQuota.vector.total) * 100,
                )}
                status="active"
                strokeColor="#8b5cf6"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Knowledge Graph (NebulaGraph)</span>
                <span>
                  {storageQuota.graph.used} / {storageQuota.graph.total}{' '}
                  {storageQuota.graph.unit}
                </span>
              </div>
              <Progress
                percent={Math.round(
                  (storageQuota.graph.used / storageQuota.graph.total) * 100,
                )}
                status="active"
                strokeColor="#f59e0b"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Agents */}
        <Card
          title="Top Agent Calls"
          className="bg-bg-card shadow-sm border border-border"
        >
          <Table
            dataSource={agentCalls}
            columns={agentColumns}
            rowKey="id"
            pagination={false}
            size="small"
          />
        </Card>

        {/* Audit Logs */}
        <Card
          title="Recent System Activity"
          className="bg-bg-card shadow-sm border border-border"
        >
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
        </Card>
      </div>
    </div>
  );
};

export default Observability;
