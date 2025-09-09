import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { createContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import darkTheme from "./dark";
import lightTheme from "./light";
// import "/assets/fonts/Jost/Jost.woff2";

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });
const DARK_SCHEME_QUERY = "(prefers-color-scheme: light)";
type ThemeMode = "light" | "dark";
export default function CustomThemeProvider({ children }: any) {
  const isDarkOS = useMediaQuery(DARK_SCHEME_QUERY);
  // const [mode, setMode] = useState<"light" | "dark">("light");
  const [mode, setMode] = useLocalStorage<ThemeMode>("themeMode", "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  console.log("isDarkOS", isDarkOS);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: "#FCD9B9",
            main: "#292C35",
            dark: "#17181D",
            contrastText: "#E09145",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
        typography: {
          fontFamily: "Jost, sans-serif",
        },
      }),
    [mode]
  );
  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
