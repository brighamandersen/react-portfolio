import { createTheme  } from "@material-ui/core/styles";

export const COLORS = {
  primary: "#215481",
  secondary: "#808080",
  white: "#fff",
  whiteGray: "#f7f7f7",
};

export const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary },
    secondary: { main: COLORS.secondary },
  },
  typography: {
    fontFamily: "Rubik",
  },
});

