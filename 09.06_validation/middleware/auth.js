var createError = require('http-errors');

const checkSomething = (req, res, next) =>{
    if(req.query.q == "f"){
      next()
      console.log(1)
    } else next(createError(404));
  }
  console.log("i guess i'm the first")
  const checkSomething2 = (req, res, next) =>{
    if(req.query.w == "g"){
      next()
      console.log(2)
    } else next(createError(404));
  }

  const checkUser = (req, res, next) =>{
    if(req.session.user){
        next()
    } else {res.redirect('/')}
  }


  module.exports = {checkSomething, checkSomething2, checkUser}