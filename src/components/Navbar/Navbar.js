
import { useRef } from 'react';
import './navbar.css'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import  {FaBars,FaTimes} from 'react-icons/fa'
import { IconContext } from "react-icons";


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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
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

const navRef= useRef();

const shownav =() => {

  navRef.current.classList.toggle('responsive')

}
  return (
    
    <><nav id="navbar" className={show}>
      <div className='navbuttons'>
        <motion.a id='a' href="/home"
        initial="hidden"
        animate="visible"
          variants={item}
          transition ={{duration:1}}
          >Home</motion.a>
        <motion.a id='a' href="/About"
        initial="hidden"
        animate="visible"
          variants={item}
          transition ={{duration:0.8,delay:0.2}}
          >About Me</motion.a>
          <motion.a id='a' href="/skills"      
        initial="hidden"
        animate="visible"
          variants={item}
          transition ={{duration:0.8,delay:0.5}}
          >Skills</motion.a>
           <motion.a id='a' href="/projects"
        initial="hidden"
        animate="visible"
          variants={item}
          transition ={{duration:0.8, delay:0.8}}
          >Projects</motion.a>
          <motion.a id='a' href="/contact"   
        initial="hidden"
        animate="visible"
          variants={item}
          transition ={{duration:0.8, delay:1.1}}
          >Contact</motion.a>
         
      </div>
      <a href="/" className="logo">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="item"
          initial={{ scale: 1.5 }}
          whileHover={{ scale: 1.8, y: 3, x: 5 }}
          whileTap={{ scale: 1, y: 1, x: -12 }}

        >
          <motion.path
            d="M 66.188 1.694 L 68.971 1.694 A 224.846 224.846 0 0 0 68.806 5.324 Q 68.683 8.576 68.608 12.584 A 521.412 521.412 0 0 0 68.555 16.048 Q 68.496 20.844 68.488 27.35 A 1720.536 1720.536 0 0 0 68.487 29.524 L 65.704 29.524 A 117.002 117.002 0 0 0 63.722 20.019 A 107.741 107.741 0 0 0 63.647 19.723 A 22.16 22.16 0 0 0 61.655 14.589 A 19.036 19.036 0 0 0 59.654 11.616 A 22.694 22.694 0 0 0 52.182 5.483 A 27.292 27.292 0 0 0 50.458 4.659 Q 44.771 2.178 38.721 2.178 A 21.208 21.208 0 0 0 30.455 3.777 A 20.349 20.349 0 0 0 27.77 5.143 A 24.123 24.123 0 0 0 21.69 10.449 A 30.582 30.582 0 0 0 19.361 13.673 A 38.759 38.759 0 0 0 16.011 20.431 A 52.551 52.551 0 0 0 13.976 27.044 A 65.629 65.629 0 0 0 12.513 35.9 A 88.752 88.752 0 0 0 12.101 44.649 A 107.507 107.507 0 0 0 12.641 55.832 Q 14.047 69.231 19.119 76.533 A 22.7 22.7 0 0 0 34.002 86.005 A 35.69 35.69 0 0 0 40.899 86.636 Q 44.949 86.636 48.005 85.538 A 15.108 15.108 0 0 0 48.461 85.366 A 43.352 43.352 0 0 0 50.329 84.578 Q 52.235 83.717 53.483 82.885 Q 55.464 81.53 56.187 80.309 A 3.505 3.505 0 0 0 56.387 79.921 A 6.315 6.315 0 0 0 56.755 78.75 Q 56.888 78.141 56.947 77.42 A 14.82 14.82 0 0 0 56.992 76.23 L 56.992 64.614 A 40.639 40.639 0 0 0 56.915 62.025 Q 56.762 59.628 56.3 58.041 A 8.797 8.797 0 0 0 56.024 57.233 A 5.378 5.378 0 0 0 52.928 54.139 A 7.092 7.092 0 0 0 52.454 53.966 Q 50.192 53.23 46.055 53.042 A 59.8 59.8 0 0 0 44.771 52.998 L 44.771 50.578 Q 46.268 50.662 48.109 50.716 A 198.01 198.01 0 0 0 49.853 50.76 Q 52.757 50.82 55.963 50.881 Q 59.17 50.941 61.832 50.941 A 226.921 226.921 0 0 0 65.572 50.912 Q 67.346 50.883 68.929 50.824 A 137.824 137.824 0 0 0 69.031 50.82 Q 72.228 50.7 74.403 50.579 A 169.029 169.029 0 0 0 74.416 50.578 L 74.416 52.998 A 17.275 17.275 0 0 0 73.024 53.114 Q 71.379 53.324 70.423 53.845 Q 69.344 54.434 68.861 55.976 A 7.179 7.179 0 0 0 68.668 56.749 Q 68.245 58.927 68.245 63.404 L 68.245 87.362 L 65.825 87.362 Q 65.708 85.37 64.966 83.036 A 24.613 24.613 0 0 0 64.917 82.885 Q 64.553 81.765 64.021 81.163 A 1.895 1.895 0 0 0 62.558 80.465 A 3.09 3.09 0 0 0 61.446 80.678 A 3.795 3.795 0 0 0 61.106 80.828 Q 60.51 81.126 59.181 82.076 A 61.974 61.974 0 0 0 58.565 82.522 Q 54.572 85.547 50.095 87.302 A 24.533 24.533 0 0 1 44.928 88.671 Q 42.506 89.05 39.776 89.056 A 40.015 40.015 0 0 1 39.689 89.056 A 50.535 50.535 0 0 1 29.467 88.072 A 37.025 37.025 0 0 1 18.332 83.914 Q 9.439 78.771 4.72 69.091 Q 0.143 59.704 0.005 46.788 A 75.491 75.491 0 0 1 0.001 45.98 A 66.312 66.312 0 0 1 0.974 34.334 Q 2.219 27.351 5.06 21.584 A 42.338 42.338 0 0 1 5.083 21.538 A 41.799 41.799 0 0 1 11.968 11.442 A 36.366 36.366 0 0 1 18.937 5.627 A 35.744 35.744 0 0 1 36.703 0.058 A 43.566 43.566 0 0 1 38.963 0 A 42.891 42.891 0 0 1 44.013 0.279 Q 48.492 0.811 51.668 2.36 Q 56.508 4.719 60.743 7.865 A 11.975 11.975 0 0 0 61.44 8.366 Q 62.514 9.075 63.163 9.075 Q 65.462 9.075 66.188 1.694 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }} />
        </motion.svg>
      </a>
      <IconContext.Provider 
      value={{ color: 'white', size: '20px' }}
    >
      <div className='hola'><button><FaBars/></button></div>
    </IconContext.Provider>
     
    </nav>
    
    </>
    
  )
}