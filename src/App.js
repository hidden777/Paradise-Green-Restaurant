import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Starters from "./components/Starters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starters" element={<Starters />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
