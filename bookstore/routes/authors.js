const express = require('express')
    , authorsRouter = express.Router()
    , {authorsController,singleAuthorsController} = require('../controllers/authorsController')  




    authorsRouter.get('/', authorsController)
    authorsRouter.get('/:id', singleAuthorsController)

module.exports = {authorsRouter}