// const bookJson = require('../data/books.json')
const {readBookById} = require('../models/bookData')

const fs = require('fs')
    , fixPath = require('../models/fixPath')

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
    readBookById(req.params.id)
    .then(data=>{
        if(data){
            // console.log(111)
            res.render('mainTemplate', {
                title: data.title,
                content: "books",
                // data:bookJson,
                singleBook:data
                })
        } else {
            // console.log(222)
            res.render('mainTemplate', {
                title: "404",
                content: "404"
            })
        }

    })
    .catch(err=>res.json(err))   
}

module.exports = {booksController, singleBooksController}