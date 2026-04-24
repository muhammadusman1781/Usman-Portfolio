import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#070B16",
        paper: "#11182B",
      },
      primary: {
        light: "#67F6FF",
        main: "#00D1FF",
        dark: "#0094C7",
        contrastText: "#031019",
      },
      secondary: {
        light: "#C59CFF",
        main: "#8B5CF6",
        dark: "#6532C9",
        contrastText: "#FFFFFF",
      },
      text: {
        primary: "#EAF2FF",
        secondary: "#A8B4CE",
      },
      divider: "rgba(120, 160, 255, 0.2)",
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
              "linear-gradient(90deg, rgba(8,18,38,0.95) 0%, rgba(16,29,58,0.95) 60%, rgba(33,16,75,0.95) 100%)",
            border: "1px solid rgba(0, 209, 255, 0.25)",
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(0, 209, 255, 0.18)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
          },
        },
      },
    },
  })
);

export default darkTheme;