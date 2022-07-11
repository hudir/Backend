// build-in module : the module already installed by nodejs
// eg: http , https , fs
const http = require('http') // call/invoke http module
const fs = require('fs') // fs file-system
// require('nameOfTheModule')
const {name, age, showString, obj , method2}  = require('./myModule')
const {fileRead, fileAppend, deleteFile, replaceContentOfFile, fileAppendSync} = require('./controller/fileSystem')

const PORT = 3000
const myHost = "localhost"

// const fileAppendSync = async () => {
//     let res 
//     return res = await fs.appendFileSync('files/testFile.txt', 'hi there\n')
// }

// create a server
const server = http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const data = fileAppend()
    response.write(data)

    const update = replaceContentOfFile()
    response.write(update)

    const delete10 = deleteFile()
    response.write(delete10)

    response.write(fileRead('./files/index.html'))

    response.write(fileAppendSync())
    // response.end('done')

    // // READ a file
    // fs.readFile(path="./files/index.html", callback=(err, data)=>{
    //     // if any error happens display in console
    //     if(err) throw err
    //     // else
    //     console.log("reading html successful")
    //     response.write(data)
    //     response.end("<p>Loading html successful</p>")
    // })

    // // response.end() can send response back to browser and end the request

    // response.writeHead(200, {
    //     'Content-type': 'text/html'
    // })

    // response.write('Hello NodeJS')
    // //response finished whit end()
    // response.end('<p>My backend is running fine!</p>')
    // // console.log("My first Nodejs Server is running")
})

// listening server in a PORT and a hostname
server.listen(PORT, myHost, ()=>{
    console.log("My first Nodejs Server is running "+`on PORT: ${PORT} and HostName: ${myHost} `+ name + ' ' + age+ " " + showString()+ " " +obj.city + ' ' + obj.postNr + ' ' + method2())
    console.log(method2());
})