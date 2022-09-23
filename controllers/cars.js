const { v4: uuidv4 } = require('uuid');

let cars = [{
    "name": "muaz",
    "model": "RD",
    "year": 2020,
    "id": "3acfc4b5-66b1-4f4b-ab4d-54e00ed2ec92"
}]

module.exports.getCar = (req, res) => {
    res.send(cars)
    console.log(cars);
}

module.exports.createCar = (req, res) => {
    const car = req.body;
    const carWithId = {...car, id: uuidv4() }
    cars.push(carWithId)
    res.send(`A Car with the name ${carWithId.name} added to the db`)
};

module.exports.findCar = (req, res) => {
    const { id } = req.params;
    const test = cars.find(car => car.id == id)
        //  const test = cars.find(car => car.id === id);
    console.log(test)
    res.send(test)
};

module.exports.updateCar = async(req, res) => {
    const { id } = req.params;
    const { name, model, year } = req.body
    const car = cars.find((car) => { car.id == id })

    if (name) car.name = name
    if (model) car.model = model
    if (year) car.year = year
    res.send(`car with the id ${id} has been updated`)
}

module.exports.deleteCar = (req, res) => {
    const { id } = req.params;
    cars = cars.filter((car) => car.id != id)
    res.send(`car with the id ${id} deleted from the DB`)

}