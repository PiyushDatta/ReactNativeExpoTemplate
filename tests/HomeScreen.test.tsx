import React from "react";
import { describe, expect, it, mock } from "bun:test";
import { render } from "@testing-library/react-native";

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

    const { getByText } = render(<HomeScreen />);

    expect(getByText("MainScreen")).toBeTruthy();
  });

  it("renders MainScreen and the search input when enabled", () => {
    featureState.enableSearchBar = true;
    featureState.enableSampleList = false;

    const { getByText, getByPlaceholderText } = render(<HomeScreen />);

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByPlaceholderText("Search...")).toBeTruthy();
  });

  it("renders MainScreen and the list when enabled", () => {
    featureState.enableSearchBar = false;
    featureState.enableSampleList = true;

    const { getByText, getByTestId } = render(<HomeScreen />);

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByTestId("sample-list")).toBeTruthy();
  });
});
