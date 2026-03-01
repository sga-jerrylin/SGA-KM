import { ElementDatum, Graph, IElementEvent } from '@antv/g6';
import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GraphLegend from './graph-legend';

import styles from './index.module.less';

const TooltipColorMap = {
  combo: 'red',
  node: 'black',
  edge: 'blue',
};

// 星云效果配置 - 渐进式加载优化
const NEBULA_CONFIG = {
  // 缩放阈值 - 控制渐进式加载
  zoomThresholds: {
    dots: 0.15, // 只显示白色小点
    color: 0.4, // 开始显示颜色
    glow: 0.8, // 开始显示发光效果
    labels: 1.2, // 开始显示文字标签
    full: 2.0, // 完整显示
  },
  // 节点尺寸 - 缩小以适应大数据量
  nodeSize: {
    dots: 3, // 白点模式
    color: 6, // 彩色模式
    glow: 12, // 发光模式
    labels: 20, // 标签模式
    full: 30, // 完整模式
  },
  labelConfig: {
    dots: { show: false, fontSize: 0, maxLength: 0 },
    color: { show: false, fontSize: 0, maxLength: 0 },
    glow: { show: false, fontSize: 0, maxLength: 0 },
    labels: { show: true, fontSize: 10, maxLength: 8 },
    full: { show: true, fontSize: 12, maxLength: 15 },
  },
  edgeWidth: {
    dots: 0.3,
    color: 0.5,
    glow: 1.0,
    labels: 1.5,
    full: 2.0,
  },
  // 多层分层阈值配置 - 全部使用力导向布局保持星云效果
  layers: [
    { maxNodes: 200, displayNodes: 200, name: 'tiny', layout: 'force-full' },
    { maxNodes: 500, displayNodes: 500, name: 'small', layout: 'force-fast' },
    { maxNodes: 1000, displayNodes: 800, name: 'medium', layout: 'force-fast' },
    {
      maxNodes: 2000,
      displayNodes: 1200,
      name: 'large',
      layout: 'force-light',
    },
    {
      maxNodes: 5000,
      displayNodes: 1800,
      name: 'xlarge',
      layout: 'force-light',
    },
    {
      maxNodes: 10000,
      displayNodes: 2500,
      name: 'huge',
      layout: 'force-light',
    },
    {
      maxNodes: Infinity,
      displayNodes: 3000,
      name: 'massive',
      layout: 'force-light',
    },
  ],
};

// 根据缩放级别获取显示模式
const getDisplayMode = (
  zoom: number,
): 'dots' | 'color' | 'glow' | 'labels' | 'full' => {
  const t = NEBULA_CONFIG.zoomThresholds;
  if (zoom < t.dots) return 'dots';
  if (zoom < t.color) return 'dots';
  if (zoom < t.glow) return 'color';
  if (zoom < t.labels) return 'glow';
  if (zoom < t.full) return 'labels';
  return 'full';
};

// 获取当前层级配置
const getLayerConfig = (nodeCount: number) => {
  for (const layer of NEBULA_CONFIG.layers) {
    if (nodeCount <= layer.maxNodes) {
      return layer;
    }
  }
  return NEBULA_CONFIG.layers[NEBULA_CONFIG.layers.length - 1];
};

// 计算节点重要性分数
const calculateNodeImportance = (nodes: any[], edges: any[]) => {
  // 计算连接度
  const nodeDegree: Record<string, number> = {};
  edges.forEach((edge: any) => {
    nodeDegree[edge.source] = (nodeDegree[edge.source] || 0) + 1;
    nodeDegree[edge.target] = (nodeDegree[edge.target] || 0) + 1;
  });

  // 计算 PageRank 近似值（基于连接度的迭代）
  const pageRank: Record<string, number> = {};
  const dampingFactor = 0.85;
  const iterations = 3; // 快速近似

  // 初始化
  nodes.forEach((node) => {
    pageRank[node.id] = 1 / nodes.length;
  });

  // 迭代计算
  for (let i = 0; i < iterations; i++) {
    const newRank: Record<string, number> = {};
    nodes.forEach((node) => {
      let sum = 0;
      edges.forEach((edge: any) => {
        if (edge.target === node.id) {
          const sourceDegree = nodeDegree[edge.source] || 1;
          sum += (pageRank[edge.source] || 0) / sourceDegree;
        }
      });
      newRank[node.id] =
        (1 - dampingFactor) / nodes.length + dampingFactor * sum;
    });
    Object.assign(pageRank, newRank);
  }

  // 综合评分：rank属性 + 连接度 + PageRank
  return nodes.map((node) => ({
    ...node,
    _importance:
      (node.rank || 0) * 100 +
      (nodeDegree[node.id] || 0) * 10 +
      (pageRank[node.id] || 0) * 1000,
    _degree: nodeDegree[node.id] || 0,
  }));
};

