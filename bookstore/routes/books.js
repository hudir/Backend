const express = require('express')
    , booksRouter = express.Router()
    , {booksController} = require('../controllers/booksController')  



// url: maindomain
booksRouter.get('/', booksController)

module.exports = {booksRouter}