import React from "react";
import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import XD from "./twoniggas.jpg";
import "./projects.css";

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-proj">
      <Parallax className="ima" bgImage={XD} strength={800}>
        <div>asdfjodfj</div>
      </Parallax>
      <Parallax className="ima2">
        <div className="img22">
          <img src={XD} alt="a" />
        </div>
        <motion.div className="cosasa" id="Projects">
          {scrollY}
        </motion.div>
      </Parallax>
      <Parallax className="ima" bgImage={XD} strength={800}>
        <div>asdfjodfj</div>
      </Parallax>
    </div>
  );
};

export default Projects;
