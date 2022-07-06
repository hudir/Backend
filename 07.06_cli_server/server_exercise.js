const http = require("http")

const server = http.createServer((require,response)=>{
    // response.end("<h1>This is my second server program with nodejs</h1>")
    
    // /
    // /favicon.ico

    // /home
    // /favicon.ico
    switch(require.url){
        case '/':
        case '/home':
            response.end("This is my Home Page")
            break;

        case "/about":
            response.end("Welcome to About")
            break;
        
        case "/data":
            // console.log(response)
            response.writeHead(200, {"content-type": 'text/plain'})
            // console.log(response.Headers['content-type'])
            response.end("<h2>This is some text</h2>")
            // console.log(response.Head)
            break;
        
        case "/obj":
            const obj = {name:'zhuo',age:37};
            response.writeHead(200, {"content-type": 'application/json'})
            response.end(JSON.stringify(obj))
            break;

        
        default:
            response.writeHead(404)
            response.end("Page not find")
            break;
    }
})

const PORT = 3000
const myHost = "localhost"

server.listen(PORT, ()=>{
    console.log("Server is running on port "+PORT+' the host is '+ myHost)
})