import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const lightTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#F0EBE3"
        },
        primary: {
            light: "#fff",
            main: "#29a587",
            dark: "#29a587",
            contrastText: "#262626",
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
}))

export default lightTheme