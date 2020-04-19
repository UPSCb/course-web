express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"training":["99"],
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            //var baseIP = parseInt(userdata[property]) < 20 ? "195.148.31.25" : "195.148.31.27";
            //var baseIP = "34.251.25.121"
	          //var baseIP = "franklin.upsc.se";
	          var baseIP = "localhost";
	          // var baseIP = "44.226.5.112";
	          //var baseIP = "195.148.31.25"
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'RSA-EBI-2020' });
});

module.exports = router;
