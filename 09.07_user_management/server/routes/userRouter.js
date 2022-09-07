const userRouter = require('express').Router()
     , {createUser} = require('../controller/user')

userRouter.get('/', (req,res)=>res.json('123'))

userRouter.post('/create', createUser)


module.exports = userRouter