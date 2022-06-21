import React from 'react'
import './navbar.css'
import { useState, useEffect } from 'react';



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
    
    <header id="navbar" className={show}> 
       <a href="#home">Home</a>
       <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </header>
    
  )
}