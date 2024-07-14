const Dish = require('../models/Dish');

// Fetch all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle isPublished status
exports.togglePublishStatus = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
