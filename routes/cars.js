const express = require('express');
const router = express.Router();
const cars = require('../controllers/cars')
const catchAsync = require('../utils/catchAsync');





router.get('/cars', catchAsync(cars.getCar))
router.get('/search/:key', catchAsync(cars.search))
router.post('/car', catchAsync(cars.createCar))
router.get('/car/:id', catchAsync(cars.findCar))
router.delete('/car/:id', catchAsync(cars.deleteCar))
router.patch('/car/:id', catchAsync(cars.updateCar))


module.exports = router;