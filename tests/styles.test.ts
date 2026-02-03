import { describe, expect, it } from "bun:test";

import { createHomeScreenStyles } from "../src/styles/HomeScreenStyles";
import { createSearchBarStyles } from "../src/styles/SearchBarStyles";
import { createTabOneScreenStyles } from "../src/styles/TabOneScreenStyles";
import { createTabTwoScreenStyles } from "../src/styles/TabTwoScreenStyles";

describe("styles", () => {
  it("HomeScreenStyles exposes expected keys", () => {
    const appStyles = createHomeScreenStyles();
    expect(appStyles).toHaveProperty("container");
    expect(appStyles).toHaveProperty("mainHeader");
    expect(appStyles).toHaveProperty("mainOnly");
    expect(appStyles).toHaveProperty("mainTitle");
    expect(appStyles).toHaveProperty("list");
    expect(appStyles).toHaveProperty("listItem");
  });

  it("SearchBarStyles exposes expected keys", () => {
    const searchBarStyles = createSearchBarStyles();
    expect(searchBarStyles).toHaveProperty("container");
    expect(searchBarStyles).toHaveProperty("input");
  });

  it("Tab styles expose expected keys", () => {
    const tabOneStyles = createTabOneScreenStyles();
    const tabTwoStyles = createTabTwoScreenStyles();
    expect(tabOneStyles).toHaveProperty("container");
    expect(tabOneStyles).toHaveProperty("title");
    expect(tabOneStyles).toHaveProperty("subtitle");

    expect(tabTwoStyles).toHaveProperty("container");
    expect(tabTwoStyles).toHaveProperty("title");
    expect(tabTwoStyles).toHaveProperty("subtitle");
  });
});
