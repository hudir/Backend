const app = require("express")()
    , {check, validationResult} = require("express-validator")
    , cors = require("cors")

app.use(require("express").json())
app.use(cors())


//         param for express-validator refers to "name"  
//               from form - req.body.name 
//               from params - req.params.paramName 
//               from query - req.query.queryName 
app.post('/user/create', 
    // express-validator
    // to check if email is empty
    check("email").notEmpty().withMessage("Email can't be empty")
                  .isEmail().withMessage("Email Invalid"),
    check("password").notEmpty().withMessage("Password can't be empty")
                     .isLength({min: 5}).withMessage("Password should have more then 5 charactors"),
   
    (req, res)=>{

    const errros = validationResult(req)
    if(!errros.isEmpty())  res.json(errros)
    else  res.json(req.body)
})





app.listen(3000, ()=>console.log("server is on 3000"))