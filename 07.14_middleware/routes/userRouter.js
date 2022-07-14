const express = require('express')
     , router = express.Router()
     , {log} = require('console')
     , axios = require('axios')
     , fs = require('fs')


router.use(express.json())


// routes for user
router.post("/create", (req, res)=>{
    log(req.body)
    const user = JSON.stringify(req.body)
    fs.writeFile('data/userData.json', user , err=>{
        if(err) throw err;
        log('user data updated')
        res.send('user data updated')
    })
})

router.get("/:paraGet", (req,res)=>{
    if(!isNaN(+req.params.paraGet)){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(json=>{
            if(req.params.paraGet >= 1 && req.params.paraGet <= 10) res.json(json.data[req.params.paraGet-1]);
            else (res.send("<h1>user id from 1-10</h1>"))
        })
        .catch(err=>res.send(JSON.stringify(err)))

    } 
    else switch(req.params.paraGet){
        case "all":
            res.send('Router is working fine');
            break;
        
        case "list":
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(json=>res.json(json.data))
            .catch(err=>res.send(JSON.stringify(err)))
            break;
    }   
})

router.get("/:id/posts", (req, res)=>{
    if(req.params.id >= 1 && req.params.id <= 10) {
        const apiUrl= `https://jsonplaceholder.typicode.com/users/${req.params.id}/posts`
        axios.get(apiUrl)
        .then(json=>res.json(json.data))
        .catch(err=>res.send(JSON.stringify(err)))
    } else (res.send("<h1>user id from 1-10</h1>"))
})

module.exports = router;