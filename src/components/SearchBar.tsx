import React from "react";
import { View, TextInput } from "react-native";

import styles from "../styles/SearchBarStyles";

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
