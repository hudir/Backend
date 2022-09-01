// a middleware that check if user login or not
const jwt = require('jsonwebtoken')

exports.isLogin = (req, res ,next) =>{
    if(req.session.user){
       next()
    } else {
        res.json('You are not logged in')
    }
}

// a middleware that check if user login or not
exports.isLoginToken = (req, res ,next) =>{
    if(req.session.user == req.body.token){
        jwt.verify(req.body.token, "hudir", (err, decode)=>{
            if(err) throw err
            req.user = decode
            next()
        })
    } else {
        res.json('You are not logged in')
    }
}