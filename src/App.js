import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="sections">
          <Sidebar />
          <Hero id="Hero" />
          <AboutMe id="About" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
