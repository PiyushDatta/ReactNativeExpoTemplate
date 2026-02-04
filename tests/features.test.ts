import { describe, expect, it } from "bun:test";
import { computeFeatures } from "../src/config/features";

describe("features", () => {
  it("defaults to false when env is missing", () => {
    const features = computeFeatures({});

    expect(features.enableSearchBar).toBe(false);
    expect(features.enableSampleList).toBe(false);
    expect(features.enableTabs).toBe(false);
    expect(features.enableMediaScreen).toBe(false);
    expect(features.enableKnowledgeGraphScreen).toBe(false);
  });

  it("enables flags when env is true", () => {
    const features = computeFeatures({
      EXPO_PUBLIC_FEATURE_SEARCH: "true",
      EXPO_PUBLIC_FEATURE_SAMPLE_LIST: "true",
      EXPO_PUBLIC_FEATURE_TABS: "true",
      EXPO_PUBLIC_FEATURE_MEDIA_SCREEN: "true",
      EXPO_PUBLIC_FEATURE_KNOWLEDGE_GRAPH_SCREEN: "true",
    });

    expect(features.enableSearchBar).toBe(true);
    expect(features.enableSampleList).toBe(true);
    expect(features.enableTabs).toBe(true);
    expect(features.enableMediaScreen).toBe(true);
    expect(features.enableKnowledgeGraphScreen).toBe(true);
  });

  it("treats non-true values as false", () => {
    const features = computeFeatures({
      EXPO_PUBLIC_FEATURE_SEARCH: "1",
      EXPO_PUBLIC_FEATURE_SAMPLE_LIST: "yes",
      EXPO_PUBLIC_FEATURE_TABS: "false",
      EXPO_PUBLIC_FEATURE_MEDIA_SCREEN: "no",
      EXPO_PUBLIC_FEATURE_KNOWLEDGE_GRAPH_SCREEN: "0",
    });

    expect(features.enableSearchBar).toBe(false);
    expect(features.enableSampleList).toBe(false);
    expect(features.enableTabs).toBe(false);
    expect(features.enableMediaScreen).toBe(false);
    expect(features.enableKnowledgeGraphScreen).toBe(false);
  });
});
