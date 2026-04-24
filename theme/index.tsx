import { ThemeProvider } from "@mui/material";
import React, { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import darkTheme from "./dark";
import lightTheme from "./light";

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });
type ThemeMode = "light" | "dark";
export default function CustomThemeProvider({ children }: any) {
  const [mode, setMode] = useLocalStorage<ThemeMode>("themeMode", "dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
