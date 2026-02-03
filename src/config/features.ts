// Env parsing is intentionally strict: only "true" enables the flag.
const readEnvFlag = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === "true";
};

export const computeFeatures = (
  env: Record<string, string | undefined> = process.env
) =>
  ({
    enableSearchBar: readEnvFlag(env.EXPO_PUBLIC_FEATURE_SEARCH, false),
    enableTabs: readEnvFlag(env.EXPO_PUBLIC_FEATURE_TABS, false),
    enableSampleList: readEnvFlag(env.EXPO_PUBLIC_FEATURE_SAMPLE_LIST, false),
  }) as const;

export const features = computeFeatures();
