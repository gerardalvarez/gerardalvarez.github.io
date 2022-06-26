import React from 'react'
import { motion } from 'framer-motion'  
import './aboutMe.css'




const Aboutme = () => {
  const item = {
    hidden: {  opacity: 0 },
    visible: {
      opacity: 1
    }
  };
  return (
    <><div className='container'>
      <motion.div 
      initial="hidden"
      animate="visible"
        variants={item}
        transition ={{duration:2}}
        >
           <a id='a' href="/aboutme">About Me</a></motion.div>
    </div>
   
    </>
  )
}

export default Aboutme