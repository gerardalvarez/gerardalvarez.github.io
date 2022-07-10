import { React, useEffect, useState } from "react";
import "./card.css";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ children, estado, changeEstado }) => {
  return (
    <AnimatePresence>
      {estado && (
        <div className="card-container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            exit={{ scale: 0, transition: { duration: 0.2 } }}
            className="card"
          >
            <button
              onClick={() => {
                changeEstado(0);
                console.log(estado);
              }}
            >
              Estado
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Card;
