const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});
const opts = { toJSON: { virtuals: true } };
const carSchema = new Schema({
    name: String,
    model: String,
    year: String, // to be int
    price: Number, // float 
    distance_by_liter: Number,
    description: String,
}, opts)
module.exports = mongoose.model('Car', carSchema);