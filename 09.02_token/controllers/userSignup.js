import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export  const userSignup = async (req, res) => {
    const {firstName, email, password} = req.body

    try {
        // check if user already exists
        let existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({msg: "email already used"})
        } 
        // create a new user
        const salt = await bcrypt.genSalt(10)
        const newPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName: firstName,
            email: email,
            password: newPassword,
        })

        await newUser.save()

        const payload = {
            user: {
                id: newUser.id
            }
        }

        jwt.sign(payload, "randomString", {expiresIn: "1h"}, (err,token)=>{
            if(err) throw err;
            res.json(token)
        })
        


    } catch(err){
        res.status(500).send(err)
    }

}



export  const userLogin = async (req, res) => {
    console.log(111)
    const { email, password} = req.body

    try {
        // check if user already exists
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({msg: "email not used"})
        } 
        // check password
        
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){

            const payload = {
                user: {
                    id: user.id
                }
            }
    
            jwt.sign(payload, "randomString", {expiresIn: "1h"}, (err,token)=>{
                if(err) throw err;
                res.json(token)
            })
        } else {
            return res.status(400).json({msg: "password wrong"})
        }
        
        


    } catch(err){
        res.status(500).send(err)
    }

}

export const userProfile = async (req, res) =>{
    console.log(111)
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)
    }
    catch (err) {
        res.status(401).json(err)
    }

}