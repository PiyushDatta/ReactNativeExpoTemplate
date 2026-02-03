import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/TabTwoScreenStyles";

export function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text style={styles.subtitle}>Another dummy tab screen.</Text>
    </SafeAreaView>
  );
}
