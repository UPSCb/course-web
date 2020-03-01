express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Local01":["01"],
"Local02":["02"],
"Local03":["03"],
"Local04":["04"],
"Local05":["05"],
"Local06":["06"],
"RemoteAlnarp":["07"],
"RemoteUltuna":["08"],
"RemoteUmea":["09"]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            //var baseIP = parseInt(userdata[property]) < 20 ? "195.148.31.25" : "195.148.31.27";
            //var baseIP = "34.251.25.121"
	          var baseIP = "franklin.upsc.se";
	    // var baseIP = "44.226.5.112";
	    //var baseIP = "195.148.31.25"
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'HTSA-UMEA-2020' });
});

module.exports = router;
