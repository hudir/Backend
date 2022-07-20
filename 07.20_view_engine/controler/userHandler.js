const fs = require('fs')
     , users = require('../data/users.json') // require json as a variable

/**
 * user Handler Function
 * @param {*} req 
 * @param {*} res 
 */

const userHandler = (req, res) => {
    // res.sendFile(__dirname.split("/").slice(0, __dirname.split("/").length-1).join('/') + "/views/index.html")
    // basic idea to send data to be replaced in index.html file

    fs.readFile(__dirname.split("/").slice(0, __dirname.split("/").length-1).join('/') + "/views/index.ejs", (err, data)=>{
        if(err) res.send(err)
        else {
            // let htmlContent = data.toString();

            // // const newhtml = htmlContent.replace("@@", users[0].name)
            // // // console.log(htmlContent)

            // users.forEach(x=>{
            //     htmlContent = htmlContent.replace("@@", x.name)
            // })
            // res.send(htmlContent)

            res.render('index', {
                persons: users, 
                wisdom:"if no rain, enjoy the sun",
                title: "Users",
                hot:true
            })
        }
    })
}



module.exports = {userHandler}