const authors = require('../data/authors.json')
    , books = require('../data/books.json')
    , fixPath = require('../fixPath')
    , fs = require('fs')

const addBookIndexHandler = (req, res) => {
    // console.log( authors[0].name)
    const sortedAuthor = authors.map(x=>x.name).sort()
    res.render('mainTemplate', {
        title: "Add Book",
        content: "addbook",
        authors: sortedAuthor
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
            // setTimeout(()=>{},1000)

            // res.redirect works with POST method
            res.redirect('/books')
            
        }      
    })
}


module.exports={addBookIndexHandler, addBookSubmitHandler}