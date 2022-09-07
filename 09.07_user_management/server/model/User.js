const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}, {collection: "users"})