express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
["Diego Safian"]:["01"],
["Alessandra Aleotti"]:["02"],
["Andrew Ndhlovu"]:["03"],
["Katie Watson"]:["04"],
["Frederick Mokumo"]:["05"],
["Willemien van Wyk"]:["06"],
["Quentin Willot"]:["07"],
["Alessia Cassaro"]:["08"],
["Mikidache Madi"]:["09"],
["Susana Almeida"]:["10"],
["Annamaria Mattia"]:["11"],
["David Branson"]:["12"],
["Niki Chondrelli"]:["13"],
["Alexandra Hiller"]:["14"],
["John Majoris"]:["15"],
["Micaela Justo"]:["16"],
["Laura King"]:["17"],
["Pamela Vinueza"]:["18"],
["Wouter Makkinje"]:["19"],
["Federica Pirri"]:["20"],
["Marwan Anoud"]:["21"],
["Tomasz Mamos"]:["22"],
["Maria Lisette Delgado Aquije"]:["23"],
["Maria Herranz"]:["24"],
["David Barros-García"]:["25"],
["Monika Kreklova"]:["26"],
["Hana Thompson"]:["27"],
["Flavia Pinzari"]:["28"],
["Laura Gramolini"]:["29"],
["Abush Zinaw Zergabachew"]:["30"],
["Abel Gizaw Seid"]:["31"],
["Bastian Schiffthaler"]:["32"],
["Nicolas Delhomme"]:["33"],
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
  res.render('connect', {userdata : userdata, title: 'RSA-NMO-BERLIN-2020' });
});

module.exports = router;
