express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
    "ana.montado-rodriguez@helsinki.fi":["01"],
    "barun.pradhan@helsinki.fi":["02"],
    "bina.prajapati@helsinki.fi":["03"],
    "daniel.garton@helsinki.fi":["04"],
    "denis.belitskin@helsinki.fi":["05"],
    "dipabarna.bhattacharya@helsinki.fi":["06"],
    "giorgio.turconi@helsinki.fi":["07"],
    "heikki.t.virtanen@helsinki.fi":["08"],
    "honghong.li@helsinki.fi":["09"],
    "ibrahim.sultan@helsinki.fi":["10"],
    "ilhan.duru@helsinki.fi":["11"],
    "jenni.me.virtanen@helsinki.fi":["12"],
    "johanna.m.anttila@helsinki.fi":["13"],
    "joni.ollonen@helsinki.fi":["14"],
    "juliana.ugwu@helsinki.fi":["15"],
    "jure.zrim@helsinki.fi":["16"],
    "kai.wang@helsinki.fi":["17"],
    "kari.salokas@helsinki.fi":["18"],
    "karina.barreiro@helsinki.fi":["19"],
    "karri.kaivola@helsinki.fi":["20"],
    "leevi.lehtonen@helsinki.fi":["21"],
    "leo.meriranta@helsinki.fi":["22"],
    "linping.wang@helsinki.fi":["23"],
    "marion.sinclair-waters@helsinki.fi":["24"],
    "md.uddin@helsinki.fi":["25"],
    "mengxia.liu@helsinki.fi":["26"],
    "meryem.kaya@helsinki.fi":["27"],
    "mina.kiani@helsinki.fi":["28"],
    "muhammad.jasim@helsinki.fi":["29"],
    "neha.rai@helsinki.fi":["30"],
    "pramin.kaewsatuan@helsinki.fi":["31"],
    "rigbe.weldatsadik@helsinki.fi":["32"],
    "samantha.martin@helsinki.fi":["33"],
    "simon.andersson@helsinki.fi":["34"],
    "taehee.han@helsinki.fi":["35"],
    "tanzeela.hanif@helsinki.fi":["36"],
    "veera.brusila@helsinki.fi":["37"],
    "ville.j.hietala@helsinki.fi":["38"],
    "yinyin.wang@helsinki.fi":["39"],
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            var baseIP = parseInt(userdata[property]) < 20 ? "195.148.31.25" : "195.148.31.27";
            //var baseIP = "34.251.25.121"
	    //var baseIP = "localhost"
	    //var baseIP = "195.148.31.25"
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'RDA-HEL-2019' });
});

module.exports = router;
