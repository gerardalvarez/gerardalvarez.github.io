import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Result = () => {
  return <div className="mes">Your mensage has been successfully sent</div>;
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
      <div class="wrapper2">
        <div class="inner2">
          <form ref={form} onSubmit={sendEmail}>
            <h3 className="con">Contact Me</h3>
            <p className="c">
              Call my phone +34 608315018 or leave a message down below
            </p>
            <label class="form-group">
              <input
                type="text"
                name="user_name"
                class="form-control"
                required
              />
              <span>Your Name</span>
              <span class="border"></span>
            </label>
            <label class="form-group">
              <input
                type="email"
                name="user_email"
                class="form-control"
                required
              />
              <span for="">Your Mail</span>
              <span class="border"></span>
            </label>
            <label class="form-group">
              <textarea name="message" id="" class="form-control" required />
              <span for="">Your Message</span>
              <span class="border"></span>
            </label>
            <button>
              Submit
              <i class="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
          {result && <Result />}
        </div>

        <div class="foot">Made by Gerard Álvarez</div>
        <div class="footer-mov"></div>
      </div>
    </div>
  );
};

export default Contact;
