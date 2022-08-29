const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/exercise', err=> err ? console.log(err) : console.log('mongodb connected'))

const Users = require('./model/Users')

Users.create({
    name: "hudir",
    email: "hudir43313243333@abc.com",
    password:"123333",
    age:18,
    // gender: "female",
    phone:17695555555,
    address: {
        country: "USA",
        city: "New York",
        street: "Paris Street"
    },
    hobbies: ["Hallo", "111"]
})
.then(d=>console.log('add 1 user'))
.catch(err=>console.log(err.message))


Users.find()
.then(d=>console.log(d.length+' users in db'))
.catch(err=>console.log(err.message))

// Users.findOne({name: "hudir"})
// .then(d=>console.log(d))
// .catch(err=>console.log(err.message))

// Users.findOne({email: "hudir34333@abc.com"})
// .then(d=>console.log(d))
// .catch(err=>console.log(err.message))

// Users.updateOne({_id: "630cb6900a677648b28f5ed7"}, {age: 68})
// .then(d=>console.log(d))
// .catch(err=>console.log(err.message))

// Users.deleteOne({age: 68})
// .then(d=>console.log(d))
// .catch(err=>console.log(err.message))