const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}, {collection: "users"})

const User = model('User'. userSchema)