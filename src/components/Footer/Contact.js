import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import "./contact.css";

const Result = () => {
  return <div className="mes">Your menssage has been successfully sent</div>;
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kerfq8r",
        "template_xx8jmxj",
        form.current,
        "TvhxrE0qvZ0caVVtO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 8000);
  return (
    <div className="fondo-con">
      <div className="wrapper2" id="Contact">
        <div className="inner2">
          <form ref={form} onSubmit={sendEmail}>
            <h3 className="con">Contact Me</h3>
            <p className="c">
              Call my phone +34 608315018 or leave a message down below
            </p>
            <label className="form-group">
              <input
                type="text"
                name="user_name"
                className="form-control"
                required
              />
              <span>Your Name</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="email"
                name="user_email"
                className="form-control"
                required
              />
              <span>Your Mail</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <textarea
                name="message"
                id=""
                className="form-control"
                required
              />
              <span>Your Message</span>
              <span className="border"></span>
            </label>
            <button>
              Submit
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
          {result && <Result />}
        </div>

        <div className="foot">Made by Gerard Álvarez</div>
        <div className="footer-mov">
          <div className="iconos-redes">
            <motion.div
              className="su2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              <SocialIcon
                url="https://github.com/gerardalvarez"
                fgColor="#ffff"
                bgColor="transparent"
                style={{ height: "8vh", width: "8vh" }}
              />
            </motion.div>
            <motion.div
              className="su2"
              initial={{ opacity: 0, x: -20, scale: 1 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              <SocialIcon
                url="https://www.instagram.com/gerardalvarez_/"
                fgColor="#ffff"
                bgColor="transparent"
                style={{ height: "8vh", width: "8vh" }}
              />
            </motion.div>
            <motion.div
              className="su2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              <SocialIcon
                url="https://twitter.com/gerardalvarez00"
                fgColor="#ffff"
                bgColor="transparent"
                style={{ height: "8vh", width: "8vh" }}
              />
            </motion.div>
            <motion.div
              className="su2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              <SocialIcon
                url="https://www.linkedin.com/in/gerardalvarezizquierdo/"
                fgColor="#ffff"
                bgColor="transparent"
                style={{ height: "8vh", width: "8vh" }}
              />
            </motion.div>
          </div>
          <div className="nombre">gerardalvariz@gmail.com</div>
          <div className="nombre2">Made by Gerard Álvarez</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
