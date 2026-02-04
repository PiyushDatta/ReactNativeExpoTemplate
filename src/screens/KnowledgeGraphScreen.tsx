import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  PanResponder,
  LayoutChangeEvent,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSettings } from "../context/SettingsContext";
import {
  createKnowledgeGraphStyles,
  MINI_MAP_SIZE,
  EDGE_HEIGHT,
} from "../styles/KnowledgeGraphScreenStyles";

export type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  tone: "primary" | "secondary" | "accent";
};

export type Edge = {
  from: string;
  to: string;
  strength: 1 | 2 | 3;
};

const GRAPH_SIZE = 1400;

const DEFAULT_NODES: Node[] = [
  {
    id: "design",
    label: "Design",
    x: -360,
    y: -220,
    size: 86,
    tone: "primary",
  },
  {
    id: "frontend",
    label: "Frontend",
    x: 120,
    y: -320,
    size: 78,
    tone: "accent",
  },
  {
    id: "backend",
    label: "Backend",
    x: 360,
    y: -40,
    size: 76,
    tone: "secondary",
  },
  { id: "ai", label: "AI/ML", x: -80, y: 320, size: 70, tone: "accent" },
  {
    id: "product",
    label: "Product",
    x: -420,
    y: 120,
    size: 72,
    tone: "secondary",
  },
  { id: "data", label: "Data", x: 140, y: 140, size: 80, tone: "primary" },
  { id: "infra", label: "Infra", x: 420, y: -320, size: 66, tone: "secondary" },
  {
    id: "research",
    label: "Research",
    x: -120,
    y: 40,
    size: 64,
    tone: "primary",
  },
  { id: "growth", label: "Growth", x: -480, y: -320, size: 60, tone: "accent" },
  {
    id: "security",
    label: "Security",
    x: 520,
    y: 200,
    size: 62,
    tone: "secondary",
  },
  {
    id: "community",
    label: "Community",
    x: -520,
    y: 260,
    size: 62,
    tone: "accent",
  },
];

const DEFAULT_EDGES: Edge[] = [
  { from: "design", to: "frontend", strength: 2 },
  { from: "frontend", to: "backend", strength: 3 },
  { from: "backend", to: "data", strength: 2 },
  { from: "data", to: "ai", strength: 2 },
  { from: "product", to: "design", strength: 1 },
  { from: "product", to: "data", strength: 2 },
  { from: "infra", to: "backend", strength: 1 },
  { from: "frontend", to: "ai", strength: 1 },
  { from: "research", to: "design", strength: 2 },
  { from: "research", to: "data", strength: 3 },
  { from: "growth", to: "product", strength: 2 },
];

export type KnowledgeGraphData = {
  nodes: Node[];
  edges: Edge[];
};

const getNode = (nodes: Node[], id: string) =>
  nodes.find((node) => node.id === id);

type KnowledgeGraphScreenProps = {
  data?: KnowledgeGraphData;
};

