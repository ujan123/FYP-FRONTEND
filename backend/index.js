const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const authRoutes = require('./routes/auth');  // Import the auth routes

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://uzan:wlv%409842771071@cluster0.hcfxe.mongodb.net/BykerNepal?retryWrites=true&w=majority'; // Replace with your actual URI

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use the auth routes
app.use('/api/auth', authRoutes);  // Mount the auth routes under /api/auth

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
