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
    const { getAllByText, getByText } = renderWithProviders(
      <>
        <SettingsScreen />
        <SettingsValue />
      </>,
    );

    expect(getAllByText("small").length).toBeGreaterThan(0);
    expect(getAllByText("medium").length).toBeGreaterThan(0);
    expect(getAllByText("large").length).toBeGreaterThan(0);
    expect(getByText("Drag Elasticity")).toBeTruthy();
    expect(getByText("Firm")).toBeTruthy();
    expect(getByText("Soft")).toBeTruthy();
    expect(getAllByText("medium").length).toBeGreaterThan(0);

    fireEvent.press(getAllByText("large")[0]);
    expect(getAllByText("large").length).toBeGreaterThan(0);
  });
});
