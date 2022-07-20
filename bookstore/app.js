const express = require('express')
    , app = express()
    , {booksRouter} = require('./routes/books')
    , {authorsRouter} = require('./routes/authors')
    , {indexRouter} = require('./routes/index')


// setting middleware
require('dotenv').config()
app.set('port', process.env.PORT || 3000)
// 1- view engine
app.set('view engine', 'ejs')
// 2- public folder(font end files)
app.set('views', 'views')
app.use(express.static('public'))
// 3- use json url for post requests
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// 4- book route for any "/books" request
app.use('/books', booksRouter)
// 5- author route for any "/authors" request
app.use('/authors', authorsRouter)
// 6- main router "/" for homepage
app.use('/', indexRouter)






app.listen(app.get('port'), ()=>console.log("The Server is running on port: " + app.get('port') ))