import Layout from "./routes/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./style/theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
