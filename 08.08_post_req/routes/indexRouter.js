const express= require('express')

const router = express.Router()

const {indexHandle, postHandler} = require("../controllers/indexController")

router.get("/", indexHandle)
router.post("/", postHandler)

module.exports = router