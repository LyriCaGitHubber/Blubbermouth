import React from "react";
import Navbar from "./Navigation/navbar";
import Mockdata from "./mockdata";

console.log(Mockdata);

const App = () => {
  return <Navbar {...Mockdata} />;
};

export default App;
