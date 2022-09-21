var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('chat', { 
    title: 'Chat Room 107',
    nickName: req.query.nickName,
    color: req.query.color,
    msgArr:[]
   });
});

module.exports = router;
