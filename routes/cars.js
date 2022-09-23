const express = require('express');
const router = express.Router();
const cars = require('../controllers/cars')





router.get('/cars', cars.getCar)
router.post('/car', cars.createCar)
router.get('/car/:id', cars.findCar)
router.delete('/car/:id', cars.deleteCar)
router.patch('/car/:id', cars.updateCar)


module.exports = router;