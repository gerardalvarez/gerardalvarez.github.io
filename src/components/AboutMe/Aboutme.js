import React from "react";
import "./aboutme.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import image1 from "./twoniggas.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-about1">
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

      <div className="container-about" id="Aboutme">
        <img
          className="resize"
          src={image1}
          alt="a"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        />
        <motion.div
          className="texto-about"
          data-aos="fade-right"
          data-aos-offset="200"
          duration="3000"
          initial={{ scale: 1 }}
          animate={{ scale: [1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          style={{ padding: "8px" }}
        >
          <div style={{ padding: "8px" }}>
            Hola kasdjhisdhfisda adfhñdosfhjoñásdjfoñásdf
            afsdioafhoásdfjoáisdjfoásdfj afjoasdfhjiaojfp+çajdf
            afjoàisdfjp+ajfp+asjofap+çefjpaeofjapef
            fao`wiefhao`´iefjioàfjao`wefij
          </div>
        </motion.div>
      </div>
      <div className="fondox2">
        <div className="fondox-container"></div>
      </div>
    </div>
  );
};

export default AboutMe;
