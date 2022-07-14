const express = require('express')
    , app = express()
    , userRouter = require('./routes/userRouter')
    , productRouter = require('./routes/productRouter')
    , showLogin = require("./middleware/time")
// setting

// a function and works like an object
// middleware --> a way of doing something
// function login(req, res, next){
//     const login = true;
//     if(login){
//         console.log("i'm logged in")
//         next() // next middleware or response
//     } else {
//         res.json("You're not Logged in!")
//     }
// }
// app.use(login) // login midd;eware

app.use(showLogin)

app.get('/', (req, res)=>{
    res.json("Its Final response")
})


app.use('/user', userRouter)
// app.use('/firstPartOfRoute', nameOfTheModule)
app.use('/product', productRouter)

app.listen(3000, ()=>console.log("Server is running on port 3000"))