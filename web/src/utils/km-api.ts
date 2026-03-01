// KM API route definitions
// Base path for all KM endpoints (separate from the standard /v1/ RAGFlow API)
const kmApi = '/api/v1/km';

export const kmRoutes = {
  // Ingest
  ingestSubmit: `${kmApi}/ingest/submit`,
  ingestStatus: (jobId: string) => `${kmApi}/ingest/${jobId}/status`,
  ingestCancel: (jobId: string) => `${kmApi}/ingest/${jobId}/cancel`,
  ingestRetry: (jobId: string) => `${kmApi}/ingest/${jobId}/retry`,
  ingestEvents: (jobId: string) => `${kmApi}/ingest/${jobId}/events`,
  ingestJobs: `${kmApi}/ingest/jobs`,

  // Memory
  memoryUpsert: `${kmApi}/memory`,
  memoryQuery: `${kmApi}/memory/query`,
  memoryDelete: (memoryId: string) => `${kmApi}/memory/${memoryId}`,

  // Provenance
  evidenceTrace: (type: string, id: string) =>
    `${kmApi}/provenance/${type}/${id}`,

  // Knowledge Search
  knowledgeSearch: `${kmApi}/knowledge/search`,
  graphQuery: `${kmApi}/graph/query`,
  graphContextPack: `${kmApi}/graph/context-pack`,

  // Ontology
  ontologyRecommend: (kbId: string) => `${kmApi}/ontology/${kbId}/recommend`,

  // Feedback
  feedback: `${kmApi}/feedback`,

  // Webhook
  webhookRegister: `${kmApi}/webhook`,
  webhookUnregister: (webhookId: string) => `${kmApi}/webhook/${webhookId}`,

  // Health & Metrics
  health: `${kmApi}/health`,
  metrics: `${kmApi}/metrics`,
  auditLogs: `${kmApi}/audit-logs`,
};
