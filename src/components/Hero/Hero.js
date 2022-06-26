
import './hero.css'
import { useState } from "react";
import Typical from "react-typical";
import image1 from './Circle.png'
import { motion } from 'framer-motion'  




function Hero() {

  
  
  return (
    <div className='hero'>
      
      <div className="profile-container">
        <div className="img2">
        <motion.div
        initial={{y:-100}}
        animate={{x:[0,700,0]}}
        transition={{repeat:Infinity, duration:5 }}
        >
        <img src={image1} alt="a"/></motion.div>
      </div>
        <div className="profile-info">
          <div className="profile-name">
            <h1>
              <span className="texto"> Hello, my name is </span>
            </h1>
          </div>
          <div className="profile-name2">
            <h2>
              <span className="minombre">Gerard Álvarez. </span>
            </h2>
          </div>
          <div className="profile-efecto">
            <span>
              <h1>
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
                  ]} />
              </h1>
            </span>
          </div>
          <div>
            <p className="desc">
              I’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building çI’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building 
              I’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building 
              I’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building 
            </p>
          </div>
        </div>
      
    </div>
    
    </div>
  )
}

export default Hero