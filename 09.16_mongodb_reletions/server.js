const UserModel = require("./medols/UserSchema")

const express  = require("express")
    , app = express()


app.get("/users", async (req,res)=>{
    const users = await UserModel.find().populate({
        path:"orders",
        populate:[
            {
            path:"products",
            model:"products"
        },
        {path :"userId", model: "users"}
    ],
    })
})



app.listen(3000, ()=>console.log("server is on 3000"))