const express = require('express')
const carRoutes = require('./routes/cars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ExpressError = require('./utils/ExpressError');
const app = express();

mongoose.connect('mongodb://localhost:27017/carRent', {

}, (err) => {
    if (err) {
        console.log(err)
    } else(
        console.log('successfully connected')
    )
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.json())

app.use('/api/v1', carRoutes)

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
})