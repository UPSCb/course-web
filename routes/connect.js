express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Abu Bakar Siddique":["01"],
"Adnan Niazi":["02"],
"Asmita Shrestha":["03"],
"Behailu Mulugeta Asfaw":["04"],
"Bekele Gelena Kelbessa":["05"],
"Haftom Brhane":["06"],
"Heidrun Sigurdardottir":["07"],
"Iryna Shutava":["08"],
"Kajsa Svensson":["09"],
"Kartik Baruah":["10"],
"Lauren Davies ":["11"],
"Lihua Zhao":["12"],
"Louis J.P. Dufour":["13"],
"Maliheh Mehrshad":["14"],
"Matilda Stein Åslund":["15"],
"Mishaneh Asgari":["16"],
"Mohammadhossein Banabazi":["17"],
"Nicolas Delhomme":["18"],
"Olawale Olalekan":["19"],
"parisa Norouzitallab":["20"],
"Poorva Sundararajan":["21"],
"Prune Leroy":["22"],
"Shrikant Sharma":["23"],
"Sidhant Chaudhary ":["24"],
"Srinivas Akula":["25"],
"Tamlyn Gangiah":["26"],
"Vahideh Rafiei":["27"],
"Vishnukiran Thuraga":["28"],
"Wagaw Sendeku Chekole":["29"],
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
  res.render('connect', {userdata : userdata, title: 'SLUBI-2022' });
});

module.exports = router;
