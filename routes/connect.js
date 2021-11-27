express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Abu Bakar Siddique":["01"],
"Adane Demissie":["02"],
"Adnan Niazi":["03"],
"Alice Marcon":["04"],
"Amrei Binzer-Panchal":["05"],
"Anna Renström":["06"],
"Audrey Bras":["07"],
"Bindu Sunilkumar":["08"],
"Cecilia Hammenhag":["09"],
"Chaymae Fennine":["10"],
"Denise Laskowski":["11"],
"Ebba Perman":["12"],
"Faruk Dube":["13"],
"Fluturë Novakazi":["14"],
"Francisco Gil Munoz":["15"],
"Francois Jobert":["16"],
"Harindranath Cholleti":["17"],
"Ida Hallberg":["18"],
"Irene Adamo":["19"],
"Israa Dafalla":["20"],
"Ivan De la Cruz Arguello":["21"],
"Jagadeesh Sundaramoorthy":["22"],
"Josefin Johansson":["23"],
"Kamyar Kasmaei":["24"],
"Ke Zang":["25"],
"Khrystyna Kurta":["26"],
"Kim-Cuong Le":["27"],
"Lin Tang":["28"],
"Maja Brus-Szkalej":["29"],
"Muluken Birara Enyew":["30"],
"Nicolas Delhomme":["31"],
"Qingxuan Xie":["32"],
"Thi Quyen Nham":["33"],
"Sebastian Larsson Herrera":["34"],
"Sewalem Tsehay Wondim":["35"],
"Shuowen Cao":["36"],
"Steven Taniwan":["37"],
"Magdolna Szelényi":["38"],
"Valentina Rossi":["39"],
"Varma Saripella":["40"]
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
	          //var baseIP = "195.148.31.25";
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'SLUBI-2021' });
});

module.exports = router;
