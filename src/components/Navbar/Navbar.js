import React from 'react'
import './navbar.css'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0.2)"
  }
};

export default function Navbar() {
  
  const [show, setShow] = useState('active_and_top');
  const [lastScrollY, setLastScrollY] = useState(0);




  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow('hidden'); 
      } else { // if scroll up show the navbar
        setShow('active');  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
      if(window.pageYOffset===0){
        setShow('active_and_top');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    
    <nav id="navbar" className={show}>
      <div className='navbuttons'>
       <a id='a' href="/home">Home</a>
       <a id='a'href="/aboutme">About Me</a>
       <a id='a'href="/projects">Projects</a>
      <a id='a' href="/contact">Contact</a>
      </div> 
      <a  href="/" className="logo">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
      initial={{scale: 3}}
      whileHover ={{scale:3.5, y:-5, x:5}}
      whileTap={{ scale: 2,  y:5, x:-5}}
      
    >
      <motion.path
        d="M 27.35 0.7 L 28.5 0.7 Q 28.432 1.972 28.386 3.622 A 186.682 186.682 0 0 0 28.35 5.2 Q 28.3 7.85 28.3 12.2 L 27.15 12.2 A 48.348 48.348 0 0 0 26.331 8.272 A 44.535 44.535 0 0 0 26.3 8.15 Q 25.8 6.2 24.65 4.8 A 9.378 9.378 0 0 0 21.563 2.266 A 11.277 11.277 0 0 0 20.85 1.925 Q 18.5 0.9 16 0.9 A 8.764 8.764 0 0 0 12.585 1.561 A 8.409 8.409 0 0 0 11.475 2.125 Q 9.45 3.35 8 5.65 A 16.016 16.016 0 0 0 6.616 8.442 A 21.715 21.715 0 0 0 5.775 11.175 A 27.119 27.119 0 0 0 5.171 14.835 A 36.674 36.674 0 0 0 5 18.45 A 44.424 44.424 0 0 0 5.223 23.071 Q 5.805 28.608 7.9 31.625 A 9.38 9.38 0 0 0 14.05 35.539 A 14.748 14.748 0 0 0 16.9 35.8 A 10.403 10.403 0 0 0 18.384 35.7 Q 19.28 35.57 20.025 35.275 Q 21.35 34.75 22.1 34.25 A 6.33 6.33 0 0 0 22.568 33.9 Q 23.119 33.443 23.3 33.025 Q 23.55 32.45 23.55 31.5 L 23.55 26.7 A 16.793 16.793 0 0 0 23.519 25.63 Q 23.455 24.64 23.264 23.984 A 3.635 3.635 0 0 0 23.15 23.65 A 2.222 2.222 0 0 0 21.871 22.371 A 2.931 2.931 0 0 0 21.675 22.3 A 5.926 5.926 0 0 0 20.947 22.119 Q 19.977 21.935 18.5 21.9 L 18.5 20.9 A 46.753 46.753 0 0 0 19.218 20.934 Q 19.85 20.96 20.6 20.975 Q 21.8 21 23.125 21.025 Q 24.45 21.05 25.55 21.05 A 93.769 93.769 0 0 0 27.096 21.038 Q 27.852 21.026 28.525 21 Q 29.846 20.95 30.745 20.9 A 70.567 70.567 0 0 0 30.75 20.9 L 30.75 21.9 Q 29.65 21.95 29.1 22.25 Q 28.655 22.493 28.455 23.131 A 2.967 2.967 0 0 0 28.375 23.45 A 7.015 7.015 0 0 0 28.291 24.032 Q 28.2 24.87 28.2 26.2 L 28.2 36.1 L 27.2 36.1 Q 27.152 35.277 26.845 34.312 A 10.16 10.16 0 0 0 26.825 34.25 A 2.728 2.728 0 0 0 26.668 33.86 Q 26.571 33.67 26.455 33.539 A 0.783 0.783 0 0 0 25.85 33.25 A 1.277 1.277 0 0 0 25.391 33.338 A 1.568 1.568 0 0 0 25.25 33.4 Q 25.004 33.523 24.455 33.916 A 25.61 25.61 0 0 0 24.2 34.1 Q 22.55 35.35 20.7 36.075 Q 18.864 36.795 16.436 36.8 A 16.553 16.553 0 0 1 16.4 36.8 A 20.882 20.882 0 0 1 12.176 36.393 A 15.299 15.299 0 0 1 7.575 34.675 Q 3.9 32.55 1.95 28.55 Q 0.059 24.671 0.002 19.334 A 31.195 31.195 0 0 1 0 19 A 27.401 27.401 0 0 1 0.402 14.188 Q 0.919 11.291 2.1 8.9 Q 4.2 4.65 7.825 2.325 A 14.77 14.77 0 0 1 15.166 0.024 A 18.003 18.003 0 0 1 16.1 0 A 17.724 17.724 0 0 1 18.187 0.115 Q 19.228 0.239 20.099 0.496 A 8.033 8.033 0 0 1 21.35 0.975 Q 23.35 1.95 25.1 3.25 A 4.948 4.948 0 0 0 25.389 3.457 Q 25.67 3.643 25.881 3.711 A 0.722 0.722 0 0 0 26.1 3.75 A 0.669 0.669 0 0 0 26.631 3.452 Q 27.144 2.797 27.35 0.7 Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </a>
    </nav>
    
  )
}