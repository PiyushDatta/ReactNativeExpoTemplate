import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/TabOneScreenStyles";

export function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.subtitle}>This is a dummy tab screen.</Text>
    </SafeAreaView>
  );
}
