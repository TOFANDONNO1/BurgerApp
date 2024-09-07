const Order = require('../models/Order');

let orderSerial = 1;

const createOrder = async (req, res) => {
  try {
    const { slices, quantity, totalPrice, mobile } = req.body;

    const orderNumber = `BURG-${String(orderSerial).padStart(3, '0')}`;
    orderSerial++;

    const newOrder = new Order({
      slices,
      quantity,
      totalPrice, 
      mobile,
      orderNumber,
    }); 

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', nextOrderNumber: `BURG-${String(orderSerial).padStart(3, '0')}` });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};

module.exports = { createOrder };
