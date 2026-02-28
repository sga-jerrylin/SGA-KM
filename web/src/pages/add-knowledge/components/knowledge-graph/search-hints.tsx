import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Filter,
  Keyboard,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import React from 'react';

interface SearchHintsProps {
  onExampleSearch?: (query: string) => void;
  recentSearches?: string[];
  popularNodes?: Array<{ id: string; entity_type: string; pagerank?: number }>;
}

const SearchHints: React.FC<SearchHintsProps> = ({
  onExampleSearch,
  recentSearches = [],
  popularNodes = [],
}) => {
  const searchTips = [
    {
      icon: <Search className="w-4 h-4" />,
      title: '基础搜索',
      description: '输入节点名称或关键词进行搜索',
      example: '人工智能',
    },
    {
      icon: <Filter className="w-4 h-4" />,
      title: '类型过滤',
      description: '使用过滤器按实体类型搜索',
      example: 'type:person',
    },
    {
      icon: <Target className="w-4 h-4" />,
      title: '精确匹配',
      description: '使用引号进行精确匹配',
      example: '"机器学习"',
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: '快捷键',
      description: '使用 Ctrl+K 快速打开搜索',
      example: 'Ctrl+K',
    },
  ];

  const handleExampleClick = (example: string) => {
    if (example !== 'Ctrl+K') {
      onExampleSearch?.(example);
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-30">
      <Card className="border-2 border-dashed border-gray-200">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* 搜索提示 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <h3 className="font-medium text-sm">搜索提示</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {searchTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleExampleClick(tip.example)}
                  >
                    <div className="text-blue-500 mt-0.5">{tip.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-gray-900 mb-1">
                        {tip.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-1">
                        {tip.description}
                      </p>
                      <Badge variant="outline" className="text-xs font-mono">
                        {tip.example}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 热门节点 */}
            {popularNodes.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <h3 className="font-medium text-sm">热门节点</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularNodes.slice(0, 8).map((node) => (
                    <Badge
                      key={node.id}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100 transition-colors text-xs"
                      onClick={() => onExampleSearch?.(node.id)}
                    >
                      <Target className="w-2 h-2 mr-1" />
                      {node.id}
                      {node.pagerank && (
                        <span className="ml-1 text-xs opacity-70">
                          {(node.pagerank * 100).toFixed(0)}%
                        </span>
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* 最近搜索 */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Keyboard className="w-4 h-4 text-purple-500" />
                  <h3 className="font-medium text-sm">最近搜索</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.slice(0, 6).map((search, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50 transition-colors text-xs"
                      onClick={() => onExampleSearch?.(search)}
                    >
                      {search}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* 键盘快捷键 */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                      Ctrl
                    </kbd>
                    <span>+</span>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                      K
                    </kbd>
                    <span>快速搜索</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                      Esc
                    </kbd>
                    <span>关闭</span>
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  点击任意示例开始搜索
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchHints;
