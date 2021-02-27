express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Alessia Vitiello":["01"],
"Chai Hao Chiu":["02"],
"Charley Robinson":["03"],
"Christopher C.H. Mak":["04"],
"Daniel Plaza":["05"],
"Dora Luz Cano Ramirez":["06"],
"Dr Anna Git":["07"],
"E.L. Bernardo":["08"],
"Eirlys Tysall":["09"],
"Elfadil Osman":["10"],
"Ellen Harrison":["11"],
"F.N. Khojayori":["12"],
"Filippo Guerra":["13"],
"Firas Sadiyah":["14"],
"Girish Beedessee":["15"],
"Helena Webb":["16"],
"Ines Horvat-Menih":["17"],
"Itsushiro Ko":["18"],
"Jarka Naser":["19"],
"Jaruwatana (Sodai) Lotharukpong":["20"],
"K. Katsuya-Gaviria":["21"],
"Linda Grillova":["22"],
"Lucia Arce Cubas":["23"],
"M.M. Van Kerckvoorde":["24"],
"Mai-Linh Nu Ton":["25"],
"Maria Stroyakovski":["26"],
"Matthew Naish":["27"],
"Megan Zaman":["28"],
"Michal Varga":["29"],
"O. Kranse":["30"],
"Patrick Colledge":["31"],
"Pawel Mordaka":["32"],
"S. Newsad":["33"],
"Theodoros Danis":["34"],
"Timing Liu":["35"],
"Unnati Sonawala":["36"],
"Wei Jiang":["37"],
"Wen Cheng":["38"],
"William Lewis":["39"],
"Z.X. Low":["40"],
"Zie Yang":["41"],
"Bastian Schiffthaler":["42"],
"Niklas Mähler":["43"],
"Nicolas Delhomme":["44"],
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
