express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('materials', { title: 'Bioinformatics-in-Umeå-Worshop-Series-2023' });
});

module.exports = router;
