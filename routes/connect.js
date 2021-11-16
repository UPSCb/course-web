express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Adrian Galitz":["01"],
"Alessia Carini":["02"],
"Arif Khan":["03"],
"Artur Trzebny":["04"],
"Bastian Schiffthaler":["05"],
"Beti Ivanovska":["06"],
"Camila Duarte Ritter":["07"],
"Carolina Ortiz Movliav":["08"],
"Dareen Almojil":["09"],
"David Paz-Garcia":["10"],
"Emma Kaszecki":["11"],
"Enora Geslain":["12"],
"Fiona Savory ":["13"],
"Kristina Noreikiene":["14"],
"Lea Hördemann":["XX"],
"Lluis Garcia Mir":["15"],
"Manon de Visser":["16"],
"Maria Nilsson Janke":["17"],
"Marvin Suhr":["18"],
"Megan Meany":["19"],
"Neda Rahnamae":["20"],
"Nicolas Delhomme":["21"],
"Rosa Virginia Dominguez Beltran":["22"],
"Sarah Lower":["23"],
"Sebastian Kirchhof":["24"],
"Shilpa Parbhu":["25"],
"Sierra Smith":["26"],
"Tareg Shaldoom":["27"],
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
