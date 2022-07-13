const express = require('express')
     ,app = express()

// Middleware

// tell express public folder is for public
app.use("/public", express.static('public'))
     // the req.url first with "/public"
    
// getting home page
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/about", (req, res)=>{
    res.status(200).send("<h1>This is About, Hello World</h1>")
})

app.get("/api", (req, res)=>{
    const obj = {
        name: 'hudir',
        age:37,
        city: 'Berlin'
    }
    res.json(obj)
})

app.get('/h', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/d', (req, res)=>{
    res.download(__dirname+'/views/data.txt')
})

app.get("/r", (req, res)=>{
    res.redirect('/')
})

// For all other Requests
app.get('*', (req, res)=>{
    res.status(404).send("Page Not Found")
})

app.listen(3000, ()=>console.log("Server is on port 3000"))