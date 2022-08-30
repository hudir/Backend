const {Schema, model} = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String,
        maxlength: [20, "max length 20"],
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        refer: "Authors",
        required: true
    },
    pages: {
        type: Number,
        min:[10, 'min 10 pages'],
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    description: String
}, {collection: "books"})

const Book = model('Books', bookSchema)

module.exports = Book