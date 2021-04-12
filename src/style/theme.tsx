import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#1E344E",
      secondary: "#6E86A1",
    },
    primary: {
      main: "#36483A",
    },
    secondary: {
      main: "#6F9678",
    },
  },
  typography: {
    button: {
      fontFamily: "Martel Sans",
      fontWeight: 600,
    },
  },
});
