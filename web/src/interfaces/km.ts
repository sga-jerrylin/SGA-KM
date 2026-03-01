// KM (Knowledge Memory) TypeScript type definitions

// ---------------------------------------------------------------------------
// Ingest
// ---------------------------------------------------------------------------

export type IngestJobState =
  | 'queued'
  | 'downloading'
  | 'parsing'
  | 'chunking'
  | 'embedding'
  | 'extracting_kg'
  | 'resolving_entities'
  | 'upserting_graph'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'partial_completed';

export interface IngestJob {
  job_id: string;
  state: IngestJobState;
  progress_percent: number;
  source_type: 'url' | 'file' | 'text';
  source_filename?: string;
  source_url?: string;
  kb_id: string;
  error_code?: string;
  error_msg?: string;
  retryable: boolean;
  retry_count: number;
  chunk_count: number;
  entity_count: number;
  relation_count: number;
  created_at: string;
  started_at?: string;
  completed_at?: string;
  eta_seconds?: number;
}

export interface IngestSubmitParams {
  source_type: 'url' | 'file' | 'text';
  source_url?: string;
  kb_id: string;
  pipeline_config?: {
    parser_id?: string;
    extract_entities?: boolean;
    entity_types?: string[] | null;
    language?: string;
    priority?: number;
  };
  idempotency_key?: string;
  trace_id?: string;
}

// ---------------------------------------------------------------------------
// Memory
// ---------------------------------------------------------------------------

export interface KmMemory {
  id: string;
  content: string;
  content_type: string;
  scope: 'session' | 'personal' | 'team' | 'org';
  owner_id?: string;
  space_id?: string;
  importance: number;
  ttl_seconds?: number;
  expires_at?: string;
  access_count: number;
  last_accessed_at?: string;
  is_archived: boolean;
  source_ref?: string;
  created_at: string;
}

export interface MemoryUpsertParams {
  content: string;
  content_type?: string;
  scope?: string;
  owner_id?: string;
  space_id?: string;
  importance?: number;
  ttl_seconds?: number;
  source_ref?: string;
  trace_id?: string;
}

export interface MemoryQueryParams {
  query: string;
  scope?: string;
  owner_id?: string;
  top_k?: number;
  min_similarity?: number;
  content_types?: string[];
  include_archived?: boolean;
}

// ---------------------------------------------------------------------------
// Provenance
// ---------------------------------------------------------------------------

export interface ProvenanceRecord {
  source_doc_id: string;
  source_doc_name?: string;
  source_page?: number;
  source_offset?: [number, number];
  confidence: number;
  extraction_method: string;
  job_id?: string;
  pipeline_version: string;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Knowledge Search
// ---------------------------------------------------------------------------

export interface KnowledgeSearchParams {
  query: string;
  kb_ids: string[];
  mode?: 'vector' | 'keyword' | 'hybrid' | 'graph_enhanced';
  top_k?: number;
  min_confidence?: number;
  include_graph_context?: boolean;
  include_citations?: boolean;
}

export interface Citation {
  doc_id: string;
  doc_name: string;
  chunk_id: string;
  content: string;
  page?: number;
  similarity: number;
}

export interface GraphNode {
  id: string;
  name: string;
  type: string;
  description?: string;
  rank?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label: string;
  weight: number;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface KnowledgeSearchResult {
  answer: string;
  citations: Citation[];
  reasoning_subgraph?: GraphData;
  confidence: number;
}

// ---------------------------------------------------------------------------
// Graph Query
// ---------------------------------------------------------------------------

export interface GraphQueryParams {
  intent: 'find_path' | 'neighbors' | 'timeline' | 'compare';
  kb_id: string;
  entity?: string;
  source?: string;
  target?: string;
  hops?: number;
}

// ---------------------------------------------------------------------------
// Feedback
// ---------------------------------------------------------------------------

export interface FeedbackParams {
  artifact_type: 'entity' | 'relation' | 'chunk' | 'memory';
  artifact_id: string;
  feedback_type: 'positive' | 'negative' | 'correction';
  correction_value?: string;
  trace_id?: string;
}

// ---------------------------------------------------------------------------
// Health & Metrics
// ---------------------------------------------------------------------------

export interface KmHealth {
  status: 'healthy' | 'degraded';
  checks: Record<string, string>;
  version: string;
}

export interface KmMetrics {
  total_ingest_jobs: number;
  active_jobs: number;
  total_memories: number;
  total_provenance_records: number;
}

// ---------------------------------------------------------------------------
// Audit
// ---------------------------------------------------------------------------

export interface AuditLog {
  id: string;
  principal_type: string;
  principal_id: string;
  action: string;
  resource_type?: string;
  resource_id?: string;
  trace_id?: string;
  status_code: number;
  latency_ms: number;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Ontology
// ---------------------------------------------------------------------------

export interface OntologyRecommendation {
  entity_types: string[];
  relation_types: string[];
  reasoning: string;
}

// ---------------------------------------------------------------------------
// Webhook
// ---------------------------------------------------------------------------

export interface WebhookConfig {
  id: string;
  url: string;
  event_types: string[];
  is_active: boolean;
  failure_count: number;
}

// ---------------------------------------------------------------------------
// Generic KM API response envelope
// ---------------------------------------------------------------------------

export interface KmResponse<T> {
  status: 'ok' | 'pending' | 'error';
  data: T;
  meta?: {
    trace_id?: string;
    latency_ms?: number;
    idempotency_replay?: boolean;
  };
  control?: {
    next_tool_hint?: string;
    poll_interval_ms?: number;
    events_url?: string;
    retry_after_ms?: number;
  };
}
