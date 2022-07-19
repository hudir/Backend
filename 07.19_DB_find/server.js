const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/UserModel')
    , Cars = require('./models/CarsModel')

require('dotenv').config()
app.use(express.json())

const PORT = process.env.PORT;

mongoose.connect(`mongodb+srv://${process.env.DB_user}:${process.env.DB_psw}@hudirdb.2vmhh.mongodb.net/${process.env.DB_name}`)
.then(()=>console.log('MongoDB is connected...'))


app.post('/user/create', (req, res)=>{
    console.log(req.body)
    const newUser = new User(req.body);
    newUser.save(()=>{
        res.send('New User Created and saved in DB')
    })
})

app.post('/car/create', (req, res)=>{
    console.log(req.body);
    const newCar = new Cars(req.body);
    // console.log(newCar.prototype)
    newCar.save(()=>res.send('New Car created!'))
})



/**
 * Add related settings and use of application here
 * - DB connections
 * - middlewares
 * - configuarations 
 * - routes connections
 */

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
