import { React, useEffect, useState } from "react";
import "./card.css";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ children, estado, changeEstado, titulo }) => {
  return (
    <AnimatePresence>
      {estado && (
        <div
          className="card-container"
          onClick={() => {
            changeEstado(0);
            console.log(estado);
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, transition: { duration: 0.2 } }}
            className="card"
          >
            <div className="header-card">
              <div>{titulo}</div>
            </div>
            <div
              className="cerrar"
              onClick={() => {
                changeEstado(0);
                console.log(estado);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Card;
