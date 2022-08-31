const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { faker } =require('@faker-js/faker');
const bcrypt = require('bcrypt');

router.get('/create', (req, res)=>{

    const newFakerUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        // password: faker.internet.password(),
        password: "12345678",
        avatar: faker.internet.avatar(),
        created_at: Date.now()
    }

    // encryption user password
    const saltRound = 10
    bcrypt.hash(newFakerUser.password, saltRound, (err, hashPassword)=>{
        if(err) throw err
        // console.log(hashPassword)
        newFakerUser.password = hashPassword
        User.create(new User(newFakerUser), (err, data)=>err? res.json(err) : res.json(data))
    })  
})

router.post('/login', (req, res)=>{
    const {email, password} = req.body
    console.log({email})

    User.findOne({email}, (err, data)=> {
        if(err) throw err
        if(data == null) res.json('This Email is not registered, pls sign up')
        else {
            // decryption and compare password
            bcrypt.compare(password, data.password, function(err, result) {
                // result == true
                if(!result) res.json('Password is wrong, pls try again')
                else res.json({
                    greeting: 'Welcome '+ data.username,
                    data: data
                })
            });   
        }   
    })
})



module.exports = router;