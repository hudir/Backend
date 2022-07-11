const fs = require('fs')

const readYourFile = path => {
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
            if(err) reject(err.toString()) // going to .catch
            else resolve(data.toString()) // going to .then
        })
    })
}

const somethingElse = () => "Something Else..."

module.exports = {loadView: readYourFile, somethingElse}