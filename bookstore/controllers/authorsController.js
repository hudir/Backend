const authorJson = require('../data/authors.json')
const bookJson = require('../data/books.json')

const authorsController = (req, res) =>{
    res.render('mainTemplate', {
        title: "Authors",
        content: "authors",
        data: authorJson
    })
}
const singleAuthorsController = (req, res)=> {
    const singleAuthor = authorJson.filter(x=>x.id==req.params.id)[0]
    console.log()
    if(singleAuthor) {
        res.render('mainTemplate', {
        title: singleAuthor.title,
        content: "authors",
        data:authorJson,
        singleAuthor:singleAuthor,
        bookId: bookJson[0].books.filter(x=>x.authorId == singleAuthor.id)[0].id
        })
    } else {
        res.render('mainTemplate', {
            title: "404",
            content: "404"
        })
    }
    
}


module.exports = {authorsController,singleAuthorsController}