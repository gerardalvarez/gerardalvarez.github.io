import React, { useEffect } from "react";
import "./aboutMe.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
      <div className="container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Box />
        </motion.div>
      </div>
    </>
  );
};

export default Aboutme;
