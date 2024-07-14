// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dishRoutes = require('./routes/dishRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI);

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// app.use('/api', dishRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Dish = require("./models/Dish");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/dishes');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

// // Define Mongoose Schema
// const dishSchema = new mongoose.Schema({
//   dishName: String,
//   imageUrl: String,
//   isPublished: Boolean
// });

// const Dish = mongoose.model('Dish', dishSchema);

// // Routes
// // Fetch all dishes
app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find({});
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle isPublished status of a dish
// Toggle isPublished status of a dish


// Toggle isPublished status of a dish
app.put('/api/dishes/:dishId', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  
  
// Start server
app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
