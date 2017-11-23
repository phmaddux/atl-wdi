//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

const DonutModel = mongoose.model("Donut", DonutSchema)

module.exports = {
    DonutModel: DonutModel
}