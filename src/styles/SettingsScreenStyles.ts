import { StyleSheet } from "react-native";

import { uiTokens } from "../config/uiSettings";

export const createSettingsScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: uiTokens.spacing(24),
      gap: uiTokens.spacing(16),
    },
    title: {
      fontSize: uiTokens.font(24),
      fontWeight: "600",
    },
    subtitle: {
      fontSize: uiTokens.font(16),
      color: "#555555",
    },
    row: {
      flexDirection: "row",
      gap: uiTokens.spacing(12),
    },
    pill: {
      paddingHorizontal: uiTokens.spacing(14),
      paddingVertical: uiTokens.spacing(8),
      borderRadius: uiTokens.radius(999),
      backgroundColor: "#f0f0f0",
    },
    pillActive: {
      backgroundColor: "#222222",
    },
    pillText: {
      fontSize: uiTokens.font(14),
      color: "#222222",
      textTransform: "capitalize",
    },
    pillTextActive: {
      color: "#ffffff",
    },
  });
