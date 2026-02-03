import React from "react";
import { describe, expect, it } from "bun:test";
import { renderWithProviders } from "./utils/renderWithProviders";

import { TabOneScreen } from "../src/screens/TabOneScreen";

describe("TabOneScreen", () => {
  it("renders title and subtitle", () => {
    const { getByText } = renderWithProviders(<TabOneScreen />);

    expect(getByText("Tab One")).toBeTruthy();
    expect(getByText("This is a dummy tab screen.")).toBeTruthy();
  });
});
