import React, { createContext, useEffect, useState } from "react";

import { dark, light } from "../themes/theme";

type ContextState = {
  isDark: boolean;
  isMobile: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  theme: typeof dark;
};

export const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
} as unknown as ContextState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const theme = isDark ? dark : light;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(
        window?.matchMedia(
          "(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)"
        )?.matches ?? false
      );
    }
  }, []);

  return (
    <AppContext.Provider value={{ isDark, setIsDark, theme, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};