export function KnowledgeGraphScreen({ data }: KnowledgeGraphScreenProps) {
  const { size, elasticity } = useSettings();
  const styles = useMemo(createKnowledgeGraphStyles, [size]);
  const nodes = data?.nodes ?? DEFAULT_NODES;
  const edges = data?.edges ?? DEFAULT_EDGES;
  const translate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const [viewCenter, setViewCenter] = useState({ x: 0, y: 0 });
  const [viewSize, setViewSize] = useState({ width: 0, height: 0 });
  const [bounds, setBounds] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 });

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

  const softClamp = (
    value: number,
    min: number,
    max: number,
    amount: number,
  ) => {
    if (value < min) {
      return min + (value - min) * amount;
    }
    if (value > max) {
      return max + (value - max) * amount;
    }
    return value;
  };

  const elasticityValue = elasticity;

  const getBounds = () => {
    const maxOffsetX = Math.max(0, (GRAPH_SIZE - viewSize.width) / 2);
    const maxOffsetY = Math.max(0, (GRAPH_SIZE - viewSize.height) / 2);
    return {
      minX: -maxOffsetX,
      maxX: maxOffsetX,
      minY: -maxOffsetY,
      maxY: maxOffsetY,
    };
  };

  useEffect(() => {
    const id = translate.addListener((value) => {
      setOffset({ x: value.x, y: value.y });
    });
    return () => {
      translate.removeListener(id);
    };
  }, [translate]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderTerminationRequest: () => false,
        onPanResponderGrant: () => {
          translate.stopAnimation((value) => {
            dragStart.current = { x: value.x, y: value.y };
          });
        },
        onPanResponderMove: (_, gesture) => {
          const { minX, maxX, minY, maxY } = getBounds();
          const nextX = dragStart.current.x + gesture.dx * 1.35;
          const nextY = dragStart.current.y + gesture.dy * 1.35;
          const clamped = {
            x: softClamp(nextX, minX, maxX, elasticityValue),
            y: softClamp(nextY, minY, maxY, elasticityValue),
          };
          translate.setValue(clamped);
        },
        onPanResponderRelease: (_, gesture) => {
          const { minX, maxX, minY, maxY } = getBounds();
          const inertiaX =
            dragStart.current.x + gesture.dx * 1.35 + gesture.vx * 280;
          const inertiaY =
            dragStart.current.y + gesture.dy * 1.35 + gesture.vy * 280;
          const target = {
            x: clamp(inertiaX, minX, maxX),
            y: clamp(inertiaY, minY, maxY),
          };
          Animated.spring(translate, {
            toValue: {
              x: target.x,
              y: target.y,
            },
            speed: 8,
            bounciness: 12,
            useNativeDriver: false,
          }).start();
        },
      }),
    [
      translate,
      viewCenter.x,
      viewCenter.y,
      viewSize.width,
      viewSize.height,
      elasticity,
    ],
  );

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setViewCenter({ x: width / 2, y: height / 2 });
    setViewSize({ width, height });
  };

  const computeBounds = (canvasCenter: { x: number; y: number }) => {
    const xs = nodes.map((node) => node.x);
    const ys = nodes.map((node) => node.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    setBounds({ minX, maxX, minY, maxY });
  };

  React.useEffect(() => {
    computeBounds(viewCenter);
  }, [viewCenter.x, viewCenter.y, nodes]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Knowledge Graph</Text>
        <Text style={styles.subtitle}>Drag to explore the map</Text>
      </View>

      <View
        style={styles.canvas}
        onLayout={onLayout}
        {...panResponder.panHandlers}
        pointerEvents="box-only"
      >
        <Animated.View
          style={[
            styles.graph,
            {
              width: GRAPH_SIZE,
              height: GRAPH_SIZE,
              left: viewCenter.x - GRAPH_SIZE / 2,
              top: viewCenter.y - GRAPH_SIZE / 2,
              transform: translate.getTranslateTransform(),
            },
          ]}
          pointerEvents="none"
        >
          {edges.map((edge, index) => {
            const from = getNode(nodes, edge.from);
            const to = getNode(nodes, edge.to);
            if (!from || !to) return null;

            const x1 = GRAPH_SIZE / 2 + from.x;
            const y1 = GRAPH_SIZE / 2 + from.y;
            const x2 = GRAPH_SIZE / 2 + to.x;
            const y2 = GRAPH_SIZE / 2 + to.y;

            const dx = x2 - x1;
            const dy = y2 - y1;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;

            return (
              <View
                key={`${edge.from}-${edge.to}-${index}`}
                style={[
                  styles.edge,
                  styles[`edgeStrength${edge.strength}`],
                  {
                    width: length,
                    left: midX - length / 2,
                    top: midY - EDGE_HEIGHT / 2,
                    transform: [{ rotateZ: `${angle}deg` }],
                  },
                ]}
              />
            );
          })}

          {nodes.map((node) => (
            <View
              key={node.id}
              style={[
                styles.node,
                styles[`node${node.tone}`],
                {
                  width: node.size,
                  height: node.size,
                  borderRadius: node.size / 2,
                  transform: [
                    { translateX: GRAPH_SIZE / 2 + node.x - node.size / 2 },
                    { translateY: GRAPH_SIZE / 2 + node.y - node.size / 2 },
                  ],
                },
              ]}
            >
              <Text style={styles.nodeLabel}>{node.label}</Text>
            </View>
          ))}
        </Animated.View>
      </View>

      <View style={styles.miniMap}>
        <View style={styles.miniMapInner}>
          {edges.map((edge, index) => {
            const from = getNode(nodes, edge.from);
            const to = getNode(nodes, edge.to);
            if (!from || !to) return null;

            const x1 = ((from.x + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;
            const y1 = ((from.y + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;
            const x2 = ((to.x + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;
            const y2 = ((to.y + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;

            const dx = x2 - x1;
            const dy = y2 - y1;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;

            return (
              <View
                key={`mini-${edge.from}-${edge.to}-${index}`}
                style={[
                  styles.miniEdge,
                  styles[`miniEdgeStrength${edge.strength}`],
                  {
                    width: length,
                    left: midX - length / 2,
                    top: midY - 0.5,
                    transform: [{ rotateZ: `${angle}deg` }],
                  },
                ]}
              />
            );
          })}
          {nodes.map((node) => {
            const x = ((node.x + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;
            const y = ((node.y + GRAPH_SIZE / 2) / GRAPH_SIZE) * MINI_MAP_SIZE;
            return (
              <View
                key={`mini-node-${node.id}`}
                style={[
                  styles.miniNode,
                  {
                    transform: [{ translateX: x }, { translateY: y }],
                  },
                ]}
              />
            );
          })}
          <View
            style={[
              styles.miniViewport,
              {
                width: (viewSize.width / GRAPH_SIZE) * MINI_MAP_SIZE,
                height: (viewSize.height / GRAPH_SIZE) * MINI_MAP_SIZE,
                transform: [
                  {
                    translateX:
                      ((GRAPH_SIZE / 2 - offset.x - viewSize.width / 2) /
                        GRAPH_SIZE) *
                      MINI_MAP_SIZE,
                  },
                  {
                    translateY:
                      ((GRAPH_SIZE / 2 - offset.y - viewSize.height / 2) /
                        GRAPH_SIZE) *
                      MINI_MAP_SIZE,
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
