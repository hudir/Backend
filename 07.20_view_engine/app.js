const express = require('express')
    , app = express()
    , userRouter = require('./routes/users')

 require('dotenv').config()
// setting application middleware

app.set('port', process.env.PORT || 3000)

// use usersRouter as handler for any request start with /users
app.use('/user', userRouter)





app.listen(app.get('port'), ()=>console.log("Server is running on Port " + app.get('port')))