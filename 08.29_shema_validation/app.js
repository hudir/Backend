const mongoose = require('mongoose')
const Users = require('./model/Users')

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schemaValidation', err=>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


let hudir = {
    name: "ausen",
    age: 24,
    married: true,
    email: "abcde@1fgh2312hf.com",
    // address:{
    //     // country: "USE",
    //     city:"New York",
    //     zipcode:12345
    // },
    brithDate: new Date("1999-05-05"),
    hobbies:["game", "code"],
    skill: "C#"
}

// Users.create(hudir)
// .then(()=>console.log('A new User is added'))
// .catch(err=>console.log(err.message))

new Users(hudir).save(err=>{
    if(err) return console.log(err.message)
    console.log('A new User is added')
})

// find

Users.find({})
.then(data=>{console.log(data)})
.catch(error=>{console.log(error.message)})