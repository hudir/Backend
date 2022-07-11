const fs = require('fs')
const http = require('http')

const fileName = 'testFile.txt' 

// Read a file
// module.exports.fileRead = (filePath, callback=http.createServer.response.write) => {   
   
//     fs.readFile(filePath, (err,data)=>{
       
//         if (err) throw err
  
//         callback(data)
     
//     })
// }

exports.fileRead = (filePath) => { 
    let data   
    fs.readFile(filePath, (err,data1)=>{ 
        if (err) throw err
        console.log(data)
        // return data.toString()0
        data = data1.toString()
        console.log(data)
    })
    return 'data'
}

exports.fileAppend = () => {
    fs.appendFile('files/testFile.txt', 'hi there\n', (err)=>console.log('A new file created'))
    return '<h2>File created</h2>'
}

exports.replaceContentOfFile = () =>{
    fs.writeFile('files/testFile.txt',"i will be there, but no one can see me", (err)=>{
        console.log('textFile.txt is updated')
    })
    return '<h2>File updated</h2>'
}

exports.deleteFile = () => {
    fs.unlink('files/testFile.txt', (err)=>{
        console.log('testFile.txt has been removed from the server')
    })
    return '<h2>testFile.txt is deleted</h2>'
}


// create file synchronous way
exports.fileAppendSync =  () => {
    let res 
     res =  fs.appendFileSync('files/testFile.txt', 'hi there, create file synchronous way\n')

     if (res) {
        console.log('create file synchronous way')
        console.log(1111111111111)
     }
     return '<h2>create file synchronous way</h2>'
     
}