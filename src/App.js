import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Main";
import Qualifications from "./Components/Qualifications/Qualifications";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "@splidejs/react-splide/css";
import Projects from "./Components/Projects/Projects";
import Aos from "aos";

import "aos/dist/aos.css";
function App() {
  Aos.init();
  return (
    <>
      <Header id="header" />
      <Home id="home" />
      <Qualifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
