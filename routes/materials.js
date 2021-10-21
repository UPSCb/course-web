express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('materials', { title: 'NGG-HELSINKI-2021' });
});

module.exports = router;
