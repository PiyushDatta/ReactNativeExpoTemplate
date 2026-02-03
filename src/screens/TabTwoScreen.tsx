import React, { useMemo } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createTabTwoScreenStyles } from "../styles/TabTwoScreenStyles";
import { useSettings } from "../context/SettingsContext";

export function TabTwoScreen() {
  const { size } = useSettings();
  const styles = useMemo(createTabTwoScreenStyles, [size]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text style={styles.subtitle}>Another dummy tab screen.</Text>
    </SafeAreaView>
  );
}
