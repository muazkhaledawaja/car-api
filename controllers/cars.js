const { v4: uuidv4 } = require('uuid');
const Car = require('../models/car');



module.exports.getCar = async(req, res) => {
    const cars = await Car.find()
    res.send(cars)
}

module.exports.createCar = async(req, res) => {

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


};
module.exports.search = async(req, res) => {
    let data = await Car.find({
        "$or": [
            { name: { $regex: req.params.key, $options: "i" } },
            { model: { $regex: req.params.key, $options: "i" } },
            { description: { $regex: req.params.key, $options: "i" } }
        ]
    })
    res.send(data)
}

module.exports.updateCar = async(req, res) => {
    const { id } = req.params;
    const myCar = await Car.findByIdAndUpdate(id, {...req.body });
    await myCar.save();
    res.send(myCar)

}

module.exports.deleteCar = async(req, res) => {
    const { id } = req.params;
    const myCar = await Car.findByIdAndDelete(id);
    res.send(myCar)
    console.log(myCar);


}