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
"User21":["21"],
"User22":["22"],
"User23":["23"],
"User24":["24"],
"User25":["25"],
"User26":["26"],
"User27":["27"],
"User28":["28"],
"User29":["29"],
"User30":["30"],
"User31":["31"],
"User32":["32"],
"User33":["33"],
"User34":["34"],
"User35":["35"],
"User36":["36"],
"User37":["37"],
"User38":["38"],
"User39":["39"],
"User40":["40"],
"User41":["41"],
"User42":["42"],
"User43":["43"],
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            //var baseIP = parseInt(userdata[property]) < 20 ? "195.148.31.25" : "195.148.31.27";
            //var baseIP = "34.251.25.121"
	          var baseIP = "franklin.upsc.se";
	          //var baseIP = "localhost";
	          // var baseIP = "44.226.5.112";
	          //var baseIP = "195.148.31.25"
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'TANMO-CAMBRIDGE-2021' });
});

module.exports = router;
