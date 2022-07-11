import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "./projects.css";
import Particles from "react-tsparticles";
import Card from "../Card/Card";
import { loadFull } from "tsparticles";
import { proj_fotos } from "./images";

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

  const [open, setOpen] = useState(0);
  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);
  return (
    <div
      className="container-out"
      style={{ position: "relative" }}
      id="Projects"
    >
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
      <div className="projects-container">
        <div className="caja">
          <img className="img-proj" src={proj_fotos[1]} alt="" />
          <div className="info-proj">
            <p className="tit">Personal Portfolio</p>
            <div className="infomore" onClick={() => setOpen(1)}>
              more info
            </div>
          </div>
        </div>
        <div className="caja">
          <img className="img-proj" src={proj_fotos[2]} alt="" />
          <div className="info-proj">
            <p className="tit">Java SpreadSheet app</p>
            <div className="infomore" onClick={() => setOpen1(1)}>
              more info
            </div>
          </div>
        </div>
        <div className="caja">
          <img className="img-proj" src={proj_fotos[0]} alt="" />
          <div className="info-proj">
            <p className="tit">Hacker-news Clone</p>
            <div className="infomore" onClick={() => setOpen2(1)}>
              more info
            </div>
          </div>
        </div>
        <div className="caja">
          <img className="img-proj" src={proj_fotos[3]} alt="" />
          <div className="info-proj">
            <p className="tit">Wordle Clone</p>
            <div className="infomore" onClick={() => setOpen3(1)}>
              more info
            </div>
          </div>
        </div>
      </div>
      <Card estado={open} changeEstado={setOpen} titulo="Personal Portfolio" />
      <Card
        estado={open1}
        changeEstado={setOpen1}
        titulo="Java SpreadSheet app"
      />
      <Card estado={open2} changeEstado={setOpen2} titulo="Hacker-news Clone" />
      <Card estado={open3} changeEstado={setOpen3} titulo="Wordle Clone" />
    </div>
  );
};

export default Projects;