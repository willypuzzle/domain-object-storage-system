var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('test/socket/base');
});

router.get('/base', function(req, res, next) {
    res.render('test/socket/base');
});

module.exports = router;
