const express = require("express")
require('dotenv').config() // read .env file
const indexRouter = require('./routes/indexRouter')

const app = express()

// to make the application able to parse json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)


app.set('port', process.env.PORT)




app.listen(app.get('port'), ()=>console.log('server is running on port: '+app.get('port')))