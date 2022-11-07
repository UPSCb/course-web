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
"Jenifer Seematti Sundar":["09"],
"Kajsa Svensson":["10"],
"Kartik Baruah":["11"],
"Lauren Davies ":["12"],
"Lihua Zhao":["13"],
"Louis J.P. Dufour":["14"],
"Maliheh Mehrshad":["15"],
"Matilda Stein Åslund":["16"],
"Mishaneh Asgari":["17"],
"Mohammadhossein Banabazi":["18"],
"Nicolas Delhomme":["19"],
"Olawale Olalekan":["20"],
"parisa Norouzitallab":["21"],
"Poorva Sundararajan":["22"],
"Prune Leroy":["23"],
"Shrikant Sharma":["24"],
"Sidhant Chaudhary ":["25"],
"Srinivas Akula":["26"],
"Tamlyn Gangiah":["27"],
"Vahideh Rafiei":["28"],
"Vishnukiran Thuraga":["29"],
"Wagaw Sendeku Chekole":["30"],
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
