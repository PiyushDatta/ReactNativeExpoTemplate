import React, { createContext, useContext, useMemo, useState } from "react";

import { UiSize, uiSettings } from "../config/uiSettings";

type SettingsValue = {
  size: UiSize;
  setSize: (size: UiSize) => void;
};

const SettingsContext = createContext<SettingsValue | undefined>(undefined);

type SettingsProviderProps = {
  children: React.ReactNode;
  initialSize?: UiSize;
};

export function SettingsProvider({
  children,
  initialSize,
}: SettingsProviderProps) {
  const [size, setSizeState] = useState<UiSize>(initialSize ?? uiSettings.size);

  const setSize = (nextSize: UiSize) => {
    uiSettings.size = nextSize;
    setSizeState(nextSize);
  };

  const value = useMemo(() => ({ size, setSize }), [size]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
}
