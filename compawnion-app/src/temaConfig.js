import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: teal[500]
        },
    },
});

export default theme;