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
const mongoose = require('mongoose');

// Toggle isPublished status of a dish
app.put('/api/dishes/:dishId', async (req, res) => {
  const { dishId } = req.params;
  const { isPublished } = req.body;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(dishId)) {
    return res.status(400).json({ error: 'Invalid dishId format' });
  }

  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      mongoose.Types.ObjectId(dishId), // Convert string to ObjectId
      { isPublished },
      { new: true }
    );

    if (!updatedDish) {
      return res.status(404).json({ error: 'Dish not found' });
    }

    res.status(200).json({ message: 'Updated successfully', dish: updatedDish });
  } catch (err) {
    console.error('Error toggling publish status:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

  
  
// Start server
app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
