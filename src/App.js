import { GlobalStyles } from "./Components/Styles/Globals";
import { ThemeProvider } from "styled-components";
import { Container } from "./Components/Styles/Conatiner.styled";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
const theme = {
  colors: {
    header: "#eefdf6",
    body: "#fff",
    PrimaryColor: "#00B388",
    SecondaryColor: "#eefdf6",
    Light: "#0000008a",
    footer: "#00081f",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
