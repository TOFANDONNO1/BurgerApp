import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders/';

export const placeOrder = async (orderDetails) => {
  try {
    const response = await axios.post(API_URL, orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error placing order', error);
  }
};
