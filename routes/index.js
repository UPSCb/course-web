var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bioinformatics-in-Umeå-Worshop-Series-2023' });
});

module.exports = router;
