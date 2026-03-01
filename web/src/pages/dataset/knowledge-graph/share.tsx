/**
 * KnowledgeGraphShare — public page for viewing a shared knowledge graph.
 *
 * Route:  /graph/:id?token=<share-token>
 *   :id   — the knowledge-base (kb_id)
 *   token — share token passed as a URL query parameter
 *
 * Flow:
 *  1. Verify the token via GET /api/v1/admin/graph-share/verify?token=&kb_id=
 *  2. If valid, fetch graph data via GET /v1/kb/:id/knowledge_graph
 *     (token passed as Authorization header)
 *  3. Render ForceGraph with the fetched data
 */
import { useBranding } from '@/hooks/use-branding';
import {
  getGraphShareData,
  verifyGraphShareToken,
} from '@/services/km-service';
import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import ForceGraph from './force-graph';

type PageState = 'loading' | 'valid' | 'invalid' | 'expired' | 'error';

const NEBULA_BG =
  'radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d1a 50%, #000 100%)';

const KnowledgeGraphShare: React.FC = () => {
  // Accept :id (task spec) — route is /graph/:id
  const { id: kbId } = useParams<{ id: string }>();
  const token = useMemo(
    () => new URLSearchParams(window.location.search).get('token') ?? '',
    [],
  );
  const { branding } = useBranding();

  const [pageState, setPageState] = useState<PageState>('loading');
  const [graphData, setGraphData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGraph = useCallback(async () => {
    if (!kbId || !token) {
      setErrorMessage('Missing knowledge base ID or share token.');
      setPageState('invalid');
      return;
    }

    try {
      // Step 1: Verify the share token.
      const verifyRes = await verifyGraphShareToken(kbId, token);
      const verifyBody = verifyRes?.data as any;
      const verifyCode: number = verifyBody?.code ?? 0;

      if (verifyCode !== 0) {
        if (verifyCode === 410) {
          setPageState('expired');
          setErrorMessage(
            verifyBody?.message || 'This share link has expired.',
          );
        } else {
          setPageState('invalid');
          setErrorMessage(
            verifyBody?.message ||
              'This share link is invalid or has been revoked.',
          );
        }
        return;
      }

      // Step 2: Fetch graph data using the token for authorization.
      const graphRes = await getGraphShareData(kbId, token);
      const graphBody = graphRes?.data as any;

      if (graphBody?.code !== 0) {
        setPageState('error');
        setErrorMessage(graphBody?.message || 'Failed to load graph data.');
        return;
      }

      const graph = graphBody?.data?.graph ?? graphBody?.data ?? {};
      setGraphData(graph);
      setPageState('valid');
    } catch (err: unknown) {
      const axiosErr = err as any;
      const status: number = axiosErr?.response?.status;
      const responseData = axiosErr?.response?.data as any;

      if (status === 410 || responseData?.code === 410) {
        setPageState('expired');
        setErrorMessage(
          responseData?.message || 'This share link has expired.',
        );
      } else if (status === 401 || status === 403) {
        setPageState('invalid');
        setErrorMessage(
          responseData?.message ||
            'This share link is invalid or has been revoked.',
        );
      } else {
        setPageState('error');
        setErrorMessage(
          responseData?.message ||
            (err instanceof Error
              ? err.message
              : 'An unexpected error occurred.'),
        );
      }
    }
  }, [kbId, token]);

  useEffect(() => {
    loadGraph();
  }, [loadGraph]);

  /* ── Header bar ─────────────────────────────────────────────────────────── */

  const header = (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 53,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        background: 'rgba(13, 13, 26, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(100, 150, 255, 0.2)',
        gap: 12,
      }}
    >
      <img
        src={branding.homeLogoUrl}
        alt="logo"
        style={{ width: 28, height: 28, borderRadius: 6, flexShrink: 0 }}
      />
      <span
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: '#ffffff',
          letterSpacing: '0.02em',
        }}
      >
        {branding.productName}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16 }}>|</span>
      <span
        style={{
          fontSize: 13,
          color: 'rgba(100, 180, 255, 0.8)',
          fontWeight: 500,
        }}
      >
        Shared Graph View
      </span>
    </header>
  );

  /* ── Helper: centred info screen ────────────────────────────────────────── */

  const InfoScreen = ({
    icon,
    title,
    message,
  }: {
    icon: React.ReactNode;
    title: string;
    message: string;
  }) => (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        background: NEBULA_BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        gap: 16,
      }}
    >
      {header}
      {icon}
      <h2
        style={{ color: '#ffffff', fontSize: 22, fontWeight: 600, margin: 0 }}
      >
        {title}
      </h2>
      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 14,
          maxWidth: 360,
          textAlign: 'center',
          margin: 0,
        }}
      >
        {message}
      </p>
    </div>
  );

  /* ── Loading ────────────────────────────────────────────────────────────── */

  if (pageState === 'loading') {
    return (
      <div
        style={{
          width: '100vw',
          height: '100dvh',
          background: NEBULA_BG,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {header}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.15)',
            borderTopColor: '#4dabf7',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <p
          style={{
            marginTop: 16,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
          }}
        >
          Verifying share link...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  /* ── Expired ────────────────────────────────────────────────────────────── */

  if (pageState === 'expired') {
    return (
      <InfoScreen
        icon={
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffaa00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.85 }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        }
        title="Share Link Expired"
        message={
          errorMessage ||
          'This share link has expired and is no longer accessible.'
        }
      />
    );
  }

  /* ── Invalid / Error ────────────────────────────────────────────────────── */

  if (pageState === 'invalid' || pageState === 'error') {
    return (
      <InfoScreen
        icon={
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff3366"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.85 }}
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        }
        title={
          pageState === 'invalid' ? 'Invalid Share Link' : 'Error Loading Graph'
        }
        message={
          errorMessage ||
          (pageState === 'invalid'
            ? 'This share link is invalid or has been revoked.'
            : 'An error occurred while loading the graph. Please try again.')
        }
      />
    );
  }

  /* ── Valid — render force graph ─────────────────────────────────────────── */

  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        background: NEBULA_BG,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {header}
      {/* Position graph canvas beneath the 53px header */}
      <div style={{ position: 'absolute', inset: 0, top: 53 }}>
        <ForceGraph data={isEmpty(graphData) ? undefined : graphData} show />
      </div>
    </div>
  );
};

export default KnowledgeGraphShare;
