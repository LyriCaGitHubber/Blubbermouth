import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navigation/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Mockdata from "./mockdata";
import Impressum from "./Pages/Impressum";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";

console.log(Mockdata);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar {...Mockdata} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
