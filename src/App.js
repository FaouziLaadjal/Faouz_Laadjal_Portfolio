import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Main";
import Qualifications from "./Components/Qualifications/Qualifications";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
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
