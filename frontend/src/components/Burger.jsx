import React from 'react';
import { motion } from 'framer-motion';
import "../css/Burger.css";

const Burger = ({ slices }) => {
  return (
    <motion.div className="burger"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bread-top">Bread Top</div>
      {slices.length > 0 ? (
        slices.map((slice, index) => (
          <motion.div
            key={index}
            className={`slice ${slice.type}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {slice.name} (${slice.price})
          </motion.div>
        ))
      ) : (
        <p>Add some slices to your burger!</p>
      )}
      <div className="bread-bottom">Bread Bottom</div>
    </motion.div>
  );
};

export default Burger;
