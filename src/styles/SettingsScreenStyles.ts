import { StyleSheet } from "react-native";

import { uiTokens } from "../config/uiSettings";

export const createSettingsScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: uiTokens.spacing(16),
      padding: uiTokens.spacing(24),
    },
    title: {
      fontSize: uiTokens.font(24),
      fontWeight: "600",
    },
    section: {
      gap: uiTokens.spacing(12),
    },
    sliderRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: uiTokens.spacing(8),
    },
    slider: {
      flex: 1,
      height: uiTokens.spacing(24),
    },
    sliderLabel: {
      fontSize: uiTokens.font(12),
      color: "#666666",
      fontWeight: "600",
    },
    sliderValue: {
      fontSize: uiTokens.font(12),
      color: "#1d9bf0",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    subtitle: {
      color: "#555555",
      fontSize: uiTokens.font(16),
    },
    row: {
      flexDirection: "row",
      gap: uiTokens.spacing(12),
    },
    pill: {
      backgroundColor: "#f0f0f0",
      borderRadius: uiTokens.radius(999),
      paddingHorizontal: uiTokens.spacing(14),
      paddingVertical: uiTokens.spacing(8),
    },
    pillActive: {
      backgroundColor: "#222222",
    },
    pillText: {
      color: "#222222",
      fontSize: uiTokens.font(14),
      textTransform: "capitalize",
    },
    pillTextActive: {
      color: "#ffffff",
    },
  });
