const fs = require('fs')
     , users = require('../data/user.json')

const indexHandle = (req, res) => {
    console.log(req.query)
    console.log(req.params)
    res.sendFile(fixPath(__dirname+'../views/index.html'))
}

// POST: no url
const postHandler = (req, res) => {
    // let obj = {
    //     name: "Germany",
    //     size: 500
    // };
    // res.json(obj)

    // req.query ===> GET request  /?something=bla&another=bla
    // req.params ====> GET request (localhost:3000/t/anything here)
    // req.body ====> POST request
    
    users.push({"id": +users[users.length-1].id+1, ...req.body})
    fs.writeFile(fixPath(__dirname+'../data/user.json'), JSON.stringify(users), err=>{
        if(err){
            res.send('ERROR')
        } else res.send("Success")
    })

    // res.json(req.body)
}

const getAllHandler = (req, res) => {
    res.json(users)
}

const getUserById = (req, res) => {
    const target = users.filter(x=>x.id==req.params.id)
    // console.log(target)
    if(target.length != 0) res.json(target[0])
    else res.send("<h1>can not find this user</h1>")
}

const getUserByQuery = (req, res) => {
    // res.send(req.query.id)
    if(!isNaN(+req.query.id)) {
        const target = users.filter(x=>x.id==req.query.id)
        if(target.length != 0) res.json(target[0])
        else res.send("<h1>can not find this user</h1>")
    } else {
        res.send('<h1>Pls use the right form : users?id=1</h1>')
    }
    
}

module.exports = {
    indexHandle
    ,postHandler
    ,getAllHandler
    ,getUserById
    ,getUserByQuery
}



const fixPath = str =>{
  const arr = str.split('/')
  let targetIndex = -1
  arr.forEach((x,i)=>{
    if(x[x.length-1]=='.') targetIndex=i
  })
  if (targetIndex == -1) return str
  let numOfDot = arr[targetIndex].split('.').length-1
  if(numOfDot===1){
    arr[targetIndex]=arr[targetIndex].split('.')[0]
    return arr.join('/')
  }
  const goUpper = numOfDot -1
  return [...arr.slice(0, targetIndex-goUpper+1), ...arr.slice(targetIndex+1)].join('/')
}




