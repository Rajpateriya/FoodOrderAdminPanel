const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  dishName: String,
  dishId: String,
  imageUrl: String,
  isPublished: Boolean
});

module.exports = mongoose.model('Dish', dishSchema);
