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

// make bootstrap folder in node_modules as public
app.use('/bootstrap', express.static('node_modules/bootstrap'))


// 3- use json url for post requests
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// 4- book route for any "/books" request
app.use('/books', booksRouter)
// 5- author route for any "/authors" request
app.use('/authors', authorsRouter)
// 6- main router "/" for homepage
app.use('/', indexRouter)
// 404 page, all other request, general case
app.get('*', (req, res)=>{
    res.render('mainTemplate', {
        title: "404",
        content: "404"
    })

})




app.listen(app.get('port'), ()=>console.log("The Server is running on port: " + app.get('port') ))