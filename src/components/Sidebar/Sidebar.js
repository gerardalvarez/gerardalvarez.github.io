import React from 'react'
import './sidebar.css'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";


const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Sidebar = () => {
  return (
   <> <div class="sidenav">
    <motion.div 
    initial={{opacity:0,x:-20}}
    animate={{opacity:1, x:0}}
    transition ={{duration:0.8,delay:5}}>
    <SocialIcon url="https://github.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
    </motion.div>
    <motion.div 
    initial={{opacity:0,x:-20}}
    animate={{opacity:1, x:0}}
    transition ={{duration:0.8,delay:5}}>
    <SocialIcon url="https://www.instagram.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
    </motion.div>
    <motion.div 
    initial={{opacity:0,x:-20}}
    animate={{opacity:1, x:0}}
    transition ={{duration:0.8,delay:5}}>
  
  <SocialIcon url="https://twitter.com/jaketrent" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
  </motion.div>
  <motion.div 
    initial={{opacity:0,x:-20}}
    animate={{opacity:1, x:0}}
    transition ={{duration:0.8,delay:5}}>
      <SocialIcon url="https://www.linkedin.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
</motion.div>
<motion.hr 
   initial="hidden"
   animate="visible"
     variants={item}
     transition ={{duration:0.8, delay:5}}
  ></motion.hr>
</div>

<div class="sidenav2">
    <div class="email-container">
    <motion.div 
    initial={{opacity:0,x:-20}}
    animate={{opacity:1, x:0}}
    transition ={{duration:0.8,delay:5}}>
      <a id="aa" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gerardalvariz@gmail.com" target="_blank">gerardalvariz@gmail.com</a>
</motion.div>
        
    </div>
    <motion.hr 
   initial="hidden"
   animate="visible"
     variants={item}
     transition ={{duration:0.8, delay:5}}
  ></motion.hr>
</div>
</>


  )
}

export default Sidebar