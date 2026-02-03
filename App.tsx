import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { features } from "./src/config/features";
import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  const TabsRoot = features.enableTabs
    ? require("./src/navigation/TabbedRoot").TabbedRoot
    : null;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      {TabsRoot ? <TabsRoot /> : <HomeScreen />}
    </SafeAreaProvider>
  );
}
