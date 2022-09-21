var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(_req, res, next) {
  res.render('index', { title: 'Chat Room 107' });
});

module.exports = router;
