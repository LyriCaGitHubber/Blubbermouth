import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Mockdata from "./mockdata";

console.log(Mockdata);

const App = () => {
  return (
    <Router>
      <Navbar {...Mockdata} />
      <Routes>
        <Route path="/bio" element={<Bio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
