# ReactNativeExpoTemplate

Opinionated minimal React Native + Expo starter with optional UI controlled by feature flags.

## Install And Run

1. `bun install`
2. `bun run start`
3. Optional platforms: `bun run android`, `bun run ios`, `bun run web`

## Tests

Run all tests:

- `bun run test`

This uses Bun's test runner and preloads `tests/setup.ts` for React Native mocks.

## Format

Format all files with Prettier:

- `bun run format`

## Features

Feature flags are driven by `.env` and read in `src/config/features.ts`. Use these keys:

- `EXPO_PUBLIC_FEATURE_SEARCH`
- `EXPO_PUBLIC_FEATURE_SAMPLE_LIST`
- `EXPO_PUBLIC_FEATURE_TABS`
- `EXPO_PUBLIC_FEATURE_SETTINGS_SCREEN`
- `EXPO_PUBLIC_FEATURE_MEDIA_SCREEN`
- `EXPO_PUBLIC_FEATURE_PROFILE_SCREEN`
- `EXPO_PUBLIC_FEATURE_KNOWLEDGE_GRAPH_SCREEN`

All flags default to `false`. `MainScreen` always renders, and feature flags add optional UI.

## Important Notes

**Environment Variables**
Create a local `.env` file by copying `.env.example`. Use `EXPO_PUBLIC_` for any values that must be available in the app bundle.
Suggested keys (optional):

- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_FEATURE_TABS`
- `EXPO_PUBLIC_FEATURE_SEARCH`
- `EXPO_PUBLIC_FEATURE_SAMPLE_LIST`
- `EXPO_PUBLIC_FEATURE_SETTINGS_SCREEN`
- `EXPO_PUBLIC_FEATURE_MEDIA_SCREEN`
- `EXPO_PUBLIC_FEATURE_PROFILE_SCREEN`
- `EXPO_PUBLIC_FEATURE_KNOWLEDGE_GRAPH_SCREEN`

**Feature Flag Behavior**
Flags are centralized in `src/config/features.ts` and read from `.env`. Values are normalized to booleans by treating `"true"` as enabled. Any missing or invalid value falls back to `false`.

**Safe Area**
Screens use `react-native-safe-area-context` for consistent safe area handling across iOS and Android. `SafeAreaProvider` is set at the app root and screens use `SafeAreaView` from the same package.

**TypeScript Types**
`@types/react-native` is intentionally omitted because React Native ships its own types. If you add it back, keep it aligned with the RN version in `package.json`.

**Polyfills**
Polyfills are loaded before Expo initializes via `entry.js` -> `polyfills.js`. They are a fallback for Expo Go or runtime mismatches where globals are missing early. If you no longer need them, revert `package.json` `main` back to `node_modules/expo/AppEntry.js` and remove the polyfill files.

**FormData**
For iOS runtime cases where `FormData` is missing at startup, a small polyfill is installed and logged in development.

**WebSocket**
If the runtime reports `WebSocket` missing at startup, `polyfills.js` installs a polyfill from `react-native` and logs the result in development.

## Maintenance

Clean install (remove caches and reinstall):

- `bun run clean`

## Screens

- `Main`: `HomeScreen` with optional search/list.
- `Tab 1`: Placeholder tab screen.
- `Media Scroll` (feature‑gated): Social feed with media cards and custom top/bottom nav.
- `Profile` (feature‑gated): Profile summary and app settings.
- `Settings` (feature‑gated): App settings, currently UI size.
- `Knowledge Graph` (feature‑gated): Drag‑to‑pan semantic node map (can be fed by backend data; uses defaults for now).

### Knowledge Graph Data Example

Fetch graph data from your backend and pass it into the screen:

```ts
import React, { useEffect, useState } from "react";
import { KnowledgeGraphScreen } from "./src/screens/KnowledgeGraphScreen";

type GraphData = {
  nodes: { id: string; label: string; x: number; y: number; size: number; tone: "primary" | "secondary" | "accent" }[];
  edges: { from: string; to: string; strength: 1 | 2 | 3 }[];
};

export function KnowledgeGraphContainer() {
  const [data, setData] = useState<GraphData | undefined>();

  useEffect(() => {
    fetch("https://api.example.com/graph")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <KnowledgeGraphScreen data={data} />;
}
```

## Settings System

UI sizing and drag elasticity are managed by `SettingsContext` and `uiSettings`. Changing size re-renders styles via factory functions (e.g., `createHomeScreenStyles`) so tokens update immediately. Drag elasticity controls the Knowledge Graph pan “rubber-band” feel and is adjustable via a slider in Settings/Profile.

## Structure

- `App.tsx`: entry + feature toggles
- `src/components`: reusable UI
- `src/screens`: screens
- `src/navigation`: navigation (optional)
- `src/config`: app config/flags
- `src/styles`: styles
