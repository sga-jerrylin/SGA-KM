import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Eye,
  EyeOff,
  Info,
  Maximize2,
  Minimize2,
  MousePointer,
  Move,
  Pause,
  Play,
  RotateCcw,
  Settings,
  Zap,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface EnhancedGraphInteractionProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  selectedNode?: any;
  hoveredNode?: any;
  graphStats?: {
    totalNodes: number;
    visibleNodes: number;
    totalEdges: number;
    visibleEdges: number;
  };
  interactionMode: 'select' | 'pan' | 'zoom';
  onInteractionModeChange: (mode: 'select' | 'pan' | 'zoom') => void;
  showNodeLabels: boolean;
  onToggleNodeLabels: (show: boolean) => void;
  showEdgeLabels: boolean;
  onToggleEdgeLabels: (show: boolean) => void;
  layoutType: 'force' | 'circular' | 'hierarchical';
  onLayoutChange: (layout: 'force' | 'circular' | 'hierarchical') => void;
  enableAnimations?: boolean;
  onToggleAnimations?: (enabled: boolean) => void;
  animationDuration?: number;
  onAnimationDurationChange?: (duration: number) => void;
}

const EnhancedGraphInteraction: React.FC<EnhancedGraphInteractionProps> = ({
  onZoomIn,
  onZoomOut,
  onResetView,
  onToggleFullscreen,
  isFullscreen,
  selectedNode,
  hoveredNode,
  graphStats,
  interactionMode,
  onInteractionModeChange,
  showNodeLabels,
  onToggleNodeLabels,
  showEdgeLabels,
  onToggleEdgeLabels,
  layoutType,
  onLayoutChange,
  enableAnimations = true,
  onToggleAnimations,
  animationDuration = 300,
  onAnimationDurationChange,
}) => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);

  const interactionModes = [
    {
      value: 'select',
      icon: MousePointer,
      label: t('knowledgeGraph.selectMode'),
    },
    { value: 'pan', icon: Move, label: t('knowledgeGraph.panMode') },
    { value: 'zoom', icon: ZoomIn, label: t('knowledgeGraph.zoomMode') },
  ];

  const layoutTypes = [
    { value: 'force', label: t('knowledgeGraph.forceLayout') },
    { value: 'circular', label: t('knowledgeGraph.circularLayout') },
    { value: 'hierarchical', label: t('knowledgeGraph.hierarchicalLayout') },
  ];

  return (
    <TooltipProvider>
      <div className="absolute top-4 left-4 z-10 space-y-2">
        {/* Main Controls */}
        <Card className="p-2">
          <div className="flex items-center gap-1">
            {/* Interaction Mode Toggle */}
            <div className="flex border rounded">
              {interactionModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <Tooltip key={mode.value}>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant={
                          interactionMode === mode.value ? 'default' : 'ghost'
                        }
                        onClick={() =>
                          onInteractionModeChange(mode.value as any)
                        }
                        className="px-2 py-1 rounded-none first:rounded-l last:rounded-r"
                      >
                        <Icon className="w-3 h-3" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{mode.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Zoom Controls */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onZoomIn}
                  className="px-2 py-1"
                >
                  <ZoomIn className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('knowledgeGraph.zoomIn')}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onZoomOut}
                  className="px-2 py-1"
                >
                  <ZoomOut className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('knowledgeGraph.zoomOut')}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onResetView}
                  className="px-2 py-1"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('knowledgeGraph.resetView')}</p>
              </TooltipContent>
            </Tooltip>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Fullscreen Toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onToggleFullscreen}
                  className="px-2 py-1"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-3 h-3" />
                  ) : (
                    <Maximize2 className="w-3 h-3" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {isFullscreen
                    ? t('knowledgeGraph.exitFullscreen')
                    : t('knowledgeGraph.enterFullscreen')}
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Settings Toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant={showSettings ? 'default' : 'ghost'}
                  onClick={() => setShowSettings(!showSettings)}
                  className="px-2 py-1"
                >
                  <Settings className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('knowledgeGraph.graphSettings')}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Card>

        {/* Settings Panel */}
        {showSettings && (
          <Card className="p-3 w-64">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">
                {t('knowledgeGraph.displaySettings')}
              </h4>

              {/* Layout Selection */}
              <div>
                <label className="text-xs font-medium mb-1 block">
                  {t('knowledgeGraph.layout')}
                </label>
                <select
                  value={layoutType}
                  onChange={(e) => onLayoutChange(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  {layoutTypes.map((layout) => (
                    <option key={layout.value} value={layout.value}>
                      {layout.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Animation Controls */}
              {onToggleAnimations && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      动画效果
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onToggleAnimations(!enableAnimations)}
                      className="px-1 py-0 h-6"
                    >
                      {enableAnimations ? (
                        <Play className="w-3 h-3" />
                      ) : (
                        <Pause className="w-3 h-3" />
                      )}
                    </Button>
                  </div>

                  {enableAnimations && onAnimationDurationChange && (
                    <div>
                      <label className="text-xs font-medium mb-1 block">
                        动画时长: {animationDuration}ms
                      </label>
                      <input
                        type="range"
                        min="100"
                        max="1000"
                        step="50"
                        value={animationDuration}
                        onChange={(e) =>
                          onAnimationDurationChange(Number(e.target.value))
                        }
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Label Toggles */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">
                    {t('knowledgeGraph.nodeLabels')}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleNodeLabels(!showNodeLabels)}
                    className="px-1 py-0 h-6"
                  >
                    {showNodeLabels ? (
                      <Eye className="w-3 h-3" />
                    ) : (
                      <EyeOff className="w-3 h-3" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">
                    {t('knowledgeGraph.edgeLabels')}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleEdgeLabels(!showEdgeLabels)}
                    className="px-1 py-0 h-6"
                  >
                    {showEdgeLabels ? (
                      <Eye className="w-3 h-3" />
                    ) : (
                      <EyeOff className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Graph Statistics */}
        {graphStats && (
          <Card className="p-2">
            <div className="flex items-center gap-2">
              <Info className="w-3 h-3 text-gray-500" />
              <div className="text-xs text-gray-600">
                <span>
                  {graphStats.visibleNodes}/{graphStats.totalNodes} nodes
                </span>
                <span className="mx-1">•</span>
                <span>
                  {graphStats.visibleEdges}/{graphStats.totalEdges} edges
                </span>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Node Information Panel */}
      {(selectedNode || hoveredNode) && (
        <div className="absolute top-4 right-4 z-10">
          <Card className="p-3 w-64">
            <CardContent className="p-0">
              {selectedNode && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {t('knowledgeGraph.selected')}
                    </Badge>
                    <span className="text-sm font-medium">
                      {selectedNode.id}
                    </span>
                  </div>

                  {selectedNode.entity_type && (
                    <div className="text-xs">
                      <span className="font-medium">
                        {t('knowledgeGraph.entityType')}:{' '}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {selectedNode.entity_type}
                      </Badge>
                    </div>
                  )}

                  {selectedNode.pagerank && (
                    <div className="text-xs">
                      <span className="font-medium">
                        {t('knowledgeGraph.relevance')}:{' '}
                      </span>
                      <span>{(selectedNode.pagerank * 100).toFixed(1)}%</span>
                    </div>
                  )}

                  {selectedNode.description && (
                    <div className="text-xs">
                      <span className="font-medium">
                        {t('common.description')}:{' '}
                      </span>
                      <p className="text-gray-600 mt-1 line-clamp-3">
                        {selectedNode.description}
                      </p>
                    </div>
                  )}

                  {selectedNode.communities &&
                    selectedNode.communities.length > 0 && (
                      <div className="text-xs">
                        <span className="font-medium">
                          {t('knowledgeGraph.communities')}:{' '}
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedNode.communities
                            .slice(0, 3)
                            .map((community: string, index: number) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {community}
                              </Badge>
                            ))}
                          {selectedNode.communities.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{selectedNode.communities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              )}

              {hoveredNode && !selectedNode && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {t('knowledgeGraph.hovered')}
                    </Badge>
                    <span className="text-sm font-medium">
                      {hoveredNode.id}
                    </span>
                  </div>

                  {hoveredNode.entity_type && (
                    <div className="text-xs">
                      <Badge variant="secondary" className="text-xs">
                        {hoveredNode.entity_type}
                      </Badge>
                    </div>
                  )}

                  {hoveredNode.pagerank && (
                    <div className="text-xs text-gray-600">
                      {t('knowledgeGraph.relevance')}:{' '}
                      {(hoveredNode.pagerank * 100).toFixed(1)}%
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </TooltipProvider>
  );
};

export default EnhancedGraphInteraction;
