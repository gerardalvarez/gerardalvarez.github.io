import React from 'react'
import './sidebar.css'
import { SocialIcon } from 'react-social-icons';

const Sidebar = () => {
  return (
   <> <div class="sidenav">
    <SocialIcon url="https://github.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
    <SocialIcon url="https://www.instagram.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
  <SocialIcon url="https://twitter.com/jaketrent" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
  <SocialIcon url="https://www.linkedin.com/" fgColor="#ffff" bgColor='transparent' style={{ height: 35, width: 35 }}/>
  <hr></hr>
</div>
<div class="sidenav2">
    <div class="email-container">
        <a id="aa" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gerardalvariz@gmail.com" target="_blank">gerardalvariz@gmail.com</a>
    </div>
  <hr></hr>
</div>
</>


  )
}

export default Sidebar