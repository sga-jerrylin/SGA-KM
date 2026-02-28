import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useSearchKnowledgeGraphNodes } from '@/hooks/knowledge-graph-hooks';
import {
  ChevronUp,
  Clock,
  Filter,
  Search,
  Star,
  Target,
  X,
  Zap,
} from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchHints from './search-hints';

interface EnhancedSearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onNodeSelect?: (node: any) => void;
  onNodeHighlight?: (nodeId: string | null) => void;
  className?: string;
}

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({
  searchQuery,
  onSearchQueryChange,
  onNodeSelect,
  onNodeHighlight,
  className = '',
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEntityType, setSelectedEntityType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'importance'>(
    'relevance',
  );
  const [showHints, setShowHints] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { searchNodes, loading, results } = useSearchKnowledgeGraphNodes();

  // 搜索节点
  useEffect(() => {
    if (searchQuery.trim()) {
      searchNodes({
        query: searchQuery,
        entity_type:
          selectedEntityType === 'all' ? undefined : selectedEntityType,
        limit: 20,
      });
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [searchQuery, selectedEntityType, searchNodes]);

  // 处理搜索输入
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onSearchQueryChange(value);

      // 保存搜索历史
      if (value.trim() && !recentSearches.includes(value.trim())) {
        setRecentSearches((prev) => [value.trim(), ...prev.slice(0, 9)]);
      }
    },
    [onSearchQueryChange, recentSearches],
  );

  // 处理示例搜索
  const handleExampleSearch = useCallback(
    (query: string) => {
      onSearchQueryChange(query);
      setShowHints(false);
      searchInputRef.current?.focus();
    },
    [onSearchQueryChange],
  );

  // 清除搜索
  const handleClearSearch = useCallback(() => {
    onSearchQueryChange('');
    setIsExpanded(false);
    setShowHints(true);
    searchInputRef.current?.focus();
  }, [onSearchQueryChange]);

  // 节点选择处理
  const handleNodeClick = useCallback(
    (node: any) => {
      onNodeSelect?.(node);
      onNodeHighlight?.(node.id);
      setIsExpanded(false);
    },
    [onNodeSelect, onNodeHighlight],
  );

  // 节点悬停处理
  const handleNodeHover = useCallback(
    (node: any) => {
      onNodeHighlight?.(node.id);
    },
    [onNodeHighlight],
  );

  const handleNodeLeave = useCallback(() => {
    onNodeHighlight?.(null);
  }, [onNodeHighlight]);

  // 排序搜索结果
  const sortedResults = React.useMemo(() => {
    if (!results?.nodes) return [];

    const nodes = [...results.nodes];

    switch (sortBy) {
      case 'name':
        return nodes.sort((a, b) => a.id.localeCompare(b.id));
      case 'importance':
        return nodes.sort((a, b) => (b.pagerank || 0) - (a.pagerank || 0));
      default:
        return nodes; // 默认按相关性排序
    }
  }, [results, sortBy]);

  // 获取实体类型列表
  const entityTypes = React.useMemo(() => {
    if (!results?.nodes) return [];
    const types = new Set(
      results.nodes.map((node) => node.entity_type).filter(Boolean),
    );
    return Array.from(types);
  }, [results]);

  // 快捷键处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsExpanded(false);
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* 搜索输入框 */}
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder={`${t('knowledgeGraph.searchPlaceholder')} (Ctrl+K)`}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => !searchQuery && setShowHints(true)}
            onBlur={() => setTimeout(() => setShowHints(false), 200)}
            className="pl-10 pr-20 h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
          />
          <div className="absolute right-2 flex items-center gap-1">
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearSearch}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="h-8 w-8 p-0"
            >
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 快捷提示 */}
        {!searchQuery && !isExpanded && (
          <div className="absolute top-full left-0 right-0 mt-1 text-xs text-gray-500 flex items-center gap-2">
            <Zap className="w-3 h-3" />
            <span>{t('knowledgeGraph.clickToSelect')}</span>
            <span>•</span>
            <span>Ctrl+K 快速搜索</span>
          </div>
        )}
      </div>

      {/* 过滤器面板 */}
      {showFilters && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border-2">
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium mb-1 block">
                  {t('knowledgeGraph.entityTypes')}
                </label>
                <select
                  value={selectedEntityType}
                  onChange={(e) => setSelectedEntityType(e.target.value)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="all">全部类型</option>
                  {entityTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium mb-1 block">
                  排序方式
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="relevance">相关性</option>
                  <option value="name">名称</option>
                  <option value="importance">重要性</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 搜索结果 */}
      {isExpanded && searchQuery && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-40 border-2 shadow-lg max-h-96">
          <CardContent className="p-0">
            {loading ? (
              <div className="p-4 text-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mx-auto mb-2 animate-spin" />
                {t('knowledgeGraph.searching')}...
              </div>
            ) : sortedResults.length > 0 ? (
              <ScrollArea className="max-h-80">
                <div className="p-2">
                  <div className="flex items-center justify-between mb-2 px-2">
                    <span className="text-xs font-medium text-gray-700">
                      找到 {sortedResults.length} 个结果
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(false)}
                      className="h-6 w-6 p-0"
                    >
                      <ChevronUp className="w-3 h-3" />
                    </Button>
                  </div>
                  <Separator className="mb-2" />
                  <div className="space-y-1">
                    {sortedResults.map((node) => (
                      <div
                        key={node.id}
                        className="p-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"
                        onClick={() => handleNodeClick(node)}
                        onMouseEnter={() => handleNodeHover(node)}
                        onMouseLeave={handleNodeLeave}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Target className="w-3 h-3 text-blue-500 flex-shrink-0" />
                              <h4 className="font-medium text-sm truncate">
                                {node.id}
                              </h4>
                            </div>
                            {node.description && (
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                {node.description}
                              </p>
                            )}
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {node.entity_type}
                              </Badge>
                              {node.pagerank && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs flex items-center gap-1"
                                >
                                  <Star className="w-2 h-2" />
                                  {(node.pagerank * 100).toFixed(1)}%
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            ) : (
              <div className="p-4 text-center text-sm text-gray-500">
                <Target className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>{t('knowledgeGraph.noSearchResults')}</p>
                <p className="text-xs mt-1">尝试使用不同的关键词</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Search Hints */}
      {showHints && !searchQuery && !isExpanded && (
        <SearchHints
          onExampleSearch={handleExampleSearch}
          recentSearches={recentSearches}
          popularNodes={sortedResults.slice(0, 8)}
        />
      )}
    </div>
  );
};

export default EnhancedSearchBar;
