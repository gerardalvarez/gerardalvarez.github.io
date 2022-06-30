import React from "react";
import "./skills.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Loader = () => {
  const control = useAnimation();
  const [ref1, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="container-skills">
      <div className="fondox">
        <div className="fondox-container">
          <b
            className="aaas"
            data-aos="fade-up"
            data-aos-offset="100"
            duration="800"
            id="Skills"
          >
            About Me
          </b>
          <hr
            data-aos="fade-right"
            data-aos-offset="100"
            duration="800"
            className="barra1"
          />
          <hr
            data-aos="fade-left"
            data-aos-offset="100"
            duration="800"
            className="barra2"
          />
        </div>
      </div>

      <div className="cosas">
        <motion.div
          className="xd"
          ref={ref1}
          id="SkillsS"
          animate={control}
          initial="hidden"
          transition={{ duration: 3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1 },
          }}
        >
          dfsdfsfsfsdsfdsfsdfssf
        </motion.div>
      </div>
      <div className="fondox2"></div>
    </div>
  );
};

export default Loader;
