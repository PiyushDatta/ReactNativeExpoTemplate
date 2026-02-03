import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable } from "react-native";

import { useSettings } from "../context/SettingsContext";
import { createSettingsScreenStyles } from "../styles/SettingsScreenStyles";

const SIZE_OPTIONS = ["small", "medium", "large"] as const;

export function SettingsScreen() {
  const { size, setSize } = useSettings();
  const styles = useMemo(createSettingsScreenStyles, [size]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>UI Size</Text>

      <View style={styles.row}>
        {SIZE_OPTIONS.map((option) => {
          const isActive = option === size;
          return (
            <Pressable
              key={option}
              style={[styles.pill, isActive && styles.pillActive]}
              onPress={() => setSize(option)}
            >
              <Text
                style={[styles.pillText, isActive && styles.pillTextActive]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
