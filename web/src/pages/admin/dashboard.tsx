import { useTranslation } from 'react-i18next';

import {
  BookOpen,
  Brain,
  CheckCircle2,
  FileCheck,
  LayoutDashboard,
  Loader2,
  XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuditLogs, useKmHealth, useKmMetrics } from '@/hooks/use-km';
import type { AuditLog } from '@/interfaces/km';

// ---------------------------------------------------------------------------
// Summary card
// ---------------------------------------------------------------------------

function SummaryCard({
  label,
  value,
  icon,
  isLoading,
  spin,
}: {
  label: string;
  value: number | undefined;
  icon: React.ReactNode;
  isLoading: boolean;
  spin?: boolean;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{label}</p>
          <div
            className={`text-muted-foreground ${spin && (value ?? 0) > 0 ? 'animate-spin' : ''}`}
          >
            {icon}
          </div>
        </div>
        {isLoading ? (
          <div className="mt-3 h-8 w-20 animate-pulse rounded bg-muted" />
        ) : (
          <p className="mt-2 text-3xl font-bold tabular-nums">
            {value?.toLocaleString() ?? '—'}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Health check row
// ---------------------------------------------------------------------------

function HealthCheckRow({ name, status }: { name: string; status: string }) {
  const isOk = status === 'ok' || status === 'healthy' || status === 'up';
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <span className="text-sm font-medium capitalize">{name}</span>
      <div className="flex items-center gap-1.5">
        {isOk ? (
          <CheckCircle2 className="size-4 text-green-500" />
        ) : (
          <XCircle className="size-4 text-red-500" />
        )}
        <span
          className={`text-xs font-medium ${isOk ? 'text-green-600' : 'text-red-600'}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Status code badge
// ---------------------------------------------------------------------------

function StatusBadge({ code }: { code: number }) {
  const colorClass =
    code < 300
      ? 'bg-green-100 text-green-700'
      : code < 500
        ? 'bg-yellow-100 text-yellow-700'
        : 'bg-red-100 text-red-700';

  return (
    <span className={`px-1.5 py-0.5 rounded text-xs font-mono ${colorClass}`}>
      {code}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Audit log row
// ---------------------------------------------------------------------------

function AuditLogRow({ log }: { log: AuditLog }) {
  const createdAt = new Date(log.created_at);
  const timeStr = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const dateStr = createdAt.toLocaleDateString();

  return (
    <tr className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
      <td className="py-2 px-3 text-xs text-muted-foreground whitespace-nowrap">
        <div>{dateStr}</div>
        <div className="font-mono">{timeStr}</div>
      </td>
      <td className="py-2 px-3 text-sm">
        <div className="font-medium truncate max-w-[120px]">
          {log.principal_type}
        </div>
        <div className="text-xs text-muted-foreground truncate max-w-[120px]">
          {log.principal_id}
        </div>
      </td>
      <td className="py-2 px-3">
        <span className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded text-xs">
          {log.action}
        </span>
      </td>
      <td className="py-2 px-3 text-sm text-muted-foreground">
        {log.resource_type && (
          <span>
            {log.resource_type}
            {log.resource_id ? ` / ${log.resource_id}` : ''}
          </span>
        )}
      </td>
      <td className="py-2 px-3">
        <StatusBadge code={log.status_code} />
      </td>
      <td className="py-2 px-3 text-xs text-muted-foreground text-right tabular-nums">
        {log.latency_ms}ms
      </td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const AdminDashboard = () => {
  const { t } = useTranslation();

  const { health, isLoading: healthLoading } = useKmHealth();
  const { metrics, isLoading: metricsLoading } = useKmMetrics();
  const { logs, isLoading: logsLoading } = useAuditLogs(1, 5);

  return (
    <div className="space-y-6 h-full overflow-auto p-1">
      {/* Page header */}
      <div className="flex items-center gap-3">
        <LayoutDashboard className="size-6 text-muted-foreground" />
        <div>
          <h1 className="text-xl font-semibold">
            {t('admin.dashboard.title', 'Dashboard')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t(
              'admin.dashboard.description',
              'Overview of your Knowledge Memory system',
            )}
          </p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          label={t('admin.dashboard.totalIngestJobs', 'Total Ingest Jobs')}
          value={metrics?.total_ingest_jobs}
          icon={<BookOpen className="size-5" />}
          isLoading={metricsLoading}
        />
        <SummaryCard
          label={t('admin.dashboard.activeIngestJobs', 'Active Ingest Jobs')}
          value={metrics?.active_jobs}
          icon={<Loader2 className="size-5" />}
          isLoading={metricsLoading}
          spin
        />
        <SummaryCard
          label={t('admin.dashboard.totalMemories', 'Total Memories')}
          value={metrics?.total_memories}
          icon={<Brain className="size-5" />}
          isLoading={metricsLoading}
        />
        <SummaryCard
          label={t('admin.dashboard.provenanceRecords', 'Provenance Records')}
          value={metrics?.total_provenance_records}
          icon={<FileCheck className="size-5" />}
          isLoading={metricsLoading}
        />
      </div>

      {/* System health */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              {t('admin.dashboard.systemHealth', 'System Health')}
            </CardTitle>
            {healthLoading ? (
              <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />
            ) : health ? (
              <Badge
                variant="outline"
                className={
                  health.status === 'healthy'
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-yellow-200 bg-yellow-50 text-yellow-700'
                }
              >
                <span className="flex items-center gap-1">
                  {health.status === 'healthy' ? (
                    <CheckCircle2 className="size-3" />
                  ) : (
                    <XCircle className="size-3" />
                  )}
                  {health.status}
                </span>
              </Badge>
            ) : null}
          </div>
          <CardDescription>
            {t(
              'admin.dashboard.systemHealthDescription',
              'Status of dependent services and components',
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {healthLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 animate-pulse rounded bg-muted" />
              ))}
            </div>
          ) : health?.checks && Object.keys(health.checks).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {Object.entries(health.checks).map(([name, status]) => (
                <HealthCheckRow key={name} name={name} status={status} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground py-2">
              {t(
                'admin.dashboard.noHealthChecks',
                'No health checks available',
              )}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Recent activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {t('admin.dashboard.recentActivity', 'Recent Activity')}
          </CardTitle>
          <CardDescription>
            {t(
              'admin.dashboard.recentActivityDescription',
              'Latest 5 audit log entries',
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {logsLoading ? (
            <div className="p-6 space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 animate-pulse rounded bg-muted" />
              ))}
            </div>
          ) : logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileCheck className="size-10 text-muted-foreground/40 mb-3" />
              <p className="text-sm text-muted-foreground">
                {t('admin.dashboard.noActivity', 'No recent activity')}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                      {t('admin.dashboard.time', 'Time')}
                    </th>
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t('admin.dashboard.principal', 'Principal')}
                    </th>
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t('admin.dashboard.action', 'Action')}
                    </th>
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t('admin.dashboard.resource', 'Resource')}
                    </th>
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t('admin.dashboard.status', 'Status')}
                    </th>
                    <th className="py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide text-right">
                      {t('admin.dashboard.latency', 'Latency')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => (
                    <AuditLogRow key={log.id} log={log} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
