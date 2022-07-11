// console.log('app is now working')
const http = require('http')
const loadFile = require('./models/loadFile')

const readYourFile = loadFile.loadView;


const server = http.createServer((req,res)=>{
    // res.end('<h1>Hi from App.js</h1>')

    console.log("\x1b[31mreq.url: ", req.url.split('/')[1] + "\x1b[0m")
    // console.log("\x1b[33mMethode: ", req.method + "\x1b[0m")

    if(req.url.split('/')[1]==='public'){
        readYourFile(__dirname+req.url)
                .then(data=>{
                    res.writeHead(200,{"content-type": `text/${req.url.split('/')[req.url.split('/').length-1].split('.')[1]}`});
                    res.end(data);
                    console.log('i`m working')
                })
                .catch(err=>console.log(err))
    }
    else {
       switch(req.url){
        case '/':
        case '/home':
            // fs.readFile(__dirname+"/views/index.html", (error,data)=>{
            //     // if(error) thr/home/user/Desktop/Backend/07.11_simple_mvcow error // kill the process and show the error everything after will not excute
            //     if(error) {
            //         console.log("ERROR", error.message);
            //         res.end(JSON.stringify(error))
            //     } else {
            //         // console.log(data) // buffer
            //         res.end(data)
            //     }
            // })
            readYourFile(__dirname+"/views/index.html").then(data=>res.end(data)).catch(err=>res.end(err));
            break;

        case '/about':
            // fs.readFile(__dirname+"/views/about.html", (err,data)=>{
            //     if (err) throw err
            //     res.end(data)
            // })
            readYourFile(__dirname+"/views/about.html").then(data=>res.end(data)).catch(err=>res.end(err))
            break;

        case "/api":
            let obj = {
                name:"hudir",
                age:37
            }
            res.end(JSON.stringify(obj))
            break;

        // case "/public/css/style.css":
        //     readYourFile(__dirname+"/public/css/style.css").then(css=>{
        //         res.writeHead(200, {"content-type": "text/css"})
        //         res.end(css)
        //     }).catch(err=>res.end(err));
        //     break;

        // case "/public/js/script.js":
        //     readYourFile(__dirname+ "/public/js/script.js").then(js=>{
        //         res.writeHead(200, {"content-type": "text/js"});
        //         res.end(js);
        //     }).catch(err=>res.end(err));
        //     break;

        default:
            res.writeHead(404)
            res.end('<h1>404, no such Page</h1>');
            break;
    }
}

    


})

// console.log("__dirname: ", __dirname)

server.listen(3001, ()=>console.log("Server is now working on Port: 3001"))