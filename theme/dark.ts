import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#090D1A",
        paper: "#131A30",
      },
      primary: {
        light: "#88A3FF",
        main: "#5D7DFF",
        dark: "#4561D0",
        contrastText: "#F7F9FF",
      },
      secondary: {
        light: "#B89EFF",
        main: "#7A58E8",
        dark: "#5D40B6",
        contrastText: "#FFFFFF",
      },
      text: {
        primary: "#E8EEFF",
        secondary: "#A3AFCC",
      },
      divider: "rgba(110, 130, 220, 0.24)",
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: "Jost, sans-serif",
      h3: {
        fontWeight: 800,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              "linear-gradient(90deg, rgba(15,22,44,0.95) 0%, rgba(22,32,63,0.95) 60%, rgba(35,24,72,0.95) 100%)",
            border: "1px solid rgba(93, 125, 255, 0.35)",
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(93, 125, 255, 0.24)",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.32)",
          },
        },
      },
    },
  })
);

export default darkTheme;