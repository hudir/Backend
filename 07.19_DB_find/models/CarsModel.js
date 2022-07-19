const mongoose = require('mongoose')
     , Schema = mongoose.Schema
const Cars = mongoose.model('Cars', new Schema({
    name: String,
    year: Number,
    sofa: String,
    motor: String
}))

module.exports = Cars