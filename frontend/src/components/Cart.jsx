import React from 'react';
import { motion } from 'framer-motion';
import "../css/Cart.css";

const Cart = ({ totalPrice, quantity, nextOrderNumber, placeOrder }) => {
  return (
    <motion.div className="cart-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cart-title">Order Summary</h2>
      <p className="cart-price">Total Price: ${totalPrice * quantity}</p>
      <p className="cart-quantity">Quantity: {quantity}</p>
      <p className="cart-order-number">Order Number: {nextOrderNumber}</p>
      <motion.button
        className="cart-button"
        onClick={placeOrder}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Place Order
      </motion.button>
    </motion.div>
  );
};

export default Cart;
