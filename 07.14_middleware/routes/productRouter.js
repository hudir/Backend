const express = require('express')
     , router = express.Router()
     , {log} = require('console')
     , axios = require('axios')
     , fs = require('fs')



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
           res.send('Product Router is working fine');
           break;
       
       case "list":
           axios.get("https://jsonplaceholder.typicode.com/posts")
           .then(json=>res.json(json.data))
           .catch(err=>res.send(JSON.stringify(err)))
           break;
   }   
})




module.exports = router;