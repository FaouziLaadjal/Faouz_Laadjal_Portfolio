import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Main";
import Qualifications from "./Components/Qualifications/Qualifications";
import Skills from "./Components/Skills/Skills";
import SlideProjects from "./Components/Projects/SlideProjects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "@splidejs/react-splide/css";
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
      <SlideProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
