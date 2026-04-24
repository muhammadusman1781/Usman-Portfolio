import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#F4F6FF",
        paper: "#FFFFFF",
      },
      primary: {
        light: "#6EF7FF",
        main: "#00D1FF",
        dark: "#0095C8",
        contrastText: "#04111B",
      },
      secondary: {
        light: "#D7B6FF",
        main: "#8B5CF6",
        dark: "#6732D2",
        contrastText: "#FFFFFF",
      },
      text: {
        primary: "#0E1528",
        secondary: "#3A4666",
      },
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
              "linear-gradient(90deg, rgba(8,18,38,0.92) 0%, rgba(20,35,74,0.92) 55%, rgba(44,21,99,0.92) 100%)",
            border: "1px solid rgba(0, 209, 255, 0.2)",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(0, 209, 255, 0.15)",
            boxShadow: "0 10px 30px rgba(13, 24, 44, 0.08)",
          },
        },
      },
    },
  })
);

export default lightTheme;