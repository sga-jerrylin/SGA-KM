// KM (Knowledge Memory) React Query hooks
import { useQuery } from '@tanstack/react-query';

import type {
  AuditLog,
  IngestJob,
  IngestJobState,
  KmHealth,
  KmMemory,
  KmMetrics,
  KmResponse,
  MemoryQueryParams,
} from '@/interfaces/km';
import {
  getAuditLogs,
  getIngestStatus,
  getKmHealth,
  getKmMetrics,
  queryMemory,
} from '@/services/km-service';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** States in which an ingest job is still running and needs to be polled. */
const ACTIVE_INGEST_STATES: IngestJobState[] = [
  'queued',
  'downloading',
  'parsing',
  'chunking',
  'embedding',
  'extracting_kg',
  'resolving_entities',
  'upserting_graph',
];

const isActiveState = (state: IngestJobState | undefined): boolean =>
  state !== undefined && ACTIVE_INGEST_STATES.includes(state);

// ---------------------------------------------------------------------------
// useIngestStatus — polls every 3 s while the job is active
// ---------------------------------------------------------------------------

export function useIngestStatus(jobId: string | undefined) {
  const { data, isLoading, error } = useQuery<
    KmResponse<IngestJob> | undefined
  >({
    queryKey: ['km', 'ingest', 'status', jobId],
    queryFn: async () => {
      if (!jobId) return undefined;
      const res = await getIngestStatus(jobId);
      return res?.data;
    },
    enabled: Boolean(jobId),
    // Poll every 3 s while active; stop when terminal state is reached
    refetchInterval: (query) => {
      const job = query.state.data?.data;
      return isActiveState(job?.state) ? 3000 : false;
    },
    staleTime: 0,
    retry: 2,
  });

  return {
    job: data?.data,
    status: data?.status,
    isLoading,
    error,
  };
}

// ---------------------------------------------------------------------------
// useKmHealth — cached for 30 s
// ---------------------------------------------------------------------------

export function useKmHealth() {
  const { data, isLoading, error } = useQuery<KmResponse<KmHealth> | undefined>(
    {
      queryKey: ['km', 'health'],
      queryFn: async () => {
        try {
          const res = await getKmHealth();
          return res?.data;
        } catch {
          return undefined;
        }
      },
      staleTime: 30 * 1000, // cache 30 seconds
      retry: false,
    },
  );

  return {
    health: data?.data,
    status: data?.status,
    isLoading,
    error,
  };
}

// ---------------------------------------------------------------------------
// useKmMetrics — refetches every 10 s
// ---------------------------------------------------------------------------

export function useKmMetrics() {
  const { data, isLoading, error } = useQuery<
    KmResponse<KmMetrics> | undefined
  >({
    queryKey: ['km', 'metrics'],
    queryFn: async () => {
      try {
        const res = await getKmMetrics();
        return res?.data;
      } catch {
        return undefined;
      }
    },
    staleTime: 10 * 1000,
    refetchInterval: false,
    retry: false,
  });

  return {
    metrics: data?.data,
    status: data?.status,
    isLoading,
    error,
  };
}

// ---------------------------------------------------------------------------
// useMemorySearch — on-demand (enabled only when params are provided)
// ---------------------------------------------------------------------------

export function useMemorySearch(params: MemoryQueryParams | null) {
  const { data, isLoading, isFetching, error } = useQuery<
    KmResponse<KmMemory[]> | undefined
  >({
    queryKey: ['km', 'memory', 'search', params],
    queryFn: async () => {
      if (!params) return undefined;
      const res = await queryMemory(params);
      return res?.data;
    },
    enabled: Boolean(params && params.query),
    staleTime: 60 * 1000, // cache results for 1 minute
    retry: 1,
  });

  return {
    memories: data?.data ?? [],
    status: data?.status,
    isLoading,
    isFetching,
    error,
  };
}

// ---------------------------------------------------------------------------
// useAuditLogs — paginated
// ---------------------------------------------------------------------------

export function useAuditLogs(page: number = 1, size: number = 20) {
  const { data, isLoading, error } = useQuery<
    KmResponse<AuditLog[]> | undefined
  >({
    queryKey: ['km', 'audit-logs', page, size],
    queryFn: async () => {
      try {
        const res = await getAuditLogs({ page, size });
        return res?.data;
      } catch {
        return undefined;
      }
    },
    staleTime: 30 * 1000, // cache 30 seconds per page
    placeholderData: (previousData) => previousData, // keep previous page visible while next loads
    retry: false,
  });

  return {
    logs: data?.data ?? [],
    status: data?.status,
    isLoading,
    error,
  };
}
