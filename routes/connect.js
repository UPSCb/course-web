express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
    "User01":["01"],
    "User02":["02"],
    "User03":["03"],
    "User04":["04"],
    "User05":["05"],
    "User06":["06"],
    "User07":["07"],
    "User08":["08"],
    "User09":["09"],
    "User10":["10"],
    "User11":["11"],
    "User12":["12"],
    "User13":["13"],
    "User14":["14"],
    "User15":["15"],
    "User16":["16"],
    "User17":["17"],
    "User18":["18"],
    "User19":["19"],
    "User20":["20"],
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            //var baseIP = parseInt(userdata[property]) < 33 ? "86.50.169.222" : "193.167.189.151";
            //var baseIP = "34.251.25.121"
	    //var baseIP = "localhost"
	    var baseIP = "195.148.31.25"
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'RDA-HEL-2019' });
});

module.exports = router;
