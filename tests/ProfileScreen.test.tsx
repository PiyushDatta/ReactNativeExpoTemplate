import React from "react";
import { describe, expect, it } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

import { ProfileScreen } from "../src/screens/ProfileScreen";

describe("ProfileScreen", () => {
  it("renders profile header and settings section", () => {
    const { getByText } = renderWithProviders(<ProfileScreen />);

    expect(getByText("Taylor Avery")).toBeTruthy();
    expect(getByText("@taylor")).toBeTruthy();
    expect(getByText("Profile Settings")).toBeTruthy();
    expect(getByText("App Settings")).toBeTruthy();
    expect(getByText("small")).toBeTruthy();
    expect(getByText("medium")).toBeTruthy();
    expect(getByText("large")).toBeTruthy();
  });
});
