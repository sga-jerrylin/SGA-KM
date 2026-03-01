import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  GitBranch,
  ListTree,
  Plus,
  RefreshCw,
  RotateCcw,
  Send,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import message from '@/components/ui/message';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useIngestStatus } from '@/hooks/use-km';
import type { IngestJob, IngestJobState } from '@/interfaces/km';
import { cn } from '@/lib/utils';
import {
  cancelIngest,
  ingestSubmit,
  listIngestJobs,
  retryIngest,
} from '@/services/km-service';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ACTIVE_STATES: IngestJobState[] = [
  'queued',
  'downloading',
  'parsing',
  'chunking',
  'embedding',
  'extracting_kg',
  'resolving_entities',
  'upserting_graph',
];

/** Ordered pipeline steps shown in the state machine visualization */
const PIPELINE_STEPS: Array<{ key: IngestJobState; label: string }> = [
  { key: 'queued', label: 'Queued' },
  { key: 'downloading', label: 'Download' },
  { key: 'parsing', label: 'Parse' },
  { key: 'chunking', label: 'Chunk' },
  { key: 'embedding', label: 'Embed' },
  { key: 'extracting_kg', label: 'Extract KG' },
  { key: 'resolving_entities', label: 'Resolve' },
  { key: 'upserting_graph', label: 'Upsert' },
  { key: 'completed', label: 'Done' },
];

const STEP_KEYS = PIPELINE_STEPS.map((s) => s.key);

const STATE_BADGE_CLASS: Record<IngestJobState, string> = {
  queued: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  downloading: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  parsing: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  chunking: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  embedding: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  extracting_kg:
    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  resolving_entities:
    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  upserting_graph:
    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  completed:
    'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  failed: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  cancelled:
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  partial_completed:
    'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
};

const STATE_LABEL: Record<IngestJobState, string> = {
  queued: 'Queued',
  downloading: 'Downloading',
  parsing: 'Parsing',
  chunking: 'Chunking',
  embedding: 'Embedding',
  extracting_kg: 'Extracting KG',
  resolving_entities: 'Resolving Entities',
  upserting_graph: 'Upserting Graph',
  completed: 'Completed',
  failed: 'Failed',
  cancelled: 'Cancelled',
  partial_completed: 'Partial',
};

type FilterState = 'all' | 'running' | 'completed' | 'failed' | 'queued';

const isActive = (state: IngestJobState) => ACTIVE_STATES.includes(state);

// ---------------------------------------------------------------------------
// State machine visualization
// ---------------------------------------------------------------------------

interface StateMachineProps {
  currentState: IngestJobState;
}

