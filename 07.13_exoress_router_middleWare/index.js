// declare or invoke of modules/packages in same place
const express = require("express")
    , app = express()
    , Port = 3000
    , {log} = require("console")
    , axios = require('axios')
    , fs = require('fs')
   

// settings
app.use(express.json())  // setting for getting json data from client

// routes and render/view

// routes: app.httpMethod(path, callback(req, res))
app.get('/user/list', (req, res)=>{    // 1 response 1 time
    // render/view

    // send txt/html tags
    // res.write('Hello')
    // res.end()  // this 2 line is === to res.send("Hello")

    // send obj/json
    const person = {"users":[{"id":"1", "fullname": "hudir"}, {"id":"2", "fullname": "alex"}]}
    // res.send(person);  // string, js object, json

    // to send APIs using res.json
    // res.json({id:"1", fullname: "hudir"});  // json and string
    // res.json(Buffer.from("Boo")) // {"type":"Buffer","data":[66,111,111]}

    res.sendFile(__dirname + "/views/index.html")
})

// get all users from api
app.get('/user/all', (req, res)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((data) => res.json(data.data))
})

app.use(express.json())

app.post('/user/create', (req, res)=>{
    // const user = {
    //     id:509,
    //     name:"hudir"
    // }
    log(req.body)
    const user = req.body  // data come from frontend // postman
    // fs module can write and save this
    fs.writeFile('data/user.json', JSON.stringify(user), err=>{
        if(err) throw err;
        res.send("1 user is created")
    })
})

app.listen(Port, ()=>log("server is running on port: "+ Port))