const Dish = require('../models/Dish');

// Fetch all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({});
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle isPublished status
exports.togglePublishStatus = async (req, res) => {
  try {
    const dishId = req.params.dishId;
    const dish = await Dish.findOne({ dishId });
    if (!dish) {
      return res.status(404).json({ error: 'Dish not found' });
    }
    dish.isPublished = !dish.isPublished;
    await dish.save();
  
    res.status(200).json(dish);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};
