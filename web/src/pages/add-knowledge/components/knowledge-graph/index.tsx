import { ConfirmDeleteDialog } from '@/components/confirm-delete-dialog';
import { Button } from '@/components/ui/button';
import {
  useDownloadNodeContent,
  useKnowledgeGraphInteraction,
} from '@/hooks/knowledge-graph-hooks';
import { useFetchKnowledgeGraph } from '@/hooks/knowledge-hooks';
import { Info, Search, Trash2 } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedForceGraph from './animated-force-graph';
import EnhancedGraphInteraction from './enhanced-graph-interaction';
import EnhancedSearchBar from './enhanced-search-bar';
import GraphPerformanceOptimizer from './graph-performance-optimizer';
import NodeInfoPanel from './node-info-panel';
import NodeSearch from './node-search';
import { useDeleteKnowledgeGraph } from './use-delete-graph';

const KnowledgeGraph: React.FC = () => {
  const { data } = useFetchKnowledgeGraph();
  const { t } = useTranslation();
  const { handleDeleteKnowledgeGraph } = useDeleteKnowledgeGraph();
  const [showSearch, setShowSearch] = useState(false);
  const [showNodeInfo, setShowNodeInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [interactionMode, setInteractionMode] = useState<
    'select' | 'pan' | 'zoom'
  >('select');
  const [showNodeLabels, setShowNodeLabels] = useState(true);
  const [showEdgeLabels, setShowEdgeLabels] = useState(false);
  const [layoutType, setLayoutType] = useState<
    'force' | 'circular' | 'hierarchical'
  >('force');
  const [searchQuery, setSearchQuery] = useState('');
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(300);

  const {
    selectedNode,
    highlightedNode,
    handleNodeSelect,
    handleNodeHighlight,
  } = useKnowledgeGraphInteraction();

  const { downloadContent, loading: downloadLoading } =
    useDownloadNodeContent();

  // Graph statistics
  const graphStats = useMemo(() => {
    if (!data?.graph) return undefined;

    return {
      totalNodes: data.graph.nodes?.length || 0,
      visibleNodes: data.graph.nodes?.length || 0,
      totalEdges: data.graph.edges?.length || 0,
      visibleEdges: data.graph.edges?.length || 0,
    };
  }, [data?.graph]);

  // Graph interaction handlers
  const handleZoomIn = useCallback(() => {
    // Implementation would depend on the graph library
    console.log('Zoom in');
  }, []);

  const handleZoomOut = useCallback(() => {
    // Implementation would depend on the graph library
    console.log('Zoom out');
  }, []);

  const handleResetView = useCallback(() => {
    // Implementation would depend on the graph library
    console.log('Reset view');
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  // Enhanced node selection handler
  const handleEnhancedNodeSelect = useCallback(
    (node: any) => {
      handleNodeSelect(node);
      setShowNodeInfo(true);
    },
    [handleNodeSelect],
  );

  // Download handler for node content
  const handleNodeDownload = useCallback(
    async (format: 'txt' | 'json' | 'csv') => {
      if (!selectedNode) return;

      try {
        await downloadContent(selectedNode.id, {
          type: 'chunks',
          format,
          include_metadata: true,
        });
      } catch (error) {
        console.error('Download failed:', error);
      }
    },
    [selectedNode, downloadContent],
  );

  return (
    <section
      className={`w-full h-full relative flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}
    >
      {/* Top Search Bar */}
      <div className="flex-shrink-0 p-4 bg-white border-b">
        <div className="max-w-2xl mx-auto">
          <EnhancedSearchBar
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onNodeSelect={handleEnhancedNodeSelect}
            onNodeHighlight={handleNodeHighlight}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Search Panel */}
        {showSearch && (
          <div className="w-80 h-full border-r bg-white p-4 overflow-y-auto">
            <NodeSearch
              onNodeSelect={handleNodeSelect}
              onNodeHighlight={handleNodeHighlight}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
            />
          </div>
        )}

        {/* Main Graph Area */}
        <div className="flex-1 relative">
          {/* Control Buttons */}
          <div className="absolute right-4 top-4 z-50 flex gap-2">
            <Button
              variant="outline"
              size={'sm'}
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="w-4 h-4" />
              {showSearch ? '隐藏高级搜索' : '高级搜索'}
            </Button>

            <Button
              variant="outline"
              size={'sm'}
              onClick={() => setShowNodeInfo(!showNodeInfo)}
              disabled={!selectedNode}
            >
              <Info className="w-4 h-4" />
              {t('knowledgeGraph.nodeInfo')}
            </Button>

            <ConfirmDeleteDialog onOk={handleDeleteKnowledgeGraph}>
              <Button variant="outline" size={'sm'}>
                <Trash2 className="w-4 h-4" />
                {t('common.delete')}
              </Button>
            </ConfirmDeleteDialog>
          </div>

          {/* Enhanced Graph Interaction Controls */}
          <EnhancedGraphInteraction
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onResetView={handleResetView}
            onToggleFullscreen={handleToggleFullscreen}
            isFullscreen={isFullscreen}
            selectedNode={selectedNode}
            hoveredNode={highlightedNode}
            graphStats={graphStats}
            interactionMode={interactionMode}
            onInteractionModeChange={setInteractionMode}
            showNodeLabels={showNodeLabels}
            onToggleNodeLabels={setShowNodeLabels}
            showEdgeLabels={showEdgeLabels}
            onToggleEdgeLabels={setShowEdgeLabels}
            layoutType={layoutType}
            onLayoutChange={setLayoutType}
            enableAnimations={enableAnimations}
            onToggleAnimations={setEnableAnimations}
            animationDuration={animationDuration}
            onAnimationDurationChange={setAnimationDuration}
          />

          {/* Performance Optimized Graph */}
          <GraphPerformanceOptimizer
            nodes={data?.graph?.nodes || []}
            edges={data?.graph?.edges || []}
            onNodeClick={handleEnhancedNodeSelect}
            onNodeHover={handleNodeHighlight}
            searchQuery={searchQuery}
            selectedNodeId={selectedNode?.id}
            highlightedNodeId={highlightedNode}
            maxVisibleNodes={500}
            enableVirtualization={true}
          >
            {({
              visibleNodes,
              visibleEdges,
              handleNodeClick,
              handleNodeHover,
            }) => (
              <AnimatedForceGraph
                data={{
                  nodes: visibleNodes,
                  edges: visibleEdges,
                }}
                show={true}
                onNodeClick={handleNodeClick}
                onNodeHover={handleNodeHover}
                highlightedNodeId={highlightedNode}
                selectedNodeId={selectedNode?.id}
                showNodeLabels={showNodeLabels}
                showEdgeLabels={showEdgeLabels}
                layoutType={layoutType}
                interactionMode={interactionMode}
                enableAnimations={enableAnimations}
                animationDuration={animationDuration}
              />
            )}
          </GraphPerformanceOptimizer>

          {/* Node Information Panel */}
          {showNodeInfo && selectedNode && (
            <div className="absolute left-4 top-4 z-50">
              <NodeInfoPanel
                node={selectedNode}
                onClose={() => setShowNodeInfo(false)}
                onDownload={handleNodeDownload}
                downloadLoading={downloadLoading}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeGraph;
