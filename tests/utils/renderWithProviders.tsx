import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";

import { SettingsProvider } from "../../src/context/SettingsContext";

type Options = RenderOptions & {
  initialSize?: "small" | "medium" | "large";
};

export function renderWithProviders(
  ui: React.ReactElement,
  { initialSize = "medium", ...options }: Options = {},
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <SettingsProvider initialSize={initialSize}>{children}</SettingsProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
}
