import { mock } from "bun:test";

mock.module("@react-navigation/native", () => {
  const React = require("react");
  return {
    NavigationContainer: ({ children }: any) =>
      React.createElement("NavigationContainer", null, children),
    useNavigationContainerRef: () => ({
      current: {
        addListener: () => () => {},
        removeListener: () => {},
      },
    }),
  };
});
