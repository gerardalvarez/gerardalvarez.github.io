import "./hero.css";
import { useState } from "react";
import Typical from "react-typical";
import image1 from "./images/twoniggas.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <div className="profile-container">
        {/*<div className="img2">
          <motion.div
            initial={{ y: -100 }}
            animate={{ x: [0, 700, 0] }}
            transition={{ repeat: 1, duration: 5 }}
          >
            <img src={image1} alt="a" />
          </motion.div>
        </div>*/}
        <div className="profile-info">
          <div className="profile-name">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <span className="texto"> Hello, my name is </span>
            </motion.h1>
          </div>
          <div className="profile-name2">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 1.9 }}
            >
              <span className="minombre">Gerard Álvarez. </span>
            </motion.h2>
          </div>
          <div className="profile-efecto">
            <span>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software developer",
                    1000,
                    "Engineering student",
                    1000,
                    "Nice guy ;)",
                    1000,
                    "Maricona",
                    1000,
                  ]}
                />
              </motion.h1>
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <p className="desc">
              I’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building çI’m a software engineer specializing in building and
              occasionally designing exceptional digital experiences. Currently,
              I’m focused on building I’m a software engineer specializing in
              building and occasionally designing exceptional digital
              experiences. Currently, I’m focused on building I’m a software
              engineer specializing in building and occasionally designing
              exceptional digital experiences. Currently, I’m focused on
              building
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.3 }}
          >
            <div class="categoryWrapper">
              <h1>Check my resume!</h1>
              <a href={image1} target="_blank">
                <span>
                  <span>
                    <span data-attr-span="CV"> Take a look</span>
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
