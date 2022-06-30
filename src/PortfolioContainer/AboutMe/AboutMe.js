import React, { useEffect } from "react";
import "./aboutMe.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

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

const Aboutme = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="container" id="About">
        <div className="about">
          <div data-aos="fade-up">
            <Box />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