const StateMachine = ({ currentState }: StateMachineProps) => {
  const isFailed = currentState === 'failed' || currentState === 'cancelled';
  const currentIdx = STEP_KEYS.indexOf(currentState);

  return (
    <div className="flex items-start gap-0 overflow-x-auto pb-1">
      {PIPELINE_STEPS.map(({ key, label }, idx) => {
        const isPast = !isFailed && idx < currentIdx;
        const isCurrent = !isFailed && key === currentState;
        const isFinalFailed = isFailed && idx === Math.max(currentIdx - 1, 0);
        const isLast = idx === PIPELINE_STEPS.length - 1;

        return (
          <div key={key} className="flex items-center">
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <div
                className={cn(
                  'size-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-colors shrink-0',
                  {
                    'bg-primary border-primary text-primary-foreground':
                      isCurrent,
                    'bg-green-500 border-green-500 text-white': isPast,
                    'bg-red-500 border-red-500 text-white': isFinalFailed,
                    'bg-muted border-border text-muted-foreground':
                      !isCurrent && !isPast && !isFinalFailed,
                  },
                )}
              >
                {isFinalFailed ? '!' : idx + 1}
              </div>
              <span
                className={cn(
                  'text-[10px] text-center leading-tight whitespace-nowrap',
                  {
                    'text-primary font-medium': isCurrent,
                    'text-green-600 dark:text-green-400': isPast,
                    'text-red-600 dark:text-red-400': isFinalFailed,
                    'text-muted-foreground':
                      !isCurrent && !isPast && !isFinalFailed,
                  },
                )}
              >
                {label}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn('h-0.5 w-4 shrink-0 mt-[-10px]', {
                  'bg-green-500': isPast,
                  'bg-primary': isCurrent,
                  'bg-border': !isPast && !isCurrent,
                })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------------------------
// State badge helper
// ---------------------------------------------------------------------------

function StateBadge({ state }: { state: IngestJobState }) {
  return (
    <span
      className={cn(
        'shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
        STATE_BADGE_CLASS[state],
      )}
    >
      {STATE_LABEL[state]}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Metadata item helper
// ---------------------------------------------------------------------------

function MetaItem({
  label,
  value,
  mono = false,
  colSpan = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
  colSpan?: boolean;
}) {
  return (
    <div className={colSpan ? 'col-span-2 sm:col-span-3' : undefined}>
      <span className="text-muted-foreground text-xs">{label}: </span>
      <span className={cn('text-sm', mono && 'font-mono text-xs break-all')}>
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Job detail panel
// ---------------------------------------------------------------------------

interface JobDetailPanelProps {
  job: IngestJob;
  onRetry: (jobId: string) => void;
  onCancel: (jobId: string) => void;
  isRetrying: boolean;
  isCancelling: boolean;
}

const JobDetailPanel = ({
  job,
  onRetry,
  onCancel,
  isRetrying,
  isCancelling,
}: JobDetailPanelProps) => {
  const { t } = useTranslation();

  // Poll the live state via the shared hook while this panel is open.
  const { job: liveJob } = useIngestStatus(job.job_id);
  const d = liveJob ?? job;

  const isFailed = d.state === 'failed';
  const isRunning = isActive(d.state);

  return (
    <div className="mt-4 pt-4 border-t space-y-4">
      {/* State machine */}
      <div>
        <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
          {t('admin.km.pipeline', 'Pipeline Progress')}
        </p>
        <StateMachine currentState={d.state} />
      </div>

      {/* Error banner */}
      {isFailed && d.error_msg && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 dark:bg-red-950 p-3 text-sm text-red-700 dark:text-red-300">
          <AlertCircle className="size-4 mt-0.5 shrink-0" />
          <p className="font-medium">
            {d.error_code ? `[${d.error_code}] ${d.error_msg}` : d.error_msg}
          </p>
        </div>
      )}

      {/* Metadata grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
        <MetaItem label="Job ID" value={d.job_id} mono colSpan />
        <MetaItem label={t('admin.km.kbId', 'KB ID')} value={d.kb_id} mono />
        <MetaItem
          label={t('admin.km.sourceType', 'Source Type')}
          value={d.source_type}
        />
        <MetaItem
          label={t('admin.km.retryCount', 'Retries')}
          value={String(d.retry_count)}
        />
        <MetaItem
          label={t('admin.km.chunkCount', 'Chunks')}
          value={d.chunk_count.toLocaleString()}
        />
        <MetaItem
          label={t('admin.km.entityCount', 'Entities')}
          value={d.entity_count.toLocaleString()}
        />
        <MetaItem
          label={t('admin.km.relationCount', 'Relations')}
          value={d.relation_count.toLocaleString()}
        />
        {d.eta_seconds != null && (
          <MetaItem label="ETA" value={`${d.eta_seconds}s`} />
        )}
        {d.started_at && (
          <MetaItem
            label={t('admin.km.startedAt', 'Started')}
            value={new Date(d.started_at).toLocaleString()}
          />
        )}
        {d.completed_at && (
          <MetaItem
            label={t('admin.km.completedAt', 'Completed')}
            value={new Date(d.completed_at).toLocaleString()}
          />
        )}
        {d.source_url && (
          <MetaItem
            label={t('admin.km.sourceUrl', 'Source URL')}
            value={d.source_url}
            colSpan
          />
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        {isFailed && d.retryable && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onRetry(d.job_id)}
            disabled={isRetrying}
          >
            <RotateCcw className="size-3.5 mr-1.5" />
            {isRetrying
              ? t('admin.km.retrying', 'Retrying…')
              : t('admin.km.retry', 'Retry')}
          </Button>
        )}
        {isRunning && (
          <Button
            size="sm"
            variant="outline"
            className="text-destructive hover:text-destructive"
            onClick={() => onCancel(d.job_id)}
            disabled={isCancelling}
          >
            <X className="size-3.5 mr-1.5" />
            {isCancelling
              ? t('admin.km.cancelling', 'Cancelling…')
              : t('admin.km.cancel', 'Cancel Job')}
          </Button>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Job card / row
// ---------------------------------------------------------------------------

interface JobCardProps {
  job: IngestJob;
  isExpanded: boolean;
  onToggle: () => void;
  onRetry: (jobId: string) => void;
  onCancel: (jobId: string) => void;
  isRetrying: boolean;
  isCancelling: boolean;
}

const JobCard = ({
  job,
  isExpanded,
  onToggle,
  onRetry,
  onCancel,
  isRetrying,
  isCancelling,
}: JobCardProps) => {
  const sourceName =
    job.source_filename ??
    (job.source_url
      ? job.source_url.split('/').pop() ?? job.source_url
      : null) ??
    job.source_type;

  const displayName =
    sourceName.length > 52 ? `${sourceName.slice(0, 49)}…` : sourceName;

  const shortId = job.job_id.slice(0, 8);

  return (
    <div
      className={cn(
        'rounded-lg border bg-card transition-shadow duration-200',
        isExpanded && 'shadow-md ring-1 ring-primary/20',
      )}
    >
      <button
        type="button"
        className="w-full text-left p-4 flex items-center gap-3"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className="flex-1 min-w-0 space-y-1.5">
          {/* Name + state badge + short ID */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium truncate" title={sourceName}>
              {displayName}
            </span>
            <StateBadge state={job.state} />
            <span className="text-xs text-muted-foreground font-mono">
              #{shortId}
            </span>
          </div>

          {/* Progress bar */}
          <Progress value={job.progress_percent} className="h-1.5" />

          {/* Footer meta */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1">
              <GitBranch className="size-3" />
              {job.source_type}
            </span>
            <span>{job.progress_percent.toFixed(0)}%</span>
            {job.retry_count > 0 && (
              <span className="text-orange-600 dark:text-orange-400">
                retry ×{job.retry_count}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {new Date(job.created_at).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="shrink-0 text-muted-foreground">
          {isExpanded ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4">
          <JobDetailPanel
            job={job}
            onRetry={onRetry}
            onCancel={onCancel}
            isRetrying={isRetrying}
            isCancelling={isCancelling}
          />
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Job submission form
// ---------------------------------------------------------------------------

interface JobSubmitFormProps {
  onSuccess: (jobId: string) => void;
}

const JobSubmitForm = ({ onSuccess }: JobSubmitFormProps) => {
  const { t } = useTranslation();
  const [sourceUrl, setSourceUrl] = useState('');
  const [kbId, setKbId] = useState('');

  const submitMutation = useMutation({
    mutationFn: () =>
      ingestSubmit({
        source_type: 'url',
        source_url: sourceUrl.trim(),
        kb_id: kbId.trim(),
      }),
    onSuccess: (res) => {
      const jobId = res?.data?.data?.job_id ?? '';
      message.success(
        t('admin.km.submitSuccess', 'Job submitted: {{id}}', {
          id: jobId.slice(0, 8) || '—',
        }),
      );
      setSourceUrl('');
      setKbId('');
      if (jobId) onSuccess(jobId);
    },
    onError: (err: unknown) => {
      const msg =
        err instanceof Error
          ? err.message
          : t('admin.km.submitError', 'Submit failed');
      message.error(msg);
    },
  });

  const canSubmit =
    sourceUrl.trim().length > 0 &&
    kbId.trim().length > 0 &&
    !submitMutation.isPending;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Send className="size-4" />
          {t('admin.km.submitTitle', 'Submit Ingest Job')}
        </CardTitle>
        <CardDescription>
          {t(
            'admin.km.submitDescription',
            'Ingest a URL into a knowledge base — the job will appear in the list below',
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-1">
            <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {t('admin.km.sourceUrlLabel', 'Source URL')}
            </label>
            <Input
              placeholder="https://example.com/document.pdf"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
            />
          </div>
          <div className="sm:w-56 space-y-1">
            <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {t('admin.km.kbIdLabel', 'Knowledge Base ID')}
            </label>
            <Input
              placeholder="kb_xxxxxxxxxxxx"
              value={kbId}
              onChange={(e) => setKbId(e.target.value)}
            />
          </div>
          <Button
            className="shrink-0"
            onClick={() => submitMutation.mutate()}
            disabled={!canSubmit}
          >
            <Plus className="size-4 mr-1.5" />
            {submitMutation.isPending
              ? t('admin.km.submitting', 'Submitting…')
              : t('admin.km.submit', 'Submit')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------------------------------------------------------------------------
// Track-by-ID widget
// ---------------------------------------------------------------------------

const TrackByIdWidget = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const trimmed = value.trim();
  const enabled = trimmed.length > 10;
  const { job, isLoading } = useIngestStatus(enabled ? trimmed : undefined);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {t('admin.km.trackById', 'Look up Job by ID')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="job_xxxxxxxxxxxx"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="font-mono text-sm"
        />
        {enabled && (
          <div className="text-sm">
            {isLoading ? (
              <span className="text-muted-foreground">
                {t('admin.km.lookingUp', 'Looking up…')}
              </span>
            ) : job ? (
              <div className="flex items-center gap-2 flex-wrap">
                <StateBadge state={job.state} />
                <span className="text-muted-foreground">
                  {job.progress_percent.toFixed(0)}%
                </span>
                {job.source_filename && (
                  <span className="text-muted-foreground text-xs truncate max-w-[200px]">
                    {job.source_filename}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-destructive text-sm">
                {t('admin.km.jobNotFound', 'Job not found')}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const PipelineMonitor = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [filterState, setFilterState] = useState<FilterState>('all');
  const [searchText, setSearchText] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [retryingId, setRetryingId] = useState<string | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  // ------------------------------------------------------------------
  // Job list — polls every 3 s while any job is active
  // ------------------------------------------------------------------

  const {
    data: jobs = [],
    isLoading,
    refetch,
  } = useQuery<IngestJob[]>({
    queryKey: ['km', 'ingest', 'list', filterState, searchText],
    queryFn: async () => {
      const res = await listIngestJobs({
        state: filterState !== 'all' ? filterState : undefined,
        size: 100,
      });
      return res?.data?.data?.jobs ?? [];
    },
    refetchInterval: (query) => {
      const list = query.state.data as IngestJob[] | undefined;
      return list?.some((j) => isActive(j.state)) ? 3000 : false;
    },
    staleTime: 0,
    retry: 1,
  });

  // ------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------

  const retryMutation = useMutation({
    mutationFn: (jobId: string) => retryIngest(jobId),
    onMutate: (jobId) => setRetryingId(jobId),
    onSettled: () => setRetryingId(null),
    onSuccess: () => {
      message.success(t('admin.km.retrySubmitted', 'Retry request submitted'));
      void queryClient.invalidateQueries({
        queryKey: ['km', 'ingest', 'list'],
      });
    },
    onError: () => {
      message.error(t('admin.km.retryFailed', 'Retry request failed'));
    },
  });

  const cancelMutation = useMutation({
    mutationFn: (jobId: string) => cancelIngest(jobId),
    onMutate: (jobId) => setCancellingId(jobId),
    onSettled: () => setCancellingId(null),
    onSuccess: () => {
      message.success(
        t('admin.km.cancelSubmitted', 'Cancel request submitted'),
      );
      void queryClient.invalidateQueries({
        queryKey: ['km', 'ingest', 'list'],
      });
    },
    onError: () => {
      message.error(t('admin.km.cancelFailed', 'Cancel request failed'));
    },
  });

  const handleToggleExpand = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  const handleJobSubmitted = (jobId: string) => {
    setExpandedJobId(jobId);
    void queryClient.invalidateQueries({ queryKey: ['km', 'ingest', 'list'] });
  };

  // ------------------------------------------------------------------
  // Client-side filtering (supplements server-side params)
  // ------------------------------------------------------------------

  const filteredJobs = jobs.filter((job) => {
    const matchesState =
      filterState === 'all' ||
      (filterState === 'running' && isActive(job.state)) ||
      (filterState === 'queued' && job.state === 'queued') ||
      (filterState === 'completed' &&
        (job.state === 'completed' || job.state === 'partial_completed')) ||
      (filterState === 'failed' && job.state === 'failed');

    const name =
      job.source_filename ??
      (job.source_url
        ? job.source_url.split('/').pop() ?? job.source_url
        : null) ??
      job.source_type;
    const matchesSearch =
      !searchText ||
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      job.job_id.toLowerCase().includes(searchText.toLowerCase());

    return matchesState && matchesSearch;
  });

  // Active jobs always come first.
  const activeJobs = filteredJobs.filter((j) => isActive(j.state));
  const terminalJobs = filteredJobs.filter((j) => !isActive(j.state));
  const orderedJobs = [...activeJobs, ...terminalJobs];

  return (
    <div className="space-y-6 h-full overflow-auto p-1">
      {/* Page header */}
      <div className="flex items-center gap-3">
        <ListTree className="size-6 text-muted-foreground" />
        <div>
          <h1 className="text-xl font-semibold">
            {t('admin.km.pipelineTitle', 'Pipeline Monitor')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t(
              'admin.km.pipelineDescription',
              'Real-time view of ingest jobs — active jobs auto-refresh every 3 s',
            )}
          </p>
        </div>
      </div>

      {/* State machine legend */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {t('admin.km.stateMachine', 'Job State Machine')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="overflow-x-auto">
            <StateMachine currentState="queued" />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            queued → downloading → parsing → chunking → embedding →
            extracting_kg → resolving_entities → upserting_graph → completed
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {(
              [
                'queued',
                'parsing',
                'extracting_kg',
                'completed',
                'failed',
                'cancelled',
              ] as IngestJobState[]
            ).map((s) => (
              <StateBadge key={s} state={s} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job submission form */}
      <JobSubmitForm onSuccess={handleJobSubmitted} />

      {/* Single-job lookup */}
      <TrackByIdWidget />

      {/* Active jobs banner */}
      {activeJobs.length > 0 && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 flex items-center gap-3">
          <div className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
          <p className="text-sm font-medium">
            {t('admin.km.activeJobsBanner', '{{count}} active job(s) running', {
              count: activeJobs.length,
            })}
            <span className="ml-2 text-xs text-muted-foreground font-normal">
              {t('admin.km.autoRefresh', '— auto-refreshing every 3 s')}
            </span>
          </p>
        </div>
      )}

      {/* Filter bar */}
      <Card>
        <CardContent className="pt-4 pb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Select
              value={filterState}
              onValueChange={(v) => setFilterState(v as FilterState)}
            >
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {t('admin.km.filterAll', 'All States')}
                </SelectItem>
                <SelectItem value="queued">
                  {t('admin.km.filterQueued', 'Queued')}
                </SelectItem>
                <SelectItem value="running">
                  {t('admin.km.filterRunning', 'Running')}
                </SelectItem>
                <SelectItem value="completed">
                  {t('admin.km.filterCompleted', 'Completed')}
                </SelectItem>
                <SelectItem value="failed">
                  {t('admin.km.filterFailed', 'Failed')}
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder={t(
                'admin.km.searchPlaceholder',
                'Search by filename or Job ID…',
              )}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1"
            />

            <Button
              variant="outline"
              size="icon"
              onClick={() => void refetch()}
              title={t('admin.km.refresh', 'Refresh')}
            >
              <RefreshCw className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job list */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ListTree className="size-4" />
            {t('admin.km.jobListTitle', 'Jobs')}
            {orderedJobs.length > 0 && (
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                ({orderedJobs.length})
              </span>
            )}
          </CardTitle>
          <CardDescription>
            {t(
              'admin.km.jobListDescription',
              'Click a job card to expand full details including errors, counts, and timing',
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
            </div>
          ) : orderedJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ListTree className="size-10 text-muted-foreground/40 mb-3" />
              <p className="text-sm text-muted-foreground">
                {jobs.length === 0
                  ? t(
                      'admin.km.noJobsYet',
                      'No ingest jobs found. Submit a job above or verify the KM service is reachable.',
                    )
                  : t(
                      'admin.km.noJobsMatch',
                      'No jobs match the current filter',
                    )}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {orderedJobs.map((job) => (
                <JobCard
                  key={job.job_id}
                  job={job}
                  isExpanded={expandedJobId === job.job_id}
                  onToggle={() => handleToggleExpand(job.job_id)}
                  onRetry={(id) => retryMutation.mutate(id)}
                  onCancel={(id) => cancelMutation.mutate(id)}
                  isRetrying={retryingId === job.job_id}
                  isCancelling={cancellingId === job.job_id}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PipelineMonitor;
