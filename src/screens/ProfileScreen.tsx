import React, { useMemo } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSettings } from "../context/SettingsContext";
import { createProfileScreenStyles } from "../styles/ProfileScreenStyles";
import { SettingsSizeSelector } from "../components/SettingsSizeSelector";

export function ProfileScreen() {
  const { size } = useSettings();
  const styles = useMemo(createProfileScreenStyles, [size]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/120?img=14" }}
        />
        <View style={styles.meta}>
          <Text style={styles.name}>Taylor Avery</Text>
          <Text style={styles.handle}>@taylor</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        <Text style={styles.sectionBody}>
          Manage your profile preferences and app appearance below.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <SettingsSizeSelector />
      </View>
    </SafeAreaView>
  );
}
