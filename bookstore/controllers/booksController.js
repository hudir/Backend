const booksController = (req, res) =>{
    res.render('mainTemplate', {
        title: "Books",
        content: "books"
    })
}


module.exports = {booksController}