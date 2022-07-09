import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "./projects.css";
import Particles from "react-tsparticles";
import Stars from "react-tsparticles";
import { loadFull } from "tsparticles";

const Projects = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="container-out" style={{ position: "relative" }}>
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 30,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffd700",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: false,
          }}
        />
      </div>
      <div className="titulox-container">
        <b
          className="aaas"
          data-aos="fade-up"
          data-aos-offset="100"
          duration="800"
        >
          My projects
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
      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
