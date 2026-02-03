import React from "react";
import { describe, expect, it, mock } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

const featureState = {
  enableSearchBar: false,
  enableSampleList: false,
  enableTabs: false,
};

mock.module("../src/config/features", () => ({
  features: featureState,
}));

import { HomeScreen } from "../src/screens/HomeScreen";

describe("HomeScreen", () => {
  it("renders MainScreen by default", () => {
    featureState.enableSearchBar = false;
    featureState.enableSampleList = false;

    const { getByText } = renderWithProviders(<HomeScreen />);

    expect(getByText("MainScreen")).toBeTruthy();
  });

  it("renders MainScreen and the search input when enabled", () => {
    featureState.enableSearchBar = true;
    featureState.enableSampleList = false;

    const { getByText, getByPlaceholderText } = renderWithProviders(
      <HomeScreen />,
    );

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByPlaceholderText("Search...")).toBeTruthy();
  });

  it("renders MainScreen and the list when enabled", () => {
    featureState.enableSearchBar = false;
    featureState.enableSampleList = true;

    const { getByText } = renderWithProviders(<HomeScreen />);

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByText("First item")).toBeTruthy();
    expect(getByText("Second item")).toBeTruthy();
    expect(getByText("Third item")).toBeTruthy();
  });
});
