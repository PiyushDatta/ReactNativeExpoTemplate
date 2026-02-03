import React from "react";
import { describe, expect, it } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

import { TabTwoScreen } from "../src/screens/TabTwoScreen";

describe("TabTwoScreen", () => {
  it("renders title and subtitle", () => {
    const { getByText } = renderWithProviders(<TabTwoScreen />);

    expect(getByText("Tab Two")).toBeTruthy();
    expect(getByText("Another dummy tab screen.")).toBeTruthy();
  });
});
