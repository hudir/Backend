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





// const app = require("express")()
//     , cors = require("cors")
//     , {body, validationResult, check} = require("express-validator")

// app.use(require("express").json())
// app.use(cors())

// checkList = [
//     body("username").notEmpty().withMessage("username empty check")
//     , body("email").notEmpty().withMessage("email empty check").isEmail().withMessage("email check")
//     , body("password").matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\W+).{6,15}$/)
//     // , body("address").notEmpty()
//     , body("address.zip").notEmpty()
//     , check("address.zip").isPostalCode("DE")

// ]

// app.post("/submit", checkList, submitControllor)

// function submitControllor(req, res){
//     const {errors} = validationResult(req)
//     // console.log(Array.isArray(errors.errors))
//     if (errors.length > 0) res.json(errors)
//     else if (!req.body.age || +req.body.age <= 18 || +req.body.age >= 65) res.json("only accept age between 18 and 65")
//     else res.json("Everything is fine")
// }


// app.listen(5000,()=>console.log("server running on 5000")) 