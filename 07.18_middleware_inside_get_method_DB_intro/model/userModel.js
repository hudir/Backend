/**
 * Database object Model(M) mapping
 * example:
 * js object
 * user = {
 * // Key: Type of the data
 * first_name: "Hudir", // String 
 * last_name: "Yang",  // String
 * age: 32 // Number
 * }
 */

// Step 01: import or call mongoose Schema object
const mongoose = require('mongoose')
     , Schema = mongoose.Schema 
// const Schma = require('mongoose').Schema


// Step 02: Create schema
// User Schema structure: new Schema(Object Map)
const userSchema = new Schema({
    // Key: Type of the data
    first_name: String, // String 
    last_name: String,  // String
    age: Number // Number
})

// const addressSchema = new Schema({
//     city: String
// })

// Stop 03: Declare the schema as a Model and export it
const User = mongoose.model('User', userSchema);
module.exports = User;