const authorsController = (req, res) =>{
    res.render('mainTemplate', {
        title: "Authors",
        content: "authors"
    })
}


module.exports = {authorsController}