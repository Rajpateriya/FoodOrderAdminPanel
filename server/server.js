const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const dishRoutes = require('./routes/dishRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});




app.use('/api', dishRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

