import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#EDEFF7",
        paper: "#F7F9FF",
      },
      primary: {
        light: "#7292FF",
        main: "#4A6CF7",
        dark: "#334CC2",
        contrastText: "#F8FAFF",
      },
      secondary: {
        light: "#B39BFF",
        main: "#6D4ED6",
        dark: "#513AA2",
        contrastText: "#FFFFFF",
      },
      text: {
        primary: "#141A2F",
        secondary: "#4A5574",
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
              "linear-gradient(90deg, rgba(23,31,61,0.93) 0%, rgba(35,47,88,0.93) 55%, rgba(50,35,94,0.93) 100%)",
            border: "1px solid rgba(74, 108, 247, 0.28)",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(74, 108, 247, 0.18)",
            boxShadow: "0 10px 24px rgba(18, 26, 49, 0.1)",
          },
        },
      },
    },
  })
);

export default lightTheme;