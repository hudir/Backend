// step 01: import/add build-in module called http
// step 02: call createServer(requestListener(request, response)) method from http
// step 03: use listen(portNumber) from http to listen/read about the request


// build-in module : the module already installed by nodejs
// eg: http , https , fs
const http = require('http') // call/invoke http module
// require('nameOfTheModule')
const PORT = 5000
const myHost = "localhost"

// create a server
const server = http.createServer((request, response)=>{
    // response.end() can send response back to browser and end the request
    // response.end('My backend is running fine!')
    // console.log("My first Nodejs Server is running")
})

// listening server in a PORT and a hostname
server.listen(PORT, myHost, ()=>{
    console.log("My first Nodejs Server is running "+`on PORT: ${PORT} and HostName: ${myHost}`)
})