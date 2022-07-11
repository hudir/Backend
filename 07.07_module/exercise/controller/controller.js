const fs = require('fs');
const http = require('http')
//  const page = JSON.stringify(require('../index.html'))   // can't save html to a variable
const userName = 'frida'
const server = http.createServer((req, res)=>{
    // read file
    fs.readFile('../index.html', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data, ()=>console.log('reading index.html done'))
        
        fs.appendFile(`./files/${userName}.txt`, 'this is content', (err)=>console.log('Content is append / nihao.txt is created')) 

        res.write('<h3>nihao.txt is created/append</h3>', ()=>console.log('appendFile'))

        fs.writeFile('./files/zhuo.txt', 'replaced content, i should always see this', err=>console.log('replace content done'))

        // fs.rename('./files/zhuo.txt', './files/hudir.txt', err=>console.log('rename done'))

        fs.unlink('./files/frida.txt', err=>console.log('unlink frida.txt done'))  
        
       
    
        return res.end('ok', ()=>console.log('inside readFile'))
    })
    
    // create a file / append content of file
   
    // create a file / replace content of file


    // return res.end('end')
})


server.listen(3000, 'localhost')