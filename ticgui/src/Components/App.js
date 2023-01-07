import React from "react";
import Home from "./Home/Home";
import "./css/main.css";
import Navbar from "./Navigation/NavBar";
const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Home />
      <Home />
    </div>
  );
};

export default App;
