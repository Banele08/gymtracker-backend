// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

// Routes
app.use('/api/exercises', require('./routes/exercises'));
app.use('/api/workouts', require('./routes/workouts'));

// Base route
app.get('/', (req, res) => {
  res.send('🏋️ Gym Tracker API is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${5000}`);
});
