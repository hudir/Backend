const User = require('../model/User')

const createUser = (req, res) =>{
    
    User.create(req.body, (err,data)=>{
        if(err) return res.json(err)
        res.json(data)
    })

}





module.exports = { createUser}