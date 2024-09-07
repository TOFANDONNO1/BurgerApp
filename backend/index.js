const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');

require('dotenv').config();

const app = express();

connectDB();


app.use(cors());
app.use(express.json());
 
app.use('/api/orders', orderRoutes);
app.get("/",(req, res) => {
  res.send("Hii")
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
