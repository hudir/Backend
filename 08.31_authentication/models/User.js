const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {type: String, unique: true},
  password: String,
  created_at: Date,
  avatar: String,
  role:{
    type: String,
    validate:val=>(val == "admin" || val == "teacher" ||val == "student") ? true : false
    
  }
}, {collection: "fakerUser"});

const User = mongoose.model('User', userSchema);

module.exports = User;