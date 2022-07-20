const express = require('express')
    , app = express()
    , userRouter = require('./routes/users')
    // , ejs = require('ejs')

 require('dotenv').config()
// setting application middleware

app.set('port', process.env.PORT || 3000)
// tell express that we will use ejs as a view engine
app.set('view engine', 'ejs')
// tell express, where is the views folder
// app.use('views', 'where is your views folder')
app.set('views', 'views')

// use usersRouter as handler for any request start with /users
app.use('/user', userRouter)





app.listen(app.get('port'), ()=>console.log("Server is running on Port " + app.get('port')))