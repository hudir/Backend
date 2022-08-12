const authors = require('../data/authors.json')
    , {saveBookFromFormPost} = require('../models/bookData')
    

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
    saveBookFromFormPost(req.body)
    .then(()=> {
        // res.redirect('/books')
        res.json({error:null})
    })
    .catch(err=>{
        // res.render('mainTemplate', {
        // title: "ERROR",
        // content: 'Errorbyaddbook',
        // err: err
        // }) 
        res.json({error:err})
    })
}


module.exports={addBookIndexHandler, addBookSubmitHandler}