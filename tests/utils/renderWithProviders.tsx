import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";

import { SettingsProvider } from "../../src/context/SettingsContext";

type Options = RenderOptions & {
  initialSize?: "small" | "medium" | "large";
  initialElasticity?: number;
};

export function renderWithProviders(
  ui: React.ReactElement,
  { initialSize = "medium", initialElasticity = 0.3, ...options }: Options = {},
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <SettingsProvider
      initialSize={initialSize}
      initialElasticity={initialElasticity}
    >
      {children}
    </SettingsProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
}
