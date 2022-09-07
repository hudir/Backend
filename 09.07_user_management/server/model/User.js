const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    name: {
        firstName: {
            type: String,
            required: [true, 'Please write first name']
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
    },
    role: {
        type: String,
        enum: ["admin", "program manager", "student", "teacher"]
    },
    age: {
        type: Number,
        min: 16,
        max: 70
    }
}, {collection: "users"})

const User = model('User'. userSchema)

module.exports = User