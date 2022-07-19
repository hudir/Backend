/**
 * Add related settings and use of application here
 * - DB connections
 * - middlewares
 * - configuarations 
 * - routes connections
 */

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

// (R): Read all users from DB
/**
 * Queries: get/read/find something from database
 */

// find all: Model.find(callback(err, result))
app.get('/user/all', (req, res)=>{
    User.find((err, doc)=>{
        if(err) throw err;
        res.json(doc) // arr of object
    })
})

// find 1 user by id: findById((err, doc)=>{})
app.get('/user/findbyid/:id', (req, res)=>{
    User.findById(req.params.id, (err, doc)=>{
        if(err) {
            res.json(err)
            // throw err
        }
        else res.json(doc)
    })
})

// find 1 user by some obj {key:value}

// (U): Update: modify existing data
app.post('/user/update/:id', (req, res)=>{
    const dataToUpdate = req.body
    // Model.findByIdAndUpdate(id, newData, options, callback)
    User.findByIdAndUpdate(req.params.id, dataToUpdate,{new: true}, (err, result)=>{
        if(err) {
            res.json(err)
            // throw err
        }
        else {
            res.json(result)
            // User.findById(req.params.id, (err1, doc)=>{
            //     if(err1) {
            //         res.json(err1)
            //         // throw err
            //     }
            //     else res.json(doc)
            // })
        }
    })
})

// (D): delete existing data
app.get('/user/delete/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id, err=>{
        res.json("The User with id " + req.params.id + " is deleted")
    })
})





app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
