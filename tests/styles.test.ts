import { describe, expect, it } from "bun:test";

import appStyles from "../src/styles/HomeScreenStyles";
import searchBarStyles from "../src/styles/SearchBarStyles";
import tabOneStyles from "../src/styles/TabOneScreenStyles";
import tabTwoStyles from "../src/styles/TabTwoScreenStyles";

describe("styles", () => {
  it("HomeScreenStyles exposes expected keys", () => {
    expect(appStyles).toHaveProperty("container");
    expect(appStyles).toHaveProperty("mainHeader");
    expect(appStyles).toHaveProperty("mainOnly");
    expect(appStyles).toHaveProperty("mainTitle");
    expect(appStyles).toHaveProperty("list");
    expect(appStyles).toHaveProperty("listItem");
  });

  it("SearchBarStyles exposes expected keys", () => {
    expect(searchBarStyles).toHaveProperty("container");
    expect(searchBarStyles).toHaveProperty("input");
  });

  it("Tab styles expose expected keys", () => {
    expect(tabOneStyles).toHaveProperty("container");
    expect(tabOneStyles).toHaveProperty("title");
    expect(tabOneStyles).toHaveProperty("subtitle");

    expect(tabTwoStyles).toHaveProperty("container");
    expect(tabTwoStyles).toHaveProperty("title");
    expect(tabTwoStyles).toHaveProperty("subtitle");
  });
});
