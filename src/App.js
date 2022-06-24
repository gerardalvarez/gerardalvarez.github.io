import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import  AboutMe  from "./PortfolioContainer/AboutMe/AboutMe";
import Profile from "./PortfolioContainer/Home/Profile";
import Hero from "./components/Hero/Hero";


const App = () => {
  return (
    <div className="app">
      <Navbar/> 
      <div className="sections">
      <Hero/>
      <AboutMe/>
      
      
    
      </div>
    </div>
  );
};

export default App;
