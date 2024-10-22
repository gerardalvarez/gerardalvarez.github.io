import React from "react";
import "./aboutMe.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import image1 from "./pp22.jpg";
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
          data-aos-offset="100"
          duration="3000"
          initial={{ scale: 1 }}
          animate={{ scale: [1.5, 1] }}
          transition={{ repeat: 15, duration: 1 }}
          style={{ padding: "8px" }}
        >
          <div style={{ padding: "8px" }}>
            Hello! I’m Gerard, a passionate Computer Engineer specialized in
            Software Engineering, with a degree from FIB (UPC). I’m eager to
            continue advancing my career in the tech industry by taking on new
            and diverse projects that challenge me to innovate and grow. With a
            solid foundation in software development and hands-on experience, I
            bring not only technical skills but also a proactive mindset and a
            commitment to delivering high-quality solutions. Let’s connect and
            explore how I can help push your projects forward!{" "}
            <p>
              I will love to hear from you, whether it's a project, job
              opportunity or just chat. Feel free to to contact me{" "}
              <a style={{ color: "white" }} href="/#Contact">
                HERE
              </a>
              .
            </p>
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
