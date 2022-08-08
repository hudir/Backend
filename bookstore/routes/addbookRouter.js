const express = require('express')
     , addBookRouter = express.Router()
     , {addBookIndexHandler, addBookSubmitHandler} = require('../controllers/addbookController')



addBookRouter.get('/', addBookIndexHandler)

addBookRouter.post('/', addBookSubmitHandler)

module.exports=addBookRouter