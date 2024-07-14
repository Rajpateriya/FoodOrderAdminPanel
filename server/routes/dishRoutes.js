const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/api/dishes', async (req, res) => {
    try {
      const dishes = await Dish.find({});
      res.json(dishes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
router.put('/api/dishes/:dishId', async (req, res) => {
    const { dishId } = req.params;
    const { isPublished } = req.body;
    try {
      const updatedDish = await Dish.findByIdAndUpdate(
        dishId,
        { isPublished },
        { new: true }
      );
      if (!updatedDish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      res.status(200).json({ message: 'Updated successfully', dish: updatedDish });
    } catch (err) {
      console.error('Error toggling publish status:', err);
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
