const express = require('express')
    , booksRouter = express.Router()
    , singleBooksRouter = express.Router()
    , {booksController, singleBooksController} = require('../controllers/booksController')  



// url: maindomain
booksRouter.get('/', booksController)

booksRouter.get('/:id', singleBooksController)

// singleBooksRouter.get('/:id', singleBooksController)
module.exports = {booksRouter, singleBooksRouter}