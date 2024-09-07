import React from 'react';
import { motion } from 'framer-motion';
import "../css/Quantity.css";

const Quantity = ({ quantity, increase, decrease }) => {
  return (
    <div className="quantity-container">
      <motion.button
        className="quantity-button"
        onClick={decrease}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        -
      </motion.button>
      <span className="quantity-display">{quantity}</span>
      <motion.button
        className="quantity-button"
        onClick={increase}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        +
      </motion.button>
    </div>
  );
};

export default Quantity;
