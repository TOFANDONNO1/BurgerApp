const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  slices: [],
  quantity: Number,
  totalPrice: Number,
  mobile: String,
  orderNumber: String,
}); 

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
