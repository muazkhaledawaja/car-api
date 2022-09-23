const mongoose = require("mongoose");
const cars = require("./carDB");

const Car = require("../models/car");

mongoose.connect("mongodb://localhost:27017/carRent", {


});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    await Car.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 200) + 100000;
        const car = new Car({
            name: `${cars[random1000].name} `,
            model: `${cars[random1000].model} ${cars[random1000].year}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
            price,
        });
        await car.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});