const express = require('express')
    , router = express.Router()
    , {userHandler} = require('../controler/userHandler')

// the handler: userHandler will process the request and send the response
router.get('/', userHandler)


module.exports = router