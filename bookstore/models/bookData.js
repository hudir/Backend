const authors = require('../data/authors.json')
    , books = require('../data/books.json')
    , fixPath = require('./fixPath')
    , fs = require('fs')


/**
 * @param {Object} as an Object
 * @like req.body
 * */ 
const saveBookFromFormPost = book => {
    return new Promise((resolve, reject)=>{
        // check
        if(books[0].books.some(x=>x.title == book.title && x.author == book.author)) reject({errorNr:5, message: 'Book already exist'}) 
        else {

            console.log(333)

        const authorId = authors.filter(x=>x.name===book.author)[0].id
        // console.log(authorId)
        const newBook = {id: books[0].books[books[0].books.length-1].id + 1 , ...book, authorId:authorId}
    
        fs.writeFile(fixPath(__dirname+'../data/books.json'), JSON.stringify([{books: [...books[0].books, newBook]}]), err => {
            if (err) {
                reject(err)
            } else {
                resolve()        
        }      
    })
        }

        
    })
}

const readBookById = id => {
    return new Promise((resolve,reject)=>{
        fs.readFile(fixPath(__dirname+'../data/books.json'),(err, data)=>{
            if(err){
                reject(err)
            } else {
                const bookJson = JSON.parse(data.toString())          
                 // console.log("incoming attack processing")
                const singleBook = (bookJson)[0].books.filter(x=>x.id==id)[0]
                // console.log(singleBook)
                if(singleBook) resolve(singleBook)              
                 else resolve(null)          
                    }
                })  
    })
}


module.exports = {saveBookFromFormPost, readBookById}