const express = require('express')
     , app = express()
     , port = 3000
     , mongoose = require('mongoose')

// settings
mongoose.connect('mongodb+srv://admin:admin@hudirdb.2vmhh.mongodb.net/test')
.then(()=>console.log('MongoDB is connected...'))


// Routes



app.listen(port, ()=>console.log('Server is running on port ' + port))