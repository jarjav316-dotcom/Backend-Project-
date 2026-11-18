const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require('./routes/product.route.js');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/products', productRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server!');
});

// Connect to MongoDB then start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.log('Connection failed!', error);
  });
