express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Laingshun Huoy":["01"],
"Dimitris Kokoretsis":["02"],
"Maria Luz Annacondia Lopez":["03"],
"Martina Leso":["04"],
"Silvana Moreno":["05"],
"Juliette Hayer":["06"],
"Le Yu":["07"],
"Vahideh Rafiee":["08"],
"Aswin Thirunavukkarasu":["09"],
"Muhammad Awais ZAhid":["10"],
"Rimsha Ashraf":["11"],
"Murilo Araujo Sandroni":["12"],
"Sewalem Tsehay Wondim":["13"],
"Sumalata Sonavane":["14"],
"Xue Zhang":["15"],
"Pontus Öhlund":["16"],
"Vicente Machado":["17"],
"Pruthvi Balachandra Kalyandurg":["18"],
"Ming Feng":["19"],
"Domenico Simone":["20"],
"Nicolas Delhomme":["21"],
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
  res.render('connect', {userdata : userdata, title: 'SLUBI-2020' });
});

module.exports = router;
