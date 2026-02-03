import { StyleSheet } from "react-native";
import { uiTokens } from "../config/uiSettings";

export const createTabTwoScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: uiTokens.spacing(24),
    },
    title: {
      fontSize: uiTokens.font(22),
      fontWeight: "600",
      marginBottom: uiTokens.spacing(8),
    },
    subtitle: {
      color: "#555555",
      fontSize: uiTokens.font(14),
    },
  });
