/**
 * Task: Add all common routes here like index or landing page, contact page, about me etc
 * - create 2 seperate routes for user.js and product.js 
*/

const express = require('express')
, indexRouter = express.Router()

indexRouter.get('/', (req, res) =>{
    res.json('This is indexRoute')
})

indexRouter.post('/', (req,res) => {
    console.log(req.body.msg)
    res.json(req.body)
})


module.exports = indexRouter