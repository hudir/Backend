const {Schema, model} = require('mongoose')

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: val=> /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
    },
    phone: {
        type: String,
        minlength: 10
    },
    address: {
        country:{
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }

    }
}, {collection: "authors"})

const Author = model('Authors', authorSchema)

module.exports = Author