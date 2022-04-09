import { createTheme } from "@mui/material/styles";
import { pink } from '@mui/material/colors'

const theme = createTheme({
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    background: pink[400]
                }
            }
        }
    },
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
            paper: "#F8ECC4",
            default: "#00ACB8"
        }
    },
    shape: {
        borderRadius: 24,
    },
});

export default theme;