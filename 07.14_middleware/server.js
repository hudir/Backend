const express = require('express')
    , app = express()
    , userRouter = require('./routes/userRouter')
    , productRouter = require('./routes/productRouter')
// setting
app.use('/user', userRouter)
// app.use('/firstPartOfRoute', nameOfTheModule)
app.use('/product', productRouter)

app.listen(3000, ()=>console.log("Server is running on port 3000"))