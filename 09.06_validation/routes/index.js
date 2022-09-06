var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', (req, res)=>{
  if(req.query.name && req.query.password){
    //make session
    req.session.user = req.query
    res.json('signed in')
  } else res.redirect('/')
})

router.get('/signout', (req, res)=>{
    //destroy session
    req.session.destroy()
    res.json('signed out')
 
})


module.exports = router;
