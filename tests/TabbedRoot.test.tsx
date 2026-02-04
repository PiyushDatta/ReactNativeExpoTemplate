import React from "react";
import { describe, expect, it, mock } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

const featureState = {
  enableMediaScreen: true,
  enableSettingsScreen: false,
  enableSearchBar: false,
  enableSampleList: false,
  enableTabs: true,
};

mock.module("../src/config/features", () => ({
  features: featureState,
}));

const loadTabbedRoot = async () => {
  const module = await import(
    `../src/navigation/TabbedRoot?test=${Date.now()}`
  );
  return module.TabbedRoot;
};

describe("TabbedRoot", () => {
  it("renders the main and tab screens", async () => {
    const TabbedRoot = await loadTabbedRoot();
    const { getByText } = renderWithProviders(<TabbedRoot />);

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByText("Tab One")).toBeTruthy();
    expect(getByText("Media Scroll")).toBeTruthy();
  });
});