// 智能分层筛选节点
const filterNodesByImportance = (
  nodes: any[],
  edges: any[],
  maxNodes: number,
) => {
  if (nodes.length <= maxNodes) {
    return { nodes, edges, filtered: false };
  }

  console.log(
    `[KnowledgeGraph] 开始分层筛选: ${nodes.length} -> ${maxNodes} 节点`,
  );

  // 计算节点重要性
  const rankedNodes = calculateNodeImportance(nodes, edges);

  // 按重要性排序
  rankedNodes.sort((a, b) => b._importance - a._importance);

  // 选择最重要的节点
  const selectedNodes = rankedNodes.slice(0, maxNodes);
  const selectedNodeIds = new Set(selectedNodes.map((n) => n.id));

  // 筛选边：只保留两端都在选中节点中的边
  const filteredEdges = edges.filter(
    (edge: any) =>
      selectedNodeIds.has(edge.source) && selectedNodeIds.has(edge.target),
  );

  // 清理临时属性
  const cleanNodes = selectedNodes.map(
    ({ _importance, _degree, ...rest }) => rest,
  );

  console.log(
    `[KnowledgeGraph] 筛选完成: ${cleanNodes.length} 节点, ${filteredEdges.length} 边`,
  );

  return { nodes: cleanNodes, edges: filteredEdges, filtered: true };
};

// 实体类型颜色映射
const ENTITY_COLOR_MAP: Record<string, string> = {
  PERSON: '#00d4ff',
  ORGANIZATION: '#ff3366',
  LOCATION: '#00ff88',
  EVENT: '#ffaa00',
  CONCEPT: '#aa55ff',
  COMMUNITY: '#ffffff',
  GEO: '#00ff88',
  DATE: '#ffaa00',
  TIME: '#ffaa00',
  other: '#7799bb',
};

