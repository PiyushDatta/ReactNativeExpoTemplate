import React from "react";
import { describe, expect, it } from "bun:test";
import { render } from "@testing-library/react-native";

import { TabTwoScreen } from "../src/screens/TabTwoScreen";

describe("TabTwoScreen", () => {
  it("renders title and subtitle", () => {
    const { getByText } = render(<TabTwoScreen />);

    expect(getByText("Tab Two")).toBeTruthy();
    expect(getByText("Another dummy tab screen.")).toBeTruthy();
  });
});
