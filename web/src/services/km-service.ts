// KM (Knowledge Memory) API service layer
// Uses a dedicated axios instance with API key auth (Authorization: Bearer header),
// separate from the standard user-session auth used by the main RAGFlow API.
import axios from 'axios';

import message from '@/components/ui/message';
import type {
  AuditLog,
  FeedbackParams,
  GraphData,
  GraphQueryParams,
  IngestJob,
  IngestSubmitParams,
  KmHealth,
  KmMemory,
  KmMetrics,
  KmResponse,
  KnowledgeSearchParams,
  KnowledgeSearchResult,
  MemoryQueryParams,
  MemoryUpsertParams,
  OntologyRecommendation,
  ProvenanceRecord,
  WebhookConfig,
} from '@/interfaces/km';
import i18n from '@/locales/config';
import { kmRoutes } from '@/utils/km-api';
import { ResultCode, RetcodeMessage } from '@/utils/request';

// ---------------------------------------------------------------------------
// Storage key for the KM API key (set during onboarding / settings)
// ---------------------------------------------------------------------------

const KM_API_KEY_STORAGE_KEY = 'km_api_key';

export const getKmApiKey = (): string =>
  localStorage.getItem(KM_API_KEY_STORAGE_KEY) || '';

export const setKmApiKey = (apiKey: string): void => {
  localStorage.setItem(KM_API_KEY_STORAGE_KEY, apiKey);
};

// ---------------------------------------------------------------------------
// Dedicated axios instance for KM API key auth
// ---------------------------------------------------------------------------

const kmRequest = axios.create({
  timeout: 300000,
});

kmRequest.interceptors.request.use((config) => {
  const apiKey = getKmApiKey();
  if (apiKey) {
    config.headers.set('Authorization', `Bearer ${apiKey}`);
  }
  return config;
});

kmRequest.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      return response;
    }

    const { data } = response ?? {};

    // KM API returns { status: 'error', ... } on application-level errors
    if (data?.status === 'error') {
      message.error(
        `${i18n.t('message.hint')}: ${data?.message ?? 'Unknown KM error'}`,
      );
    }

    return response;
  },
  (error) => {
    const { response } = error;
    const { data } = response ?? {};

    if (error.message === 'Failed to fetch' || error.code === 'ERR_NETWORK') {
      message.error({
        description: i18n.t('message.networkAnomalyDescription'),
        message: i18n.t('message.networkAnomaly'),
      });
    } else if (response?.status === 404) {
      // KM service endpoints not available yet — silently ignore
      throw error;
    } else if (response?.status === 401) {
      message.error({
        message: i18n.t('message.401'),
        description: data?.message || i18n.t('message.401'),
        duration: 3,
      });
    } else if (response?.status) {
      message.error({
        message: `${i18n.t('message.requestError')} ${response.status}: ${response.config?.url}`,
        description:
          RetcodeMessage[response.status as ResultCode] || response.statusText,
      });
    }

    throw error;
  },
);

// ---------------------------------------------------------------------------
// Ingest
// ---------------------------------------------------------------------------

export const ingestSubmit = (data: IngestSubmitParams) =>
  kmRequest.post<KmResponse<IngestJob>>(kmRoutes.ingestSubmit, data);

export const getIngestStatus = (jobId: string) =>
  kmRequest.get<KmResponse<IngestJob>>(kmRoutes.ingestStatus(jobId));

export const cancelIngest = (jobId: string) =>
  kmRequest.post<KmResponse<IngestJob>>(kmRoutes.ingestCancel(jobId));

export const retryIngest = (jobId: string) =>
  kmRequest.post<KmResponse<IngestJob>>(kmRoutes.ingestRetry(jobId));

export const listIngestJobs = (params?: {
  state?: string;
  page?: number;
  size?: number;
}) =>
  kmRequest.get<KmResponse<{ total: number; jobs: IngestJob[] }>>(
    kmRoutes.ingestJobs,
    { params },
  );

// ---------------------------------------------------------------------------
// Memory
// ---------------------------------------------------------------------------

export const upsertMemory = (data: MemoryUpsertParams) =>
  kmRequest.post<KmResponse<KmMemory>>(kmRoutes.memoryUpsert, data);

export const queryMemory = (data: MemoryQueryParams) =>
  kmRequest.post<KmResponse<KmMemory[]>>(kmRoutes.memoryQuery, data);

export const deleteMemory = (memoryId: string) =>
  kmRequest.delete<KmResponse<null>>(kmRoutes.memoryDelete(memoryId));

// ---------------------------------------------------------------------------
// Provenance
// ---------------------------------------------------------------------------

export const getEvidenceTrace = (artifactType: string, artifactId: string) =>
  kmRequest.get<KmResponse<ProvenanceRecord[]>>(
    kmRoutes.evidenceTrace(artifactType, artifactId),
  );

// ---------------------------------------------------------------------------
// Knowledge Search
// ---------------------------------------------------------------------------

export const knowledgeSearch = (data: KnowledgeSearchParams) =>
  kmRequest.post<KmResponse<KnowledgeSearchResult>>(
    kmRoutes.knowledgeSearch,
    data,
  );

// ---------------------------------------------------------------------------
// Graph
// ---------------------------------------------------------------------------

export const graphQuery = (data: GraphQueryParams) =>
  kmRequest.post<KmResponse<GraphData>>(kmRoutes.graphQuery, data);

export const graphContextPack = (data: GraphQueryParams) =>
  kmRequest.post<KmResponse<GraphData>>(kmRoutes.graphContextPack, data);

// ---------------------------------------------------------------------------
// Graph Share (public, no auth)
// ---------------------------------------------------------------------------

const publicClient = axios.create({ timeout: 30000 });

export const verifyGraphShareToken = (kbId: string, token: string) =>
  publicClient.get('/api/v1/admin/graph-share/verify', {
    params: { kb_id: kbId, token },
  });

export const getGraphShareData = (kbId: string, token: string) =>
  publicClient.get(`/v1/kb/${kbId}/knowledge_graph`, {
    headers: { Authorization: token },
  });

// ---------------------------------------------------------------------------
// Ontology
// ---------------------------------------------------------------------------

export const getOntologyRecommendations = (kbId: string) =>
  kmRequest.get<KmResponse<OntologyRecommendation>>(
    kmRoutes.ontologyRecommend(kbId),
  );

// ---------------------------------------------------------------------------
// Feedback
// ---------------------------------------------------------------------------

export const submitFeedback = (data: FeedbackParams) =>
  kmRequest.post<KmResponse<{ status: string }>>(kmRoutes.feedback, data);

// ---------------------------------------------------------------------------
// Webhook
// ---------------------------------------------------------------------------

export const registerWebhook = (data: { url: string; event_types: string[] }) =>
  kmRequest.post<KmResponse<WebhookConfig>>(kmRoutes.webhookRegister, data);

export const unregisterWebhook = (webhookId: string) =>
  kmRequest.delete<KmResponse<null>>(kmRoutes.webhookUnregister(webhookId));

// ---------------------------------------------------------------------------
// Health & Metrics
// ---------------------------------------------------------------------------

export const getKmHealth = () =>
  kmRequest.get<KmResponse<KmHealth>>(kmRoutes.health);

export const getKmMetrics = () =>
  kmRequest.get<KmResponse<KmMetrics>>(kmRoutes.metrics);

export const getAuditLogs = (params?: { page?: number; size?: number }) =>
  kmRequest.get<KmResponse<AuditLog[]>>(kmRoutes.auditLogs, { params });
