const mongoose = require('mongoose')
const Users = require('./model/Users')

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schemaValidation', err=>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


let hudir = {
    name: "zhuoo",
    age:32,
    married: true,
    email: "abcde@fght1fhf2hf.com",
    // address:{
    //     // country: "USE",
    //     city:"New York",
    //     zipcode:12345
    // },
    brithDate: new Date("1999-05-05"),
    hobbies:["game", "code"],
    skill: "C#"
}

Users.create(hudir)
.then(()=>console.log('A new User is added'))
.catch(err=>console.log(err.message))