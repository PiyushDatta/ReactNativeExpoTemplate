import React, { useMemo } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createTabOneScreenStyles } from "../styles/TabOneScreenStyles";
import { useSettings } from "../context/SettingsContext";

export function TabOneScreen() {
  const { size } = useSettings();
  const styles = useMemo(createTabOneScreenStyles, [size]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.subtitle}>This is a dummy tab screen.</Text>
    </SafeAreaView>
  );
}
