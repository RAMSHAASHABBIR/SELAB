const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import authentication routes
const productRoutes = require('./routes/products'); // Import product routes

const app = express();
const PORT = 5000;

// CORS middleware to allow requests from React frontend
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for your React app

// Middleware to parse JSON bodies
app.use(express.json());

// Register routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/products', productRoutes); // Product routes

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database connection error: ', err));

// Post route for signup (for testing the signup)
app.post('/auth/signup', (req, res) => {
  // Here, you would handle user sign up (e.g., save user to database)
  res.json({ message: 'Signup successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
