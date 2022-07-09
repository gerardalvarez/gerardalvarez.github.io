import React from "react";
import "./sidebar.css";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Sidebar = () => {
  return (
    <>
      <div className="sidenav">
        <motion.div
          className="su"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <SocialIcon
            url="https://github.com/gerardalvarez"
            fgColor="#ffff"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
          />
        </motion.div>
        <motion.div
          className="su"
          initial={{ opacity: 0, x: -20, scale: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <SocialIcon
            url="https://www.instagram.com/gerardalvarez_/"
            fgColor="#ffff"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
          />
        </motion.div>
        <motion.div
          className="su"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <SocialIcon
            url="https://twitter.com/gerardalvarez00"
            fgColor="#ffff"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
          />
        </motion.div>
        <motion.div
          className="su"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/gerardalvarezizquierdo/"
            fgColor="#ffff"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
          />
        </motion.div>
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={item}
          transition={{ duration: 0.8, delay: 3.5 }}
        ></motion.hr>
      </div>
      <div className="sidenav2">
        <div className="email-container">
          <motion.div
            className="su2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            <a
              id="aa"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gerardalvariz@gmail.com"
              target="_blank"
            >
              gerardalvariz@gmail.com
            </a>
          </motion.div>
        </div>
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={item}
          transition={{ duration: 0.8, delay: 3.5 }}
        ></motion.hr>
      </div>
    </>
  );
};

export default Sidebar;
