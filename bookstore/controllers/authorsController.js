const authorJson = require('../data/authors.json')
const authorsController = (req, res) =>{
    res.render('mainTemplate', {
        title: "Authors",
        content: "authors",
        data: authorJson
    })
}


module.exports = {authorsController}