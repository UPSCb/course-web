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
"RemoteUmea":["09"],
"Aarón Ayllón Benitez":["10"],
"Alexandra Genevieve Goetsch":["11"],
"Alice Marcon":["12"],
"Alizée Malnoë":["13"],
"Bernard Wessels":["14"],
"Bo Zhang":["15"],
"Corentin Abgrall":["16"],
"Eduardo Mateo-Bonmatí":["17"],
"Eduardo Rodriguez":["18"],
"Hadeer Moursy":["19"],
"Hedvig Stenberg":["20"],
"Ida Nordström":["21"],
"Irene Martinez-Fernandez":["22"],
"Iryna Shutava":["23"],
"Isura Nagahage":["24"],
"Jenna Lihavainen":["54"],
"Johan Sjölander":["25"],
"Johanna Osterman":["26"],
"Keh Chien Lee":["27"],
"Kim Cuong Le":["28"],
"Kristina Benevides":["29"],
"Martin Friberg":["30"],
"Md Jamil Chowdhury":["31"],
"Mikko Luomaranta":["32"],
"Nelson Rojas Murcia":["33"],
"Pierrick Bru":["34"],
"Priscilla Olayide":["35"],
"Raghuram Badmi":["36"],
"Rosario Garcia Gil":["37"],
"Ruben Benstein":["38"],
"Sam van Es":["39"],
"Sanchali Nanda":["40"],
"Sara Häggström":["41"],
"Sara Westman":["42"],
"Sonali Ranade":["43"],
"Stefan Hupperts":["44"],
"Thomas Dobrenel":["45"],
"Tinkara Bizjak":["46"],
"Tomas Funda":["47"],
"Tuuli Aro":["48"],
"Varvara Dikaya":["49"],
"Verena Fleig":["50"],
"Vikash Kumar":["51"],
"Ying Liu":["52"],
"Zuzana Binova":["53"],
"Nicolas Delhomme":["55"]
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
