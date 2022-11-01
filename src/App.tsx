import { ThemeProvider } from "styled-components";
import { FormsClient } from "./components/Forms";
import { GlobalStyle } from "./styles/styles";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Cadastro Cliente</h1>
      <FormsClient />
    </ThemeProvider>
  );
}

