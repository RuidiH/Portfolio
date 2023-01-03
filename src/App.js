import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Header/Navigation";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <main>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
