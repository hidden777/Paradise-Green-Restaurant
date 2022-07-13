import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dessert from "./components/Dessert";
import Footer from "./components/Footer";
import FullCourse from "./components/fullCourse";
import Home from "./components/Home";
import Starters from "./components/Starters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/full-course" element={<FullCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
