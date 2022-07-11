console.log('app is now working')

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // res.end('<h1>Hi from App.js</h1>')

    console.log("\x1b[31mreq.url: ", req.url + "\x1b[0m")

    switch(req.url){
        case '/':
        case '/home':
            fs.readFile(__dirname+"/views/index.html", (error,data)=>{
                // if(error) thr/home/user/Desktop/Backend/07.11_simple_mvcow error // kill the process and show the error everything after will not excute
                if(error) {
                    console.log("ERROR", error.message);
                    res.end(JSON.stringify(error))
                } else {
                    // console.log(data) // buffer
                    res.end(data)
                }
            })
            break;

        case '/about':
            fs.readFile(__dirname+"/views/about.html", (err,data)=>{
                if (err) throw err
                res.end(data)
            })
            break;

        default:
            res.end('<h1>404, no such Page</h1>');
            break;
    }

    


})

// console.log("__dirname: ", __dirname)

server.listen(3001, ()=>console.log("Server is now working on Port: 3001"))