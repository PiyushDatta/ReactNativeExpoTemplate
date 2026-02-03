import { StyleSheet } from "react-native";
import { uiTokens } from "../config/uiSettings";

export const createSearchBarStyles = () =>
  StyleSheet.create({
    container: {
      borderColor: "#d4d4d4",
      borderRadius: uiTokens.radius(12),
      borderWidth: 1,
      paddingHorizontal: uiTokens.spacing(12),
      paddingVertical: uiTokens.spacing(8),
    },
    input: {
      fontSize: uiTokens.font(16),
    },
  });
