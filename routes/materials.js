express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('materials', { title: 'RSA-NMO-BERLIN-2019' });
});

module.exports = router;
