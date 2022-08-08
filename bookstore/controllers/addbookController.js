const authors = require('../data/authors.json')
    , books = require('../data/books.json')
    , fixPath = require('../fixPath')
    , fs = require('fs')

const addBookIndexHandler = (req, res) => {
    // console.log( authors.sort((a,b)=>a.name[0] - b.name[0]))
    res.render('mainTemplate', {
        title: "Add Book",
        content: "addbook",
        authors: authors.sort((a,b)=>a.name[0] - b.name[0])
    })
}

const addBookSubmitHandler = (req, res) => {
    // console.log(req.body)
    const authorId = authors.filter(x=>x.name===req.body.author)[0].id
    // console.log(authorId)
    const newBook = {id: books[0].books[books[0].books.length-1].id + 1 , ...req.body, authorId:authorId}

    fs.writeFile(fixPath(__dirname+'../data/books.json'), JSON.stringify([{books: [...books[0].books, newBook]}]), err => {
        if (err) {
            res.render('mainTemplate', {
            title: "ERROR",
            content: 'Errorbyaddbook',
            err: err
        }) } else {
            console.log('addbook success')
            res.redirect('/books')
        }      
    })
}


module.exports={addBookIndexHandler, addBookSubmitHandler}