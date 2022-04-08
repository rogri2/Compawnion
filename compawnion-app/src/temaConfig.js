import { createTheme } from "@mui/material/styles";
import { teal, amber } from "@mui/material/colors";

const theme = createTheme({
    typography: {
        fontFamily: "'Numans', 'sans-serif'",
        button: {
            textTransform: 'none'
        },
        h5: {
            fontFamily: "'Nanum Pen Script', 'cursive'",
            fontSize: "40px"
        }
    },
    palette: {
        primary: {
            main: "#FFFFFF",
            contrastText: "#000000"
        },
        button: {
            main: "#F69C9B",
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