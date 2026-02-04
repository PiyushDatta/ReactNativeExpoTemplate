import React from "react";
import { describe, expect, it } from "bun:test";
import { fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "./utils/renderWithProviders";
import { useSettings } from "../src/context/SettingsContext";
import { SettingsScreen } from "../src/screens/SettingsScreen";

const SettingsValue = () => {
  const { size } = useSettings();
  return <>{size}</>;
};

describe("SettingsScreen", () => {
  it("renders size options and updates size", () => {
    const { getByText } = renderWithProviders(
      <>
        <SettingsScreen />
        <SettingsValue />
      </>,
    );

    expect(getByText("small")).toBeTruthy();
    expect(getByText("medium")).toBeTruthy();
    expect(getByText("large")).toBeTruthy();
    expect(getByText("medium")).toBeTruthy();

    fireEvent.press(getByText("large"));

    expect(getByText("large")).toBeTruthy();
  });
});
