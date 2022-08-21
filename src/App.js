import { GlobalStyles } from "./Components/Styles/Globals";
import { ThemeProvider } from "styled-components";
import { Container } from "./Components/Styles/Conatiner.styled";
import Header from "./Components/Header";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container></Container>
      </>
    </ThemeProvider>
  );
}

export default App;
