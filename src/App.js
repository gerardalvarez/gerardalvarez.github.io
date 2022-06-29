import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects';
import { BrowserRouter } from "react-router-dom";
import { useState,useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { motion } from "framer-motion";


const App = () => {

const [loading, setLoading] =useState(false);

useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)


},[])

  return (
    <BrowserRouter>
    {loading ? (
      <div className="loader">
    <SyncLoader 
    size={30}
    color={"#ffffff"}
    loading={loading}
    
    />
    </div>
    )
    :
    (
      <motion.div className="app"
      initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}>
        
        <Navbar />
        <div className="sections">
          <Sidebar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
        </div>
      </motion.div>
    )
  }   
    </BrowserRouter>
  );
};

export default App;
