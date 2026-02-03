// Env parsing is intentionally strict: only "true" enables the flag.
const readEnvFlag = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === "true";
};

export const features = {
  enableSearchBar: readEnvFlag(process.env.EXPO_PUBLIC_FEATURE_SEARCH, false),
  enableTabs: readEnvFlag(process.env.EXPO_PUBLIC_FEATURE_TABS, false),
  enableSampleList: readEnvFlag(process.env.EXPO_PUBLIC_FEATURE_SAMPLE_LIST, false),
} as const;
