const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/dishes', dishController.getAllDishes);
router.put('/togglePublish/:dishId', dishController.togglePublishStatus);

module.exports = router;
