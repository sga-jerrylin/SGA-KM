import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Circle, Share2 } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GraphLegendProps {
  stats: {
    nodeCount: number;
    edgeCount: number;
  };
  nodeTypes: string[];
  visibleNodeTypes: string[];
  onToggleNodeType: (type: string) => void;
  className?: string;
}

const GraphLegend: React.FC<GraphLegendProps> = ({
  stats,
  nodeTypes,
  visibleNodeTypes,
  onToggleNodeType,
  className,
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const colorMap: Record<string, string> = {
    PERSON: '#00f2ff',
    ORGANIZATION: '#ff0055',
    LOCATION: '#00ff9d',
    EVENT: '#ffae00',
    CONCEPT: '#bd00ff',
    COMMUNITY: '#ffffff',
    other: '#888888',
  };

  const getColor = (type: string) =>
    colorMap[type.toUpperCase()] || colorMap.other;

  return (
    <Card
      className={cn(
        'w-64 bg-slate-900/90 text-slate-100 border-slate-700 backdrop-blur-md shadow-2xl transition-all duration-300 absolute right-4 top-4 z-50',
        className,
      )}
    >
      <CardHeader
        className="p-3 border-b border-slate-700/50 flex flex-row items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-wider text-slate-200">
          <Share2 className="w-4 h-4 text-blue-400" />
          {t('knowledgeGraph.legend')}
        </CardTitle>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-slate-400" />
        ) : (
          <ChevronUp className="w-4 h-4 text-slate-400" />
        )}
      </CardHeader>
      {isExpanded && (
        <CardContent className="p-4 space-y-6">
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-2">
              {t('knowledgeGraph.statistics')}
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-slate-300">
                  <Circle className="w-2 h-2 fill-blue-400 text-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <span className="font-mono text-lg font-bold">
                    {stats.nodeCount}
                  </span>
                </div>
                <span className="text-xs text-slate-500 ml-4">
                  {t('knowledgeGraph.nodes')}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-slate-300">
                  <Share2 className="w-3 h-3 text-slate-400" />
                  <span className="font-mono text-lg font-bold">
                    {stats.edgeCount}
                  </span>
                </div>
                <span className="text-xs text-slate-500 ml-4">
                  {t('knowledgeGraph.edges')}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
                {t('knowledgeGraph.nodeTypes')}
              </h4>
              <span className="text-[10px] text-slate-600">FILTER</span>
            </div>
            <ScrollArea className="h-48 pr-2 -mr-2">
              <div className="space-y-1">
                {nodeTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center justify-between p-1.5 rounded hover:bg-slate-800/50 transition-colors group cursor-pointer"
                    onClick={() => onToggleNodeType(type)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full ring-2 ring-opacity-30 ring-offset-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: getColor(type),
                          boxShadow: `0 0 10px ${getColor(type)}`,
                          borderColor: getColor(type),
                        }}
                      />
                      <span className="text-xs font-medium text-slate-300 capitalize group-hover:text-white transition-colors">
                        {type.toLowerCase()}
                      </span>
                    </div>
                    <Checkbox
                      checked={visibleNodeTypes.includes(type)}
                      onCheckedChange={() => onToggleNodeType(type)}
                      className="h-3.5 w-3.5 border-slate-600 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default GraphLegend;
