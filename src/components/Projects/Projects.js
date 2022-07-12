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
      <div data-aos="fade-right" className="projects-container">
        <div className="caja">
          <img className="img-proj" src={proj_fotos[1]} alt="" />
          <div className="info-proj">
            <p className="tit">Personal Portfolio</p>
            <div className="infomore" onClick={() => setOpen(1)}>
              more info
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="caja">
          <img className="img-proj" src={proj_fotos[2]} alt="" />
          <div className="info-proj">
            <p className="tit">Java SpreadSheet app</p>
            <div className="infomore" onClick={() => setOpen1(1)}>
              more info
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="caja">
          <img className="img-proj" src={proj_fotos[0]} alt="" />
          <div className="info-proj">
            <p className="tit">Hacker-news Clone</p>
            <div className="infomore" onClick={() => setOpen2(1)}>
              more info
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="caja">
          <img className="img-proj" src={proj_fotos[3]} alt="" />
          <div className="info-proj">
            <p className="tit">Wordle Clone</p>
            <div className="infomore" onClick={() => setOpen3(1)}>
              more info
            </div>
          </div>
        </div>
      </div>
      <Card
        img={proj_fotos[1]}
        estado={open}
        changeEstado={setOpen}
        titulo="Personal Portfolio"
        etiq={["React js", "Node js", "Bootstrap"]}
        t={
          "My personal website is one of my personal projects. I decided to do it with React and pure css to get some practice although it would have been faster with styled components. I have to work more on responsive design but at the moment I give more priority to other ongoing projects. However, i like it a lot."
        }
        demo={"/"}
        code={"https://github.com/gerardalvarez/gerardalvarez.github.io"}
      />
      <Card
        img={proj_fotos[2]}
        estado={open1}
        changeEstado={setOpen1}
        titulo="Java SpreadSheet app"
        etiq={["Java", "Java Swing", "MVC"]}
        t={
          "This college project is a Java program of an excel spreadsheet. It has the same functionalities, with cell references and operations, and works with its own file system locally. The repository contains the information and user material, although it is in Catalan. I do not provide the jar, to test it you will have to clone the repo and execute it in an ide."
        }
        demo={"https://github.com/gerardalvarez/SpreadSheet_java_app"}
        code={"https://github.com/gerardalvarez/SpreadSheet_java_app"}
      />
      <Card
        img={proj_fotos[0]}
        estado={open2}
        changeEstado={setOpen2}
        titulo="Hacker-news Clone"
        etiq={[
          "React js",
          "Node js",
          "Expressjs",
          "MongoDB",
          "Heroku",
          "Swagger",
          "Taiga",
        ]}
        t={
          "This university project is a clone of the Hacker-news website. It was made in two parts, the first one constisted in a backend with the views in the same server, and the second one involved to make it an api and write a frontend with react that consumed this api. Both parts are hosted on heroku, although I only show the demo and repo of the first part you can find in my github the second one."
        }
        demo={"https://evening-harbor-41552.herokuapp.com/"}
        code={"https://github.com/gerardalvarez/ProyectoASW-Hacker-News"}
      />
      <Card
        img={proj_fotos[3]}
        estado={open3}
        changeEstado={setOpen3}
        titulo="Wordle Clone"
        etiq={["React js", "Node js", "Styled Components", "Heroku"]}
        t={
          "This personal project is a copy of the wordle game made with React, I don't share the pictures or the code in public yet because I'm fixing some things and making some tweaks, but I don't remove the project card because I prefer to keep them even hehe"
        }
        demo={"https://github.com/gerardalvarez/Wordle-clone-react"}
        code={"https://github.com/gerardalvarez/Wordle-clone-react"}
      />
    </div>
  );
};

export default Projects;
