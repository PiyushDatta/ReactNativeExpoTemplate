import React, { useMemo } from "react";
import { View, TextInput } from "react-native";

import { createSearchBarStyles } from "../styles/SearchBarStyles";
import { useSettings } from "../context/SettingsContext";

type SearchBarProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
};

export function SearchBar({
  placeholder,
  onChangeText,
  value,
}: SearchBarProps) {
  const { size } = useSettings();
  const styles = useMemo(createSearchBarStyles, [size]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </View>
  );
}
