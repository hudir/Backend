const express = require('express')
const router = express.Router();


router.get('/', (req, res)=>{
    res.json('<h1>Welcome to API<h1>')
})

module.exports = router;