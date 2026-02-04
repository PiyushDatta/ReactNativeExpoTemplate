import { StyleSheet } from "react-native";

import { uiTokens } from "../config/uiSettings";

export const createMediaScrollStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    topNav: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: uiTokens.spacing(16),
      paddingVertical: uiTokens.spacing(12),
      borderBottomWidth: 1,
      borderBottomColor: "#eeeeee",
      backgroundColor: "#ffffff",
    },
    topNavLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: uiTokens.spacing(10),
      flex: 1,
    },
    topNavCenter: {
      flex: 1,
      alignItems: "center",
    },
    topNavRight: {
      flexDirection: "row",
      gap: uiTokens.spacing(12),
      flex: 1,
      justifyContent: "flex-end",
    },
    navAvatar: {
      width: uiTokens.spacing(36),
      height: uiTokens.spacing(36),
      borderRadius: uiTokens.radius(18),
    },
    navTitle: {
      fontSize: uiTokens.font(16),
      fontWeight: "600",
      color: "#111111",
    },
    navAction: {
      fontSize: uiTokens.font(12),
      color: "#1d9bf0",
      fontWeight: "600",
    },
    list: {
      gap: uiTokens.spacing(16),
      padding: uiTokens.spacing(16),
      paddingBottom: uiTokens.spacing(84),
    },
    card: {
      backgroundColor: "#f7f7f7",
      borderRadius: uiTokens.radius(16),
      gap: uiTokens.spacing(12),
      padding: uiTokens.spacing(16),
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: uiTokens.spacing(12),
    },
    avatar: {
      width: uiTokens.spacing(44),
      height: uiTokens.spacing(44),
      borderRadius: uiTokens.radius(22),
    },
    userMeta: {
      gap: uiTokens.spacing(2),
    },
    userName: {
      fontSize: uiTokens.font(16),
      fontWeight: "600",
    },
    userHandle: {
      color: "#555555",
      fontSize: uiTokens.font(13),
    },
    content: {
      fontSize: uiTokens.font(15),
      lineHeight: uiTokens.font(20),
      color: "#222222",
    },
    media: {
      width: "100%",
      height: uiTokens.spacing(190),
      backgroundColor: "#e2e2e2",
    },
    mediaWrapper: {
      borderRadius: uiTokens.radius(12),
      overflow: "hidden",
    },
    videoStub: {
      position: "relative",
    },
    videoOverlay: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    videoLabel: {
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#ffffff",
      paddingHorizontal: uiTokens.spacing(12),
      paddingVertical: uiTokens.spacing(6),
      borderRadius: uiTokens.radius(999),
      fontSize: uiTokens.font(12),
      fontWeight: "600",
      textTransform: "uppercase",
    },
    bottomNav: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: uiTokens.spacing(12),
      borderTopWidth: 1,
      borderTopColor: "#eeeeee",
      backgroundColor: "#ffffff",
    },
    bottomItem: {
      fontSize: uiTokens.font(12),
      color: "#666666",
      fontWeight: "500",
    },
    bottomItemActive: {
      fontSize: uiTokens.font(12),
      color: "#1d9bf0",
      fontWeight: "700",
    },
  });
