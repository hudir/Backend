const express = require('express')
     , app = express()
     , port = 3000
     , mongoose = require('mongoose')
     , User = require('./model/userModel')


    
// settings
require('dotenv').config()
mongoose.connect(process.env.DB)
.then(()=>console.log('MongoDB is connected...'))
app.use(express.json())


// Routes
// Create a user from User model and save it
// app.get('/user/create', (req, res)=>{
//     // how to create data based on model?
//     const newUser = new User({
//         first_name: 'hudir',
//         last_name: 'yang',
//     })

//     // save the data into DB
//     newUser.save(()=>{
//         res.json('1 User has been created')
//     })
// })

app.post('/user/create', (req, res)=>{
    // how to create data based on model?
    console.log(req.body)
    const newUser = new User(req.body)

    // save the data into DB
    newUser.save(()=>{
        res.json('1 User has been created')
    })
})



app.listen(port, ()=>console.log('Server is running on port ' + port))