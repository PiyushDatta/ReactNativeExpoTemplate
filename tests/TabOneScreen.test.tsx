import React from "react";
import { describe, expect, it } from "bun:test";
import { render } from "@testing-library/react-native";

import { TabOneScreen } from "../src/screens/TabOneScreen";

describe("TabOneScreen", () => {
  it("renders title and subtitle", () => {
    const { getByText } = render(<TabOneScreen />);

    expect(getByText("Tab One")).toBeTruthy();
    expect(getByText("This is a dummy tab screen.")).toBeTruthy();
  });
});
