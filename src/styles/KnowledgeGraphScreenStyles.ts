import { StyleSheet } from "react-native";

import { uiTokens } from "../config/uiSettings";

export const MINI_MAP_SIZE = 120;
export const EDGE_HEIGHT = 2;

export const createKnowledgeGraphStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    header: {
      paddingHorizontal: uiTokens.spacing(16),
      paddingVertical: uiTokens.spacing(12),
      borderBottomWidth: 1,
      borderBottomColor: "#eeeeee",
      backgroundColor: "#ffffff",
    },
    title: {
      fontSize: uiTokens.font(18),
      fontWeight: "700",
      color: "#111111",
    },
    subtitle: {
      fontSize: uiTokens.font(12),
      color: "#666666",
    },
    canvas: {
      flex: 1,
      overflow: "hidden",
    },
    graph: {
      position: "absolute",
    },
    edge: {
      position: "absolute",
      backgroundColor: "rgba(30,30,30,0.18)",
    },
    edgeStrength1: {
      height: 1,
      backgroundColor: "rgba(30,30,30,0.18)",
    },
    edgeStrength2: {
      height: 2,
      backgroundColor: "rgba(30,30,30,0.35)",
    },
    edgeStrength3: {
      height: 3,
      backgroundColor: "rgba(30,30,30,0.6)",
    },
    node: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: uiTokens.spacing(8),
      backgroundColor: "#111111",
      borderWidth: 2,
      borderColor: "rgba(255,255,255,0.12)",
    },
    nodePrimary: {
      backgroundColor: "#101418",
      borderColor: "rgba(29,155,240,0.6)",
      shadowColor: "#1d9bf0",
      shadowOpacity: 0.25,
      shadowRadius: 12,
    },
    nodeSecondary: {
      backgroundColor: "#151515",
      borderColor: "rgba(255,255,255,0.2)",
      shadowColor: "#000000",
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    nodeAccent: {
      backgroundColor: "#0b1620",
      borderColor: "rgba(56,189,248,0.55)",
      shadowColor: "#38bdf8",
      shadowOpacity: 0.25,
      shadowRadius: 12,
    },
    nodeLabel: {
      fontSize: uiTokens.font(12),
      color: "#ffffff",
      fontWeight: "600",
      textAlign: "center",
    },
    miniMap: {
      position: "absolute",
      right: uiTokens.spacing(16),
      bottom: uiTokens.spacing(20),
      backgroundColor: "#ffffff",
      borderRadius: uiTokens.radius(12),
      padding: uiTokens.spacing(8),
      borderWidth: 1,
      borderColor: "#e6e6e6",
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
    },
    miniMapInner: {
      width: MINI_MAP_SIZE,
      height: MINI_MAP_SIZE,
      backgroundColor: "#f5f5f5",
      borderRadius: uiTokens.radius(10),
    },
    miniNode: {
      position: "absolute",
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "#111111",
    },
    miniEdge: {
      position: "absolute",
      height: 1,
      backgroundColor: "rgba(17,17,17,0.3)",
    },
    miniEdgeStrength1: {
      height: 1,
      backgroundColor: "rgba(17,17,17,0.3)",
    },
    miniEdgeStrength2: {
      height: 1.5,
      backgroundColor: "rgba(17,17,17,0.5)",
    },
    miniEdgeStrength3: {
      height: 2,
      backgroundColor: "rgba(17,17,17,0.7)",
    },
    miniViewport: {
      position: "absolute",
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: "#1d9bf0",
      borderRadius: uiTokens.radius(6),
      backgroundColor: "rgba(29,155,240,0.08)",
    },
  });
