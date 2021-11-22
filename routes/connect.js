express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Adrian Galitz":["01"],
"Alessia Carini":["12"],
"Arif Khan":["11"],
"Artur Trzebny":["06"],
"Bastian Schiffthaler":["27"],
"Beti Ivanovska":["23"],
"Camila Duarte Ritter":["07"],
"Carolina Ortiz Movliav":["20"],
"Dareen Almojil":["26"],
"David Paz-Garcia":["04"],
"Emma Kaszecki":["15"],
"Enora Geslain":["16"],
"Fiona Savory ":["08"],
"Kristina Noreikiene":["25"],
"Lea Hördemann":["18"],
"Lluis Garcia Mir":["24"],
"Manon de Visser":["09"],
"Maria Nilsson Janke":["02"],
"Marvin Suhr":["17"],
"Megan Meany":["14"],
"Neda Rahnamae":["19"],
"Nicolas Delhomme":["28"],
"Rosa Virginia Dominguez Beltran":["05"],
"Sarah Lower":["21"],
"Sebastian Kirchhof":["03"],
"Shilpa Parbhu":["13"],
"Sierra Smith":["10"],
"Tareg Shaldoom":["22"],
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
  res.render('connect', {userdata : userdata, title: 'RSA-NMO-BERLIN-2021' });
});

module.exports = router;
