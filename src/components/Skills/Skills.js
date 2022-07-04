import React, { useEffect, useState, useRef } from "react";
import "./skills.css";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { lenguajesoalgo } from "./images";

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
        <div className="titulox">Programming languages </div>
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
        <div className="titulox">Web development </div>
        <div className="skill-carrousel" data-aos="fade-right">
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
        <div data-aos="fade-up">
          <Box />
        </div>
      </div>
    </>
  );
};

export default Skills;
