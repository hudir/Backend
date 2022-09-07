const app = require('express')()
    , cors = require('cors')
    , userRouter = require('./routes/userRouter')


require('dotenv').config()
require('mongoose').connect(process.env.DB, err=>err ? console.log(err) : console.log('DB connected'))

app.use(require('express').json())
app.use(cors())


app.use('/user', userRouter)










app.listen(process.env.PORT || 5000, err=> err ? console.log(err) :console.log('server is running on '+ process.env.PORT))