import { StyleSheet } from "react-native";
import { uiTokens } from "../config/uiSettings";

export const createHomeScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      gap: uiTokens.spacing(16),
      padding: uiTokens.spacing(24),
    },
    mainHeader: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: uiTokens.spacing(8),
    },
    mainOnly: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    mainTitle: {
      fontSize: uiTokens.font(24),
      fontWeight: "600",
    },
    list: {
      gap: uiTokens.spacing(12),
      paddingTop: uiTokens.spacing(8),
    },
    listItem: {
      backgroundColor: "#f3f3f3",
      borderRadius: uiTokens.radius(12),
      padding: uiTokens.spacing(14),
    },
    listItemText: {
      fontSize: uiTokens.font(16),
    },
  });
