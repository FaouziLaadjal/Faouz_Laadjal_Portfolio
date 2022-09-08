import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Main";
function App() {
  return (
    <>
      <Header id="header"  />
      <Home id="home" className="container__wrapper" />
    </>
  );
}

export default App;
