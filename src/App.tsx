import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./style/theme";
import "./index.css";
import MainRoute from "./routes/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRoute />
    </ThemeProvider>
  );
}

export default App;
