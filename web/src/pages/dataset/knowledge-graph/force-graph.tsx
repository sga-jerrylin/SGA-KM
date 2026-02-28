import { ElementDatum, Graph, IElementEvent } from '@antv/g6';
import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './index.less';

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
  const nodeDegree: Record<string, number> = {};
  edges.forEach((edge: any) => {
    nodeDegree[edge.source] = (nodeDegree[edge.source] || 0) + 1;
    nodeDegree[edge.target] = (nodeDegree[edge.target] || 0) + 1;
  });

  // PageRank 近似值
  const pageRank: Record<string, number> = {};
  const dampingFactor = 0.85;
  const iterations = 3;

  nodes.forEach((node) => {
    pageRank[node.id] = 1 / nodes.length;
  });

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

  const rankedNodes = calculateNodeImportance(nodes, edges);
  rankedNodes.sort((a, b) => b._importance - a._importance);

  const selectedNodes = rankedNodes.slice(0, maxNodes);
  const selectedNodeIds = new Set(selectedNodes.map((n) => n.id));

  const filteredEdges = edges.filter(
    (edge: any) =>
      selectedNodeIds.has(edge.source) && selectedNodeIds.has(edge.target),
  );

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
  other: '#8899aa',
};

const getEntityColor = (entityType: string | undefined): string => {
  if (!entityType) return ENTITY_COLOR_MAP.other;
  const normalizedType = entityType.replace(/"/g, '').toUpperCase();
  return ENTITY_COLOR_MAP[normalizedType] || ENTITY_COLOR_MAP.other;
};

interface IProps {
  data: any;
  show: boolean;
}

const ForceGraph = ({ data, show }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [displayMode, setDisplayMode] = useState<
    'tiny' | 'small' | 'medium' | 'large' | 'full'
  >('medium');
  const zoomLevelRef = useRef(1);

  // 原始节点数量
  const totalNodeCount = data?.nodes?.length || 0;

  // 获取当前层级配置
  const layerConfig = useMemo(
    () => getLayerConfig(totalNodeCount),
    [totalNodeCount],
  );

  // 是否启用了节点筛选
  const [isFiltered, setIsFiltered] = useState(false);

  const nextData = useMemo(() => {
    if (!isEmpty(data)) {
      // 清除节点上的 combo 属性
      let cleanNodes = data.nodes.map((node: any) => {
        const { combo, ...rest } = node;
        return rest;
      });
      let cleanEdges = data.edges;

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
  }, [data, layerConfig, totalNodeCount]);

  // 获取实际渲染的节点数量
  const nodeCount = nextData?.nodes?.length || 0;

  // 判断是否为大图（用于性能优化）
  const isLargeGraph = layerConfig.layout === 'force-light';

  const render = useCallback(() => {
    // 根据层级配置选择布局
    let layoutConfig;
    const layoutName = layerConfig.layout;

    if (layoutName === 'force-light') {
      // 大数据量使用轻量级力导向布局 - 保持星云效果
      layoutConfig = {
        type: 'd3-force',
        preventOverlap: true,
        nodeSize: 30,
        manyBody: { strength: -800 },
        link: { distance: 80, strength: 0.2 },
        collide: { radius: 20, strength: 0.6 },
        center: { x: 0, y: 0, strength: 0.15 },
        alpha: 0.6,
        alphaDecay: 0.04,
        alphaMin: 0.02,
        animation: false,
      };
    } else if (layoutName === 'force-fast') {
      // 中等图使用简化的 d3-force
      layoutConfig = {
        type: 'd3-force',
        preventOverlap: true,
        nodeSize: 40,
        manyBody: { strength: -1200 },
        link: { distance: 100, strength: 0.15 },
        collide: { radius: 30, strength: 0.7 },
        center: { x: 0, y: 0, strength: 0.1 },
        alpha: 0.7,
        alphaDecay: 0.025,
        alphaMin: 0.015,
        animation: false,
      };
    } else {
      // 小图使用完整的 d3-force (force-full)
      layoutConfig = {
        type: 'd3-force',
        preventOverlap: true,
        nodeSize: 50,
        manyBody: { strength: -2000 },
        link: { distance: 150, strength: 0.1 },
        collide: { radius: 40, strength: 0.9 },
        center: { x: 0, y: 0, strength: 0.05 },
        alpha: 0.9,
        alphaDecay: 0.015,
        alphaMin: 0.005,
        animation: false,
      };
    }

    const graph = new Graph({
      container: containerRef.current!,
      autoFit: 'view',
      autoResize: true,
      behaviors: [
        {
          type: 'drag-element',
          enableTransient: false,
          shadow: false,
        },
        'drag-canvas',
        'zoom-canvas',
        'collapse-expand',
        {
          type: 'hover-activate',
          degree: 1,
        },
        {
          type: 'click-select',
          trigger: 'click',
          multiple: false,
        },
      ],
      plugins: [
        {
          type: 'tooltip',
          enterable: true,
          trigger: 'click', // 点击触发
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
                  result += `<div style="padding:4px 0;"><span style="color:#aab;">Type: </span><span style="color:${entityColor};">${String(item?.entity_type).replace(/"/g, '')}</span></div>`;
                }
                if (item?.weight) {
                  result += `<div style="padding:4px 0;"><span style="color:#aab;">Weight: </span><span style="color:#4dabf7;">${item?.weight}</span></div>`;
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
      layout: layoutConfig,
      node: {
        style: (model) => {
          const currentZoom = zoomLevelRef.current;
          const mode = getDisplayMode(currentZoom);

          // 渐进式加载：根据缩放级别动态调整节点大小
          const baseSize = NEBULA_CONFIG.nodeSize[mode];
          const nodeRank = (model.rank as number) || 1;
          const size = Math.min(baseSize + nodeRank * 0.3, baseSize * 2);

          // 渐进式颜色加载：dots 模式只显示白色小点
          const entityType = model.entity_type as string;
          const fullColor = getEntityColor(entityType);
          const nodeColor =
            mode === 'dots' ? 'rgba(255,255,255,0.8)' : fullColor;

          // 渐进式标签加载：只在 labels 和 full 模式显示标签
          const labelConf = NEBULA_CONFIG.labelConfig[mode];
          const showLabel = labelConf.show;
          const rawLabel = String(model.id).replace(/"/g, '');
          const labelText = showLabel
            ? rawLabel.slice(0, labelConf.maxLength) +
              (rawLabel.length > labelConf.maxLength ? '...' : '')
            : '';

          // 渐进式发光效果：只在 glow、labels、full 模式显示发光
          const enableGlow =
            mode === 'glow' || mode === 'labels' || mode === 'full';
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
            labelFill: '#ffffff',
            labelFontWeight: 600,
            labelShadowColor: 'rgba(0,0,0,0.9)',
            labelShadowBlur: 3,
            labelOffsetY: size / 2 + 4,
            labelPlacement: 'bottom',
            labelWordWrap: true,
            // 节点边框 - 在 dots 模式下简化
            stroke:
              mode === 'dots'
                ? 'rgba(255,255,255,0.3)'
                : 'rgba(255,255,255,0.4)',
            lineWidth: mode === 'dots' ? 0.3 : 0.5,
            // 星云发光效果
            shadowColor: mode === 'dots' ? undefined : nodeColor,
            shadowBlur: glowBlur,
            cursor: 'pointer',
          };
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

          // 渐进式边颜色：dots 和 color 模式使用淡色
          const edgeColor =
            mode === 'dots' ? 'rgba(150,180,220,0.4)' : '#4488cc';

          // 渐进式透明度
          const baseOpacity =
            mode === 'dots'
              ? 0.2
              : mode === 'color'
                ? 0.35
                : mode === 'glow'
                  ? 0.5
                  : 0.6;

          // 渐进式发光效果：只在 glow 及以上模式启用
          const enableEdgeGlow =
            mode === 'glow' || mode === 'labels' || mode === 'full';

          return {
            stroke: edgeColor,
            lineWidth: Math.min(lineWeight, baseWidth * 1.5),
            opacity: baseOpacity,
            shadowColor: enableEdgeGlow ? edgeColor : undefined,
            shadowBlur: enableEdgeGlow ? 4 : 0,
          };
        },
      },
    });

    if (graphRef.current) {
      graphRef.current.destroy();
    }

    graphRef.current = graph;

    graph.setData(nextData);

    // 星云效果：监听缩放事件
    let zoomUpdateTimer: ReturnType<typeof setTimeout> | null = null;
    graph.on('wheel', () => {
      const zoom = graph.getZoom();
      zoomLevelRef.current = zoom;
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
  }, [nextData, isLargeGraph, nodeCount]); // 移除 displayMode 依赖，避免循环

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
        className={styles.forceContainer}
        style={{
          width: '100%',
          height: '100%',
          display: show ? 'block' : 'none',
        }}
      />
      {show && (
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
      )}
    </div>
  );
};

export default ForceGraph;
