import React, { useEffect, useState, useRef } from "react";
import "./skills.css";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { lenguajesoalgo, otrascosas } from "./images";

function Box() {
  return (
    <div
      style={{
        padding: 40,
        background: "white",
        display: "inline-block",
        borderRadius: 5,
      }}
    />
  );
}

const Skills = () => {
  const constraintsRef = useRef(null);
  return (
    <>
      <div className="container" id="hooo">
        <div>Drag me</div>
        <motion.hr
          className="barrita-kse-mueve1"
          initial={{ y: 0 }}
          animate={{ y: [460, -460, 460] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.hr
          className="barrita-kse-mueve2"
          initial={{ y: 0 }}
          animate={{ y: [-460, 460, -460] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <div className="titulox" data-aos="fade-up">
          Programming <span style={{ color: "#ffd700" }}>languages</span>{" "}
        </div>
        <div className="skill-carrousel" data-aos="fade-left">
          <motion.div
            whileDrag={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -850 }}
            className="skill-carrouselxd"
          >
            {lenguajesoalgo.map((image) => {
              return (
                <motion.div className="itemima" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="titulox" data-aos="fade-down">
          <span style={{ color: "#ffd700" }}>Web</span> development &{" "}
          <span style={{ color: "#ffd700" }}>others</span>
        </div>
        <div className="skill-carrousel" data-aos="fade-right">
          <motion.div
            whileDrag={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -850 }}
            className="skill-carrouselxd"
          >
            {otrascosas.map((image) => {
              return (
                <motion.div className="itemima" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div data-aos="fade-up">
          <div className="textito" style={{ paddingTop: "30px" }}>
            Check all my skills{" "}
            <a style={{ color: "#ffd700" }} href="#hero" target="_blank">
              here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
