import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    backgroundColor: "#fff",
  },
  mainHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  mainOnly: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  list: {
    gap: 12,
    paddingTop: 8,
  },
  listItem: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#f3f3f3",
  },
  listItemText: {
    fontSize: 16,
  },
});

export default styles;
