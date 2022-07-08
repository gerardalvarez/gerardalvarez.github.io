import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Footer/Contact";
import Err from "./err";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <div className="sections">
      <Navbar />
      <Sidebar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop
        smooth
        top="1000"
        color="white"
        style={{ background: "black" }}
      />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader">
          <PacmanLoader
            size={30}
            color={"#FFD700"}
            loading={loading}
            className="pacman"
          />
          <div className="container-load">Loading...</div>
        </div>
      ) : (
        <motion.div
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="*" element={<Err />} />
          </Routes>
        </motion.div>
      )}
    </BrowserRouter>
  );
};

export default App;
