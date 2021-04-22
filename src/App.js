
import './App.css';
import Header from "./Components/Header"
import Background from "./Components/Background"
import About from "./Components/About"
import Lebenslauf from "./Components/Lebenslauf"
import Project from "./Components/Project"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <About />
      <Lebenslauf />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
