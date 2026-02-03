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

## Structure

- `App.tsx`: entry + feature toggles
- `src/components`: reusable UI
- `src/screens`: screens
- `src/navigation`: navigation (optional)
- `src/config`: app config/flags
- `src/styles`: styles
