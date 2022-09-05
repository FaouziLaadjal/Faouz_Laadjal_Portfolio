import { GlobalStyles } from "./Components/General/Globals";
import { ThemeProvider } from "styled-components";
import { Container } from "./Components/General/Styles/Conatiner.styled";
import Header from "./Components/Header/Header";
import Qualifications from "./Components/Qualifications/Qualifications";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
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
          <section id="qualifications">
            <Qualifications />
          </section>
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
