const express = require('express')
    , app = express()
    , {middleware1, middleware2} = require("./middleware/test")


// app.get(PATH, middleware1, middleware2..., Final-Callback)
app.get('/',middleware1 , middleware2, (req, res)=>{
    res.json("It's Final Response "+ JSON.stringify(req.user))
})


app.listen(3000)