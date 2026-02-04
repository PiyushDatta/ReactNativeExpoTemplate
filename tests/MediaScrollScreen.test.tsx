import React from "react";
import { describe, expect, it, mock } from "bun:test";
import { fireEvent } from "@testing-library/react-native";

import { renderWithProviders } from "./utils/renderWithProviders";
import { MediaScrollScreen } from "../src/screens/MediaScrollScreen";

const featureState = {
  enableProfileScreen: true,
  enableMediaScreen: true,
  enableSettingsScreen: false,
  enableSearchBar: false,
  enableSampleList: false,
  enableTabs: true,
};

mock.module("../src/config/features", () => ({
  features: featureState,
}));

describe("MediaScrollScreen", () => {
  it("renders sample posts", () => {
    const { getByText } = renderWithProviders(<MediaScrollScreen />);

    expect(getByText("Jamie Rivera")).toBeTruthy();
    expect(getByText("@jamie")).toBeTruthy();
    expect(getByText("Weekend hike highlights.")).toBeTruthy();
  });

  it("navigates to Profile when enabled", () => {
    const { getByText } = renderWithProviders(<MediaScrollScreen />);

    (globalThis as any).__NAV_CALLS__ = [];
    fireEvent.press(getByText("Profile"));

    const calls = (globalThis as any).__NAV_CALLS__ ?? [];
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe("Profile");
  });

  it("refreshes instead of navigating when profile is disabled", () => {
    featureState.enableProfileScreen = false;
    const { getByText, getByTestId } = renderWithProviders(
      <MediaScrollScreen />,
    );

    (globalThis as any).__NAV_CALLS__ = [];

    const before = getByTestId("media-feed").props.extraData;
    fireEvent.press(getByText("Profile"));
    const after = getByTestId("media-feed").props.extraData;

    const calls = (globalThis as any).__NAV_CALLS__ ?? [];
    expect(calls.length).toBe(0);
    expect(after).toBeGreaterThan(before);

    featureState.enableProfileScreen = true;
  });
});
