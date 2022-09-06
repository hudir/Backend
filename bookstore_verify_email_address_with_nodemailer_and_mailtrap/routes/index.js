const express  = require('express')
const{mainHandler} = require('../controllers/mainController')
const router = express.Router()
const {registerPage, addAuthor, verifyEmail} = require('../controllers/authorsController')

router.get('/', mainHandler)

router.get("/register",registerPage)

router.post("/register", addAuthor)

router.get('/verify', verifyEmail)



module.exports = router