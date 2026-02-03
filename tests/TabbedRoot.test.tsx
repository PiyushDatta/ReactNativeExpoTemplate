import React from "react";
import { describe, expect, it } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

import { TabbedRoot } from "../src/navigation/TabbedRoot";

describe("TabbedRoot", () => {
  it("renders the main and tab screens", () => {
    const { getByText } = renderWithProviders(<TabbedRoot />);

    expect(getByText("MainScreen")).toBeTruthy();
    expect(getByText("Tab One")).toBeTruthy();
  });
});
