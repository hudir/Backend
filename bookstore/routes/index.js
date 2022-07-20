const express = require('express')
    , indexRouter = express.Router()
    , {indexController} = require('../controllers/indexController')  




    indexRouter.get('/', indexController)

module.exports = {indexRouter}