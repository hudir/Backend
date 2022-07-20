const express = require('express')
    , authorsRouter = express.Router()
    , {authorsController} = require('../controllers/authorsController')  




    authorsRouter.get('/', authorsController)

module.exports = {authorsRouter}