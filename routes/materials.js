express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('materials', { title: 'HTSA-UMEA-2020' });
});

module.exports = router;
