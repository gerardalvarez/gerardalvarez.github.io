import React from "react";
import "./skills.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Loader = () => {
  const control = useAnimation();
  const [ref1, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="container-skills">
      <div className="fondox">
        <div className="fondox-container">
          <b className="aaas" id="Skills">
            About Me
          </b>
          <hr className="barra1" />
          <hr className="barra2" />
        </div>
      </div>

      <motion.div
        className="cosas"
        id="SkillsS"
        ref={ref1}
        animate={control}
        initial="hidden"
        transition={{ duration: 6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 },
        }}
      >
        dfsdfsfsfsdsfdsfsdfssf
      </motion.div>
      <div className="fondox2"></div>
    </div>
  );
};

export default Loader;
