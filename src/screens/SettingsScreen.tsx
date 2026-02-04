import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

import { useSettings } from "../context/SettingsContext";
import { createSettingsScreenStyles } from "../styles/SettingsScreenStyles";
import { SettingsSizeSelector } from "../components/SettingsSizeSelector";

export function SettingsScreen() {
  const { size } = useSettings();
  const styles = useMemo(createSettingsScreenStyles, [size]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <SettingsSizeSelector />
    </SafeAreaView>
  );
}
