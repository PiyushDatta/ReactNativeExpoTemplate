import React from "react";
import { describe, expect, it } from "bun:test";
import { render, fireEvent } from "@testing-library/react-native";

import { SearchBar } from "../src/components/SearchBar";

describe("SearchBar", () => {
  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search here" onChangeText={() => {}} />,
    );

    expect(getByPlaceholderText("Search here")).toBeTruthy();
  });

  it("calls onChangeText when typing", () => {
    let latest = "";
    const { getByPlaceholderText } = render(
      <SearchBar
        placeholder="Search"
        onChangeText={(value) => (latest = value)}
      />,
    );

    const input = getByPlaceholderText("Search");
    fireEvent.changeText(input, "abc");

    expect(latest).toBe("abc");
  });
});
