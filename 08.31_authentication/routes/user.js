const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { faker } =require('@faker-js/faker');
const bcrypt = require('bcrypt');
const {isLogin, isLoginToken} = require('../config/loginCheck')
const {roleCheck} = require('../config/roleCheck')
const jwt = require('jsonwebtoken')

router.get('/create', (req, res)=>{

    const newFakerUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        // password: faker.internet.password(),
        password: "12345678",
        avatar: faker.internet.avatar(),
        created_at: Date.now(),
        role: "student"
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

// login by session
router.post('/login', (req, res)=>{
    const {email, password} = req.body
    // console.log({email})

    User.findOne({email}, (err, data)=> {
        if(err) throw err
        if(data == null) res.json('This Email is not registered, pls sign up')
        else {
            // decryption and compare password
            bcrypt.compare(password, data.password, function(err, result) {
                // result == true
                if(!result) res.json('Password is wrong, pls try again')      
                else {
                     // store user inside session for 1 day
                    req.session.user = data
                    // console.log(req.sessionID)
                    req.session.save()
                    res.json({
                        greeting: 'Welcome '+ data.username,
                        // data
                    })
                }
            });   
        }   
    })
})

// login by JWT
router.post('/login/jwt', (req, res)=>{
    // jwt.sign(data, secret/private key)
    const {email, password} = req.body
    User.findOne({email}, (err, data)=>{
        if(err) throw err;
        if(data == null) res.json('No such email')
        else {
            bcrypt.compare(password, data.password, (err, result)=>{
                if(err) throw err;
                if(!result) res.json('wrong password')
                else {
                    // login 
                    const token = jwt.sign({email}, "hudir", {algorithm:'HS512', expiresIn: '2h'})
                    // console.log(token)
                    // req.session.user = {token: token, ...data}
                    req.session.user = token
                    req.session.save()
                    res.json({
                        token:token,
                        msg: "welcom  "+data.username
                    })
                }
            })        
        }
    })   
})



// Profile page after login
router.get('/profile', isLogin,(req, res)=>{
    res.json({
        msg: "Profile Page",
        user: req.session.user
    })
})

// Profile page after login with token
router.post('/profile/jwt', isLoginToken,(req, res)=>{
   res.json({user: req.user, page: "profile/jwt"})
    
})

// Gallery page after page
router.get('/gallery', isLogin, (req, res)=>{
   res.json('nice pictures')
})

// logout by session destroy
router.get('/logout', isLogin, (req, res)=>{
    req.session.destroy()
    res.json('Logged out')
})

router.get('/all', roleCheck, (req, res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

module.exports = router;