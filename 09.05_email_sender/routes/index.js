var express = require('express');
var router = express.Router();
const {send} = require('../models/Email')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/email', (req, res)=>{
  // console.log(req.body)
  // res.json(req.body)
  const {email, subject, message} =req.body
  send(email, subject, message)
  .then(info=>res.json(info))
  .catch(err=>res.json(err))
})



module.exports = router;
