const express = require('express')
    , booksRouter = express.Router()
    , {booksController} = require('../controllers/booksController')  




booksRouter.get('/', booksController)

module.exports = {booksRouter}