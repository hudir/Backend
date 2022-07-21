const bookJson = require('../data/books.json')

const booksController = (req, res) =>{
    res.render('mainTemplate', {
        title: "Books",
        content: "books",
        data:bookJson


    })
}

const singleBooksController =  (req, res) =>{
    const singleBook = (bookJson)[0].books.filter(x=>x.id==req.params.id)[0]
    console.log(singleBook)
    if(singleBook) {
        res.render('mainTemplate', {
        title: singleBook.title,
        content: "books",
        data:bookJson,
        singleBook:singleBook
        })
    } else {
        res.render('mainTemplate', {
            title: "404",
            content: "404"
        })
    }
    
    
}

module.exports = {booksController, singleBooksController}