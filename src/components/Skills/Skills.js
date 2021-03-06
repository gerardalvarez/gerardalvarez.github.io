import React, { useState, useRef, useEffect } from "react";
import "./skills.css";
import { motion } from "framer-motion";
import Cv from "./CV_web.pdf";
import "aos/dist/aos.css";
import { lenguajesoalgo, otrascosas } from "./images";

const Skills = () => {
  const [width, setWidth] = useState(0);
  const [width2, setWidth2] = useState(0);

  const carrousel = useRef();
  const carrousel2 = useRef();

  useEffect(() => {
    console.log(carrousel.current.scrollWidth, carrousel.current.offsetWidth);
    setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    setWidth2(carrousel2.current.scrollWidth - carrousel2.current.offsetWidth);
  }, []);
  return (
    <>
      <div className="container" id="Skills">
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
        <div className="aviso">
          {"("} <span>Grab</span> an icon and <span>drag it </span> in order to
          discover more ! {")"}
        </div>
        <div className="titulox" data-aos="fade-up">
          Programming <span style={{ color: "#ffd700" }}>languages</span> I know{" "}
        </div>
        <div ref={carrousel} className="skill-carrousel" data-aos="fade-left">
          <motion.div
            whileDrag={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
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
        <div
          ref={carrousel2}
          className="skill-carrousel2"
          data-aos="fade-right"
        >
          <motion.div
            whileDrag={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width2 }}
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
            <a style={{ color: "#ffd700" }} href={Cv} target="_blank">
              here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
