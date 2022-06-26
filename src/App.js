import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import  AboutMe  from "./PortfolioContainer/AboutMe/AboutMe";
import Profile from "./PortfolioContainer/Home/Profile";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <div className="app">
      <Navbar/> 
      <div className="sections">
      <Sidebar/>
      <Hero/>
      <AboutMe/>
      
      
    
      </div>
    </div>
  );
};

export default App;
