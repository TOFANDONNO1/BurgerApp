import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Burger from './components/Burger';
import Cart from './components/Cart';
import Quantity from './components/Quantity';
import Slice from './components/Slice';
import { placeOrder } from './api/orderApi';
import "./App.css";

const availableSlices = [
  { name: 'Aloo Tikki', price: 2, type: 'aloo-tikki' },
  { name: 'Cheese', price: 1.5, type: 'cheese' },
  { name: 'Paneer', price: 2.5, type: 'paneer' },
  { name: 'Lettuce', price: 0.5, type: 'lettuce' }
];
 
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const App = () => {
  const [slices, setSlices] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nextOrderNumber, setNextOrderNumber] = useState('BURG-001');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const price = slices.reduce((acc, slice) => acc + slice.price, 0);
    setTotalPrice(price);
  }, [slices]);

  const addSlice = (sliceToAdd) => {
    setSlices((prevSlices) => [...prevSlices, sliceToAdd]);
  };

  const removeSlice = (sliceToRemove) => {
    setSlices((prevSlices) => {
      const index = prevSlices.findIndex(slice => slice.type === sliceToRemove.type);
      if (index >= 0) {
        const newSlices = [...prevSlices];
        newSlices.splice(index, 1);
        return newSlices;
      }
      return prevSlices;
    });
  };

  const placeOrderHandler = async () => {
    if (!mobile) {
      alert('Please enter a mobile number');
      return;
    }

    const orderDetails = {
      slices,
      quantity,
      totalPrice: totalPrice * quantity,
      mobile,
    };
    const orderResponse = await placeOrder(orderDetails);
    console.log('Order Placed:', orderResponse);
    alert(orderResponse.message);
    setNextOrderNumber(orderResponse.nextOrderNumber);
  };
    
  
  return (
    <div className="container">
  <div>
  <h1>Burger Builder</h1> 
  <Burger slices={slices} />
  </div>
      <div>
      <h2>Available Slices</h2>
      {availableSlices.map((slice) => (
        <motion.div
          key={slice.type}
          className="animated-container"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Slice slice={slice} addSlice={addSlice} removeSlice={removeSlice} />
        </motion.div>
      ))}
      <Quantity
        quantity={quantity}
        increase={() => setQuantity(quantity + 1)}
        decrease={() => setQuantity(Math.max(1, quantity - 1))}
      />
      </div>
      <div>
      <div>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
          />
        </label>
      </div>
      <Cart
        totalPrice={totalPrice}
        quantity={quantity}
        nextOrderNumber={nextOrderNumber}
        placeOrder={placeOrderHandler}
      />
      </div>

     
     
    </div>
  );
};

export default App;
