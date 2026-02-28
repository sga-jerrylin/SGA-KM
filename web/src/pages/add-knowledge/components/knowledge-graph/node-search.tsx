import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  useDownloadNodeContent,
  useGetNodeAssociatedFiles,
  useSearchKnowledgeGraphNodes,
} from '@/hooks/knowledge-graph-hooks';
import { Search } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AssociatedFilesViewer from './associated-files-viewer';

interface NodeSearchProps {
  onNodeSelect?: (node: any) => void;
  onNodeHighlight?: (nodeId: string) => void;
}

const ENTITY_TYPES = [
  'person',
  'organization',
  'location',
  'geo',
  'event',
  'category',
  'product',
  'concept',
];

const NodeSearch: React.FC<NodeSearchProps> = ({
  onNodeSelect,
  onNodeHighlight,
}) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [selectedEntityTypes, setSelectedEntityTypes] = useState<string[]>([]);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [showAssociatedFiles, setShowAssociatedFiles] = useState(false);

  // Search hooks
  const {
    data: searchResults,
    loading: searchLoading,
    searchNodes,
  } = useSearchKnowledgeGraphNodes();

  const {
    data: associatedFiles,
    loading: filesLoading,
    getAssociatedFiles,
  } = useGetNodeAssociatedFiles();

  const { downloadContent, loading: downloadLoading } =
    useDownloadNodeContent();

  // Handle search
  const handleSearch = useCallback(() => {
    if (!query.trim() && selectedEntityTypes.length === 0) {
      return;
    }

    searchNodes({
      query: query.trim(),
      entity_types: selectedEntityTypes,
      limit: 50,
      offset: 0,
    });
  }, [query, selectedEntityTypes, searchNodes]);

  // Handle entity type selection
  const handleEntityTypeChange = useCallback(
    (entityType: string, checked: boolean) => {
      setSelectedEntityTypes((prev) => {
        if (checked) {
          return [...prev, entityType];
        } else {
          return prev.filter((type) => type !== entityType);
        }
      });
    },
    [],
  );

  // Handle node selection
  const handleNodeClick = useCallback(
    (node: any) => {
      setSelectedNode(node);
      onNodeSelect?.(node);
      onNodeHighlight?.(node.id);

      // Get associated files
      getAssociatedFiles(node.id);
      setShowAssociatedFiles(true);
    },
    [onNodeSelect, onNodeHighlight, getAssociatedFiles],
  );

  // Handle download
  const handleDownload = useCallback(
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

  // Memoized search results
  const sortedResults = useMemo(() => {
    if (!searchResults?.nodes) return [];

    return [...searchResults.nodes].sort((a, b) => {
      // Sort by pagerank (relevance) descending
      return (b.pagerank || 0) - (a.pagerank || 0);
    });
  }, [searchResults]);

  return (
    <div className="w-full h-full flex flex-col space-y-4">
      {/* Search Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            {t('knowledgeGraph.nodeSearch')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Input */}
          <div className="flex gap-2">
            <Input
              placeholder={t('knowledgeGraph.searchPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={searchLoading} size="sm">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Entity Type Filters */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              {t('knowledgeGraph.entityTypes')}
            </label>
            <div className="flex flex-wrap gap-2">
              {ENTITY_TYPES.map((entityType) => (
                <div key={entityType} className="flex items-center space-x-2">
                  <Checkbox
                    id={entityType}
                    checked={selectedEntityTypes.includes(entityType)}
                    onCheckedChange={(checked) =>
                      handleEntityTypeChange(entityType, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={entityType}
                    className="text-sm capitalize cursor-pointer"
                  >
                    {entityType}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Filters */}
          {selectedEntityTypes.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedEntityTypes.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleEntityTypeChange(type, false)}
                >
                  {type} ×
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchResults && (
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-between">
              <span>{t('knowledgeGraph.searchResults')}</span>
              <Badge variant="outline">
                {searchResults.total} {t('common.results')}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-2">
                {sortedResults.map((node) => (
                  <div
                    key={node.id}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedNode?.id === node.id
                        ? 'border-blue-500 bg-blue-50'
                        : ''
                    }`}
                    onClick={() => handleNodeClick(node)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{node.id}</h4>
                        {node.description && (
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {node.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {node.entity_type}
                          </Badge>
                          {node.pagerank && (
                            <Badge variant="secondary" className="text-xs">
                              {t('knowledgeGraph.relevance')}:{' '}
                              {(node.pagerank * 100).toFixed(1)}%
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Associated Files Panel */}
      {showAssociatedFiles && selectedNode && (
        <AssociatedFilesViewer
          nodeId={selectedNode.id}
          nodeInfo={selectedNode}
          associatedFiles={associatedFiles}
          loading={filesLoading}
          onDownload={handleDownload}
          downloadLoading={downloadLoading}
        />
      )}
    </div>
  );
};

export default NodeSearch;
