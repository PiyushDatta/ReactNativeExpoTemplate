import { describe, expect, it } from "bun:test";
import { computeFeatures } from "../src/config/features";

describe("features", () => {
  it("defaults to false when env is missing", () => {
    const features = computeFeatures({});

    expect(features.enableSearchBar).toBe(false);
    expect(features.enableSampleList).toBe(false);
    expect(features.enableTabs).toBe(false);
  });

  it("enables flags when env is true", () => {
    const features = computeFeatures({
      EXPO_PUBLIC_FEATURE_SEARCH: "true",
      EXPO_PUBLIC_FEATURE_SAMPLE_LIST: "true",
      EXPO_PUBLIC_FEATURE_TABS: "true",
    });

    expect(features.enableSearchBar).toBe(true);
    expect(features.enableSampleList).toBe(true);
    expect(features.enableTabs).toBe(true);
  });

  it("treats non-true values as false", () => {
    const features = computeFeatures({
      EXPO_PUBLIC_FEATURE_SEARCH: "1",
      EXPO_PUBLIC_FEATURE_SAMPLE_LIST: "yes",
      EXPO_PUBLIC_FEATURE_TABS: "false",
    });

    expect(features.enableSearchBar).toBe(false);
    expect(features.enableSampleList).toBe(false);
    expect(features.enableTabs).toBe(false);
  });
});
