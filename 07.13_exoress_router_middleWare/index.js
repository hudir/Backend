// declare or invoke of modules/packages in same place
const express = require("express")
    , app = express()
    , Port = 3000
    , {log} = require("console")

// settings

// routes and render/view

// routes: app.httpMethod(path, callback(req, res))
app.get('/user/list', (req,res)=>{
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


app.listen(Port, ()=>log("server is running on port: "+ Port))