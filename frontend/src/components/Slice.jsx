import React from 'react';
import { motion } from 'framer-motion';
import "../css/Slice.css";

const Slice = ({ slice, addSlice, removeSlice }) => {
  return (
    <motion.div
      className="slice-control"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="slice-info">{slice.name} (${slice.price})</p>
      <motion.button
        className="slice-button add-button"
        onClick={() => addSlice(slice)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Add
      </motion.button>
      <motion.button
        className="slice-button remove-button"
        onClick={() => removeSlice(slice)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Remove
      </motion.button>
    </motion.div>
  );
};

export default Slice;
