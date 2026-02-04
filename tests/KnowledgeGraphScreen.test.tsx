import React from "react";
import { describe, expect, it } from "bun:test";

import { renderWithProviders } from "./utils/renderWithProviders";
import { KnowledgeGraphScreen } from "../src/screens/KnowledgeGraphScreen";

describe("KnowledgeGraphScreen", () => {
  it("renders nodes and header", () => {
    const { getByText } = renderWithProviders(<KnowledgeGraphScreen />);

    expect(getByText("Knowledge Graph")).toBeTruthy();
    expect(getByText("Design")).toBeTruthy();
    expect(getByText("Frontend")).toBeTruthy();
    expect(getByText("Backend")).toBeTruthy();
  });
});
