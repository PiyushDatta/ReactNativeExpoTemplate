import React from "react";
import { describe, expect, it } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

import { ProfileScreen } from "../src/screens/ProfileScreen";

describe("ProfileScreen", () => {
  it("renders profile header and settings section", () => {
    const { getByText, getAllByText } = renderWithProviders(<ProfileScreen />);

    expect(getByText("Taylor Avery")).toBeTruthy();
    expect(getByText("@taylor")).toBeTruthy();
    expect(getByText("Profile Settings")).toBeTruthy();
    expect(getByText("App Settings")).toBeTruthy();
    expect(getAllByText("small").length).toBeGreaterThan(0);
    expect(getAllByText("medium").length).toBeGreaterThan(0);
    expect(getAllByText("large").length).toBeGreaterThan(0);
    expect(getByText("Drag Elasticity")).toBeTruthy();
    expect(getByText("Firm")).toBeTruthy();
    expect(getByText("Soft")).toBeTruthy();
  });
});
