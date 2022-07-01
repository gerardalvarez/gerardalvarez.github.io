import React from "react";
import "./skills.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import image1 from "./twoniggas.jpg";
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
    Aos.init({ duration: 2000 });
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

      <div className="container-about" id="Skills">
        <div
          className="blanco"
          data-aos="fade-right"
          data-aos-offset="200"
          duration="3000"
        >
          dfsdfsfsfsdsfdsfsdfssf
        </div>

        <img
          class="resize"
          src={image1}
          alt="a"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        />
      </div>
      <div className="fondox2"></div>
    </div>
  );
};

export default Loader;
