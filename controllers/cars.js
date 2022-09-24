const { v4: uuidv4 } = require('uuid');
const Car = require('../models/car');

//  

module.exports.getCar = async(req, res) => {
    const cars = await Car.find()
    res.send(cars)
}

module.exports.createCar = async(req, res) => {
    // const car = req.body;
    // const carWithId = {...car, id: uuidv4() }
    // cars.push(carWithId)
    // res.send(`A Car with the name ${carWithId.name} added to the db`)
    const myCar = new Car(req.body);
    await myCar.save()
    res.send(myCar)
    console.log(myCar);

};

module.exports.findCar = async(req, res) => {
    const myCar = await Car.findById(req.params.id);
    if (!myCar) {
        res.send("can't find this car");
    }
    res.send(myCar)
    console.log(myCar);


    // const test = cars.find(car => car.id === id)
    //     //  const test = cars.find(car => car.id === id);
    // console.log(test)
    // res.send(test)
};

module.exports.updateCar = async(req, res) => {
    const { id } = req.params;
    const myCar = await Car.findByIdAndUpdate(id, {...req.body });
    await myCar.save();
    res.send(myCar)

    // const { name, model, year } = req.body
    // const car = cars.find((car) => { car.id == id })

    // if (name) car.name = name
    // if (model) car.model = model
    // if (year) car.year = year
    // res.send(`car with the id ${id} has been updated`)
}

module.exports.deleteCar = async(req, res) => {
    const { id } = req.params;
    const myCar = await Car.findByIdAndDelete(id);
    res.send(myCar)
    console.log(myCar);

    // cars = cars.filter((car) => car.id != id)
    // res.send(`car with the id ${id} deleted from the DB`)

}