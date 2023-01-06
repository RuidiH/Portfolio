import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Header/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";


function App() {
  return (
    <div>
      <main>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
