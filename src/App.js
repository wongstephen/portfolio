import "./index.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <MissionStatement />
              <Skills />
              <Contact />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
