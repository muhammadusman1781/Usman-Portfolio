import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { orange, teal } from "@mui/material/colors";
import { createContext, useMemo, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CustomThemeProvider from "../theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <main className={`w-full overflow-hidden`}>
        <Component {...pageProps} />
      </main>
    </CustomThemeProvider>
  );
}
