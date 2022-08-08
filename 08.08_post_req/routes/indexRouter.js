const express= require('express')

const router = express.Router()

const {indexHandle, postHandler, getAllHandler, getUserById, getUserByQuery} = require("../controllers/indexController")

router.get("/", indexHandle)

router.post("/", postHandler)

router.get('/getall', getAllHandler)

router.get('/getuser/:id', getUserById)

router.get('/users', getUserByQuery)

module.exports = router