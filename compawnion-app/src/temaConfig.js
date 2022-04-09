import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Numans', 'sans-serif'",
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: "#FFFFFF",
            contrastText: "#000000"
        },
        button: {
            main: "#F69C9B",
            contrastText: "#FFFFFF",
            borderRadius: 48
        },
        editar: {
            main: "#42a5f5",
            contrastText: "#FFFFFF"
        },
        borrar: {
            main: "#d32f2f",
            contrastText: "#FFFFFF"
        },
        background: {
            paper: "#F8ECC4"
        }
    },
    shape: {
        borderRadius: 24,
    },
});

export default theme;