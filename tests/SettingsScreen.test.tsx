import React from "react";
import { describe, expect, it } from "bun:test";
import { render, fireEvent } from "@testing-library/react-native";

import { SettingsProvider, useSettings } from "../src/context/SettingsContext";
import { SettingsScreen } from "../src/screens/SettingsScreen";

const SettingsValue = () => {
  const { size } = useSettings();
  return <>{size}</>;
};

describe("SettingsScreen", () => {
  it("renders size options and updates size", () => {
    const { getByText } = render(
      <SettingsProvider initialSize="medium">
        <SettingsScreen />
        <SettingsValue />
      </SettingsProvider>,
    );

    expect(getByText("small")).toBeTruthy();
    expect(getByText("medium")).toBeTruthy();
    expect(getByText("large")).toBeTruthy();
    expect(getByText("medium")).toBeTruthy();

    fireEvent.press(getByText("large"));

    expect(getByText("large")).toBeTruthy();
  });
});
