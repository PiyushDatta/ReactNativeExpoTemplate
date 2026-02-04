import { StyleSheet } from "react-native";

import { uiTokens } from "../config/uiSettings";

export const createProfileScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      gap: uiTokens.spacing(20),
      padding: uiTokens.spacing(20),
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: uiTokens.spacing(16),
    },
    avatar: {
      width: uiTokens.spacing(64),
      height: uiTokens.spacing(64),
      borderRadius: uiTokens.radius(32),
    },
    meta: {
      gap: uiTokens.spacing(4),
    },
    name: {
      fontSize: uiTokens.font(20),
      fontWeight: "600",
      color: "#111111",
    },
    handle: {
      fontSize: uiTokens.font(14),
      color: "#666666",
    },
    section: {
      gap: uiTokens.spacing(10),
      padding: uiTokens.spacing(14),
      borderRadius: uiTokens.radius(16),
      backgroundColor: "#f7f7f7",
    },
    sectionTitle: {
      fontSize: uiTokens.font(16),
      fontWeight: "600",
      color: "#111111",
    },
    sectionBody: {
      fontSize: uiTokens.font(14),
      color: "#555555",
      lineHeight: uiTokens.font(18),
    },
  });
