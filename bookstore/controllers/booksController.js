// const bookJson = require('../data/books.json')
const fs = require('fs')
    , fixPath = require('../fixPath')

const booksController = (req, res) =>{
    fs.readFile(fixPath(__dirname+'../data/books.json'),(err, data)=>{
        if(err){
            res.json(err)
        } else {
            // res.json(JSON.parse(data.toString()))
            const bookJson = JSON.parse(data.toString())
            res.render('mainTemplate', {
                title: "Books",
                content: "books",
                data:bookJson
            })
        }
    })
}

const singleBooksController =  (req, res) =>{
    fs.readFile(fixPath(__dirname+'../data/books.json'),(err, data)=>{
        if(err){
            res.json(err)
        } else {
            const bookJson = JSON.parse(data.toString())
             // console.log("incoming attack processing")
            const singleBook = (bookJson)[0].books.filter(x=>x.id==req.params.id)[0]
            // console.log(singleBook)
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
            })  
}

module.exports = {booksController, singleBooksController}