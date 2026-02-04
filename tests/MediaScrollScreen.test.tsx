import React from "react";
import { describe, expect, it } from "bun:test";

import { renderWithProviders } from "./utils/renderWithProviders";
import { MediaScrollScreen } from "../src/screens/MediaScrollScreen";

describe("MediaScrollScreen", () => {
  it("renders sample posts", () => {
    const { getByText } = renderWithProviders(<MediaScrollScreen />);

    expect(getByText("Jamie Rivera")).toBeTruthy();
    expect(getByText("@jamie")).toBeTruthy();
    expect(getByText("Weekend hike highlights.")).toBeTruthy();
  });
});
