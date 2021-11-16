var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RSA-NMO-BERLIN-2021' });
});

module.exports = router;
