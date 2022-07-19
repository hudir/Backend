const mongoose = require('mongoose')
     , Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    country: String,
    gender: String,
    address: String,
    "zip code": Number
})

const User = mongoose.model("User", UserSchema);
module.exports = User;