const getEntityColor = (entityType: string | undefined): string => {
  if (!entityType) return ENTITY_COLOR_MAP.other;
  const normalizedType = entityType.replace(/"/g, '').toUpperCase();
  return ENTITY_COLOR_MAP[normalizedType] || ENTITY_COLOR_MAP.other;
};

interface IProps {
  data: any;
  show: boolean;
  onNodeClick?: (node: any) => void;
  onNodeHover?: (node: any) => void;
  highlightedNodeId?: string | null;
  selectedNodeId?: string | null;
  showNodeLabels?: boolean;
  showEdgeLabels?: boolean;
  layoutType?: 'force' | 'circular' | 'hierarchical';
  interactionMode?: 'select' | 'pan' | 'zoom';
  enableAnimations?: boolean;
  animationDuration?: number;
}

const AnimatedForceGraph = ({
  data,
  show,
  onNodeClick,
  onNodeHover,
  highlightedNodeId,
  selectedNodeId,
  showNodeLabels = true,
  showEdgeLabels = false,
  layoutType = 'force',
  interactionMode = 'select',
  enableAnimations = true,
  animationDuration = 300,
}: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph | null>(null);
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleNodeTypes, setVisibleNodeTypes] = useState<string[]>([]);
  const [allNodeTypes, setAllNodeTypes] = useState<string[]>([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [displayMode, setDisplayMode] = useState<
    'tiny' | 'small' | 'medium' | 'large' | 'full'
  >('medium');
  const zoomLevelRef = useRef(1);

  useEffect(() => {
    if (data?.nodes) {
      const types = Array.from(
        new Set(data.nodes.map((n: any) => n.entity_type || 'other')),
      ) as string[];
      setAllNodeTypes(types);
      setVisibleNodeTypes((prev) => (prev.length === 0 ? types : prev));
    }
  }, [data]);

  const handleToggleNodeType = (type: string) => {
    setVisibleNodeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const filteredData = useMemo(() => {
    if (isEmpty(data)) {
      return { nodes: [], edges: [] };
    }
    const nodes = data.nodes.filter((n: any) =>
      visibleNodeTypes.includes(n.entity_type || 'other'),
    );
    const nodeIds = new Set(nodes.map((n: any) => n.id));
    const edges = (data.edges || []).filter(
      (e: any) => nodeIds.has(e.source) && nodeIds.has(e.target),
    );
    return { nodes, edges };
  }, [data, visibleNodeTypes]);

  // 原始节点数量（用于显示统计）
  const totalNodeCount = filteredData?.nodes?.length || 0;
  const totalEdgeCount = filteredData?.edges?.length || 0;

  // 获取当前层级配置
  const layerConfig = useMemo(
    () => getLayerConfig(totalNodeCount),
    [totalNodeCount],
  );

  // 是否启用了节点筛选
  const [isFiltered, setIsFiltered] = useState(false);

  const nextData = useMemo(() => {
    if (!isEmpty(filteredData)) {
      // 清除节点上的 combo 属性
      let cleanNodes = filteredData.nodes.map((node: any) => {
        const { combo, ...rest } = node;
        return rest;
      });
      let cleanEdges = filteredData.edges;

      // 根据层级配置进行智能分层筛选
      if (cleanNodes.length > layerConfig.displayNodes) {
        const result = filterNodesByImportance(
          cleanNodes,
          cleanEdges,
          layerConfig.displayNodes,
        );
        cleanNodes = result.nodes;
        cleanEdges = result.edges;
        setIsFiltered(result.filtered);
        console.log(
          `[KnowledgeGraph] 层级: ${layerConfig.name}, 显示: ${cleanNodes.length}/${totalNodeCount} 节点`,
        );
      } else {
        setIsFiltered(false);
      }

      return {
        nodes: cleanNodes,
        edges: cleanEdges,
      };
    }
    return { nodes: [], edges: [] };
  }, [filteredData, layerConfig, totalNodeCount]);

  // 获取实际渲染的节点数量
  const nodeCount = nextData?.nodes?.length || 0;

  // 判断是否为大图（用于性能优化）
  const isLargeGraph = layerConfig.layout === 'force-light';

  const getLayoutConfig = useCallback(() => {
    // 用户选择的布局
    if (layoutType === 'circular') {
      return {
        type: 'circular',
        radius: Math.max(300, Math.sqrt(nodeCount) * 20),
        startAngle: 0,
        endAngle: Math.PI * 2,
        animation: false,
      };
    }

    if (layoutType === 'hierarchical') {
      return {
        type: 'dagre',
        rankdir: 'TB',
        nodesep: 80,
        ranksep: 80,
        animation: false,
      };
    }

    // 根据层级配置选择布局
    const layoutName = layerConfig.layout;

    if (layoutName === 'force-light') {
      // 大数据量使用轻量级力导向布局 - 保持星云效果
      return {
        type: 'd3-force',
        preventOverlap: true,
        nodeSize: 30, // 更小的碰撞检测尺寸
        manyBody: {
          strength: -800, // 较弱斥力，快速计算
        },
        link: {
          distance: 80,
          strength: 0.2,
        },
        collide: {
          radius: 20,
          strength: 0.6,
        },
        center: {
          x: 0,
          y: 0,
          strength: 0.15,
        },
        alpha: 0.6,
        alphaDecay: 0.04, // 快速收敛
        alphaMin: 0.02,
        animation: false,
      };
    }

    if (layoutName === 'force-fast') {
      // 中等图使用简化的 d3-force
      return {
        type: 'd3-force',
        preventOverlap: true,
        nodeSize: 40,
        manyBody: {
          strength: -1200, // 中等斥力
        },
        link: {
          distance: 100,
          strength: 0.15,
        },
        collide: {
          radius: 30,
          strength: 0.7,
        },
        center: {
          x: 0,
          y: 0,
          strength: 0.1,
        },
        alpha: 0.7,
        alphaDecay: 0.025, // 较快收敛
        alphaMin: 0.015,
        animation: false,
      };
    }

    // 小图使用完整的 d3-force (force-full)
    return {
      type: 'd3-force',
      preventOverlap: true,
      nodeSize: 50,
      manyBody: {
        strength: -2000, // 强斥力
      },
      link: {
        distance: 150,
        strength: 0.1,
      },
      collide: {
        radius: 40,
        strength: 0.9,
      },
      center: {
        x: 0,
        y: 0,
        strength: 0.05,
      },
      alpha: 0.9,
      alphaDecay: 0.015,
      alphaMin: 0.005,
      animation: false,
    };
  }, [layoutType, layerConfig, nodeCount]);

  const render = useCallback(() => {
    const behaviors = [
      {
        type: 'drag-element',
        enableTransient: false, // 禁用过渡效果
        shadow: false, // 禁用阴影
      },
      interactionMode !== 'zoom' ? 'drag-canvas' : null,
      interactionMode !== 'pan' ? 'zoom-canvas' : null,
      'collapse-expand',
      {
        type: 'hover-activate',
        degree: 1,
        inactiveState: 'inactive',
        activeState: 'active',
      },
      {
        type: 'click-select',
        trigger: 'click',
        multiple: false,
      },
    ].filter(Boolean);

    const graph = new Graph({
      container: containerRef.current!,
      autoFit: 'view',
      autoResize: true,
      behaviors,
      plugins: [
        {
          type: 'tooltip',
          enterable: true,
          trigger: 'click', // 改为点击触发，更可靠
          style: {
            '.tooltip': {
              background: 'rgba(20, 25, 40, 0.95)',
              border: '1px solid rgba(100, 150, 255, 0.4)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: '#ffffff',
              fontSize: '14px',
              maxWidth: '350px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
            },
          },
          getContent: (e: IElementEvent, items: ElementDatum) => {
            if (Array.isArray(items) && items.length > 0) {
              if (items.some((x) => x?.isCombo)) {
                return `<div style="font-weight:600;color:#ff6b6b;font-size:16px;">${items?.[0]?.data?.label || 'Community'}</div>`;
              }
              let result = ``;
              items.forEach((item) => {
                const entityColor = getEntityColor(item?.entity_type as string);
                result += `<div style="color:#ffffff;">`;
                result += `<h3 style="margin:0 0 8px 0;color:${entityColor};font-size:16px;font-weight:600;word-break:break-word;">${String(item?.id || '').replace(/"/g, '')}</h3>`;
                if (item?.entity_type) {
                  result += `<div style="padding:4px 0;"><span style="color:#aab;">类型: </span><span style="color:${entityColor};">${String(item?.entity_type).replace(/"/g, '')}</span></div>`;
                }
                if (item?.weight) {
                  result += `<div style="padding:4px 0;"><span style="color:#aab;">权重: </span><span style="color:#4dabf7;">${item?.weight}</span></div>`;
                }
                if (item?.description) {
                  result += `<div style="padding:8px 0 0 0;color:#ccc;font-size:13px;line-height:1.5;max-height:150px;overflow-y:auto;">${item?.description}</div>`;
                }
                result += `</div>`;
              });
              return result;
            }
            return undefined;
          },
        },
      ],
      layout: getLayoutConfig(),
      node: {
        style: (model) => {
          const isHighlighted = highlightedNodeId === model.id;
          const isSelected = selectedNodeId === model.id;
          const currentZoom = zoomLevelRef.current;
          const mode = getDisplayMode(currentZoom);

          // 渐进式加载：根据缩放级别动态调整节点大小
          const baseSize = NEBULA_CONFIG.nodeSize[mode];
          const nodeRank = (model.rank as number) || 1;
          const sizeMultiplier = isSelected ? 1.8 : isHighlighted ? 1.4 : 1;
          const size = Math.min(
            baseSize * sizeMultiplier + nodeRank * 0.3,
            baseSize * 2,
          );

          // 渐进式颜色加载：dots 模式只显示白色小点
          const entityType = model.entity_type as string;
          const fullColor = getEntityColor(entityType);
          const nodeColor =
            mode === 'dots' ? 'rgba(255,255,255,0.8)' : fullColor;

          // 渐进式标签加载：只在 labels 和 full 模式显示标签
          const labelConf = NEBULA_CONFIG.labelConfig[mode];
          const showLabel = labelConf.show && showNodeLabels;
          const rawLabel = String(model.id).replace(/"/g, '');
          const labelText = showLabel
            ? rawLabel.slice(0, labelConf.maxLength) +
              (rawLabel.length > labelConf.maxLength ? '...' : '')
            : '';

          // 渐进式发光效果：只在 glow、labels、full 模式显示发光
          const enableGlow =
            mode === 'glow' ||
            mode === 'labels' ||
            mode === 'full' ||
            isSelected ||
            isHighlighted;
          const glowIntensity =
            mode === 'dots'
              ? 0
              : mode === 'color'
                ? 0
                : mode === 'glow'
                  ? 8
                  : mode === 'labels'
                    ? 10
                    : 12;
          const glowBlur = enableGlow ? glowIntensity : 0;

          return {
            size,
            fill: nodeColor,
            labelText,
            labelFontSize: labelConf.fontSize,
            labelOffsetY: size / 2 + 4,
            labelPlacement: 'bottom',
            labelWordWrap: true,
            labelFill: '#ffffff',
            labelFontWeight: 600,
            labelShadowColor: 'rgba(0,0,0,0.9)',
            labelShadowBlur: 3,
            // 节点边框 - 在 dots 模式下简化
            stroke:
              mode === 'dots'
                ? 'rgba(255,255,255,0.3)'
                : isSelected
                  ? '#ffffff'
                  : isHighlighted
                    ? '#ffffff'
                    : 'rgba(255,255,255,0.4)',
            lineWidth:
              mode === 'dots'
                ? 0.3
                : isSelected
                  ? 2
                  : isHighlighted
                    ? 1.5
                    : 0.5,
            opacity:
              highlightedNodeId && !isHighlighted && !isSelected ? 0.4 : 1,
            // 星云发光效果
            shadowColor: mode === 'dots' ? undefined : nodeColor,
            shadowBlur: isSelected || isHighlighted ? glowBlur * 1.5 : glowBlur,
            cursor: 'pointer',
          };
        },
        state: {
          active: {
            stroke: '#ffffff',
            lineWidth: 2,
            shadowBlur: 15,
          },
          inactive: {
            opacity: 0.3,
          },
          selected: {
            stroke: '#ffffff',
            lineWidth: 3,
            shadowBlur: 20,
          },
          dragging: {
            shadowBlur: 25,
            stroke: '#ffffff',
            lineWidth: 3,
          },
        },
      },
      edge: {
        style: (model) => {
          const currentZoom = zoomLevelRef.current;
          const mode = getDisplayMode(currentZoom);

          // 渐进式边宽度
          const baseWidth = NEBULA_CONFIG.edgeWidth[mode];
          const weight: number = Number(model?.weight) || 1;
          const lineWeight = baseWidth * (1 + weight * 0.05);
          const isConnectedToHighlighted =
            highlightedNodeId &&
            (model.source === highlightedNodeId ||
              model.target === highlightedNodeId);
          const isConnectedToSelected =
            selectedNodeId &&
            (model.source === selectedNodeId ||
              model.target === selectedNodeId);

          // 渐进式边颜色：dots 和 color 模式使用淡色
          const baseEdgeColor =
            mode === 'dots' ? 'rgba(150,180,220,0.4)' : '#4488cc';
          const edgeColor = isConnectedToSelected
            ? '#ff8855'
            : isConnectedToHighlighted
              ? '#66ccff'
              : baseEdgeColor;

          // 渐进式透明度
          const baseOpacity =
            mode === 'dots'
              ? 0.2
              : mode === 'color'
                ? 0.35
                : mode === 'glow'
                  ? 0.5
                  : 0.6;
          const finalOpacity =
            (highlightedNodeId || selectedNodeId) &&
            !isConnectedToHighlighted &&
            !isConnectedToSelected
              ? 0.08
              : baseOpacity;

          // 渐进式发光效果：只在 glow 及以上模式启用
          const enableEdgeGlow =
            mode === 'glow' ||
            mode === 'labels' ||
            mode === 'full' ||
            isConnectedToSelected ||
            isConnectedToHighlighted;
          const glowBlur = enableEdgeGlow
            ? isConnectedToSelected
              ? 8
              : isConnectedToHighlighted
                ? 6
                : 4
            : 0;

          // 渐进式边标签：只在 full 模式显示
          const showEdgeLabel = mode === 'full' && showEdgeLabels;

          return {
            stroke: edgeColor,
            lineWidth: Math.min(lineWeight, baseWidth * 1.5),
            opacity: finalOpacity,
            shadowColor: enableEdgeGlow ? edgeColor : undefined,
            shadowBlur: glowBlur,
            labelText: showEdgeLabel
              ? String(model.relation || '').replace(/"/g, '')
              : '',
            labelFontSize: 9,
            labelFill: '#ffffff',
            labelShadowColor: 'rgba(0,0,0,0.6)',
            labelShadowBlur: 2,
          };
        },
        state: {
          active: {
            stroke: '#66ccff',
            lineWidth: 1.2,
            opacity: 0.7,
          },
          inactive: {
            opacity: 0.06,
          },
          selected: {
            stroke: '#ff8855',
            lineWidth: 1.5,
            opacity: 0.85,
          },
        },
      },
    });

    if (graphRef.current) {
      graphRef.current.destroy();
    }

    graphRef.current = graph;

    graph.setData(nextData);

    if (onNodeClick) {
      graph.on('node:click', (event) => {
        const { data } = event;
        onNodeClick(data);
      });
    }

    if (onNodeHover) {
      graph.on('node:mouseenter', (event) => {
        const { data } = event;
        onNodeHover(data);
      });

      graph.on('node:mouseleave', () => {
        onNodeHover(null);
      });
    }

    if (enableAnimations) {
      graph.on('node:dragstart', (event) => {
        setIsAnimating(true);
        const { data } = event;
        graph.setItemState(data.id, 'dragging', true);
        const connectedEdges = graph.getRelatedEdgesData(data.id);
        const connectedNodes = graph.getNeighborsData(data.id);
        connectedEdges.forEach((edge) => {
          graph.setItemState(edge.id, 'active', true);
        });
        connectedNodes.forEach((node) => {
          graph.setItemState(node.id, 'active', true);
        });
      });

      graph.on('node:dragend', (event) => {
        setIsAnimating(false);
        const { data } = event;
        graph.setItemState(data.id, 'dragging', false);
        graph.getNodes().forEach((node) => {
          graph.clearItemStates(node.getID());
        });
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge.getID());
        });
      });
    }

    // 星云效果：监听缩放事件，动态更新节点和边样式
    let zoomUpdateTimer: ReturnType<typeof setTimeout> | null = null;
    graph.on('wheel', () => {
      const zoom = graph.getZoom();
      zoomLevelRef.current = zoom;

      // 防抖：避免频繁重绘
      if (zoomUpdateTimer) clearTimeout(zoomUpdateTimer);
      zoomUpdateTimer = setTimeout(() => {
        const newMode = getDisplayMode(zoom);
        // 只更新UI状态，不触发 render 重新执行
        setDisplayMode(newMode);
        setZoomLevel(zoom);
        // 使用 draw() 重绘节点样式，而不是重新创建图形
        graph.draw();
      }, 150);
    });

    graph.render();
  }, [
    nextData,
    highlightedNodeId,
    selectedNodeId,
    showNodeLabels,
    showEdgeLabels,
    layoutType,
    enableAnimations,
    animationDuration,
    onNodeClick,
    onNodeHover,
    getLayoutConfig,
    t,
    interactionMode,
  ]); // 移除 displayMode 依赖，避免循环

  useEffect(() => {
    if (!isEmpty(data)) {
      render();
    }
  }, [data, render]);

  const modeLabels: Record<string, string> = {
    dots: '星点',
    color: '彩色',
    glow: '发光',
    labels: '标签',
    full: '完整',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        ref={containerRef}
        className={`${styles.forceContainer} ${isAnimating ? 'animating' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          display: show ? 'block' : 'none',
          transition: enableAnimations ? 'all 0.3s ease' : 'none',
        }}
      />
      {show && !isEmpty(data?.nodes) && (
        <>
          <GraphLegend
            stats={{
              nodeCount: data.nodes.length,
              edgeCount: data.edges.length,
            }}
            nodeTypes={allNodeTypes}
            visibleNodeTypes={visibleNodeTypes}
            onToggleNodeType={handleToggleNodeType}
          />
          <div className={styles.zoomIndicator}>
            <span className={styles.zoomLevel}>
              {(zoomLevel * 100).toFixed(0)}%
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11 }}>
              {modeLabels[displayMode]}
            </span>
            {isFiltered && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                <span style={{ color: '#4dabf7', fontSize: 11 }}>
                  显示 {nodeCount}/{totalNodeCount} 节点
                </span>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AnimatedForceGraph;
