express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('materials', { title: 'SLUBI-RNA-Seq-2024' });
});

module.exports = router;
