express = require('express');
var router = express.Router();

/* for i in {1..64} ; do echo '"'$(printf "User%02d" $i)'":["'$(printf "%02d" $i)'"],'; done */
userdata =
{
"Group01":"[01]",
"Group02":"[02]",
"Group03":"[03]",
"Group04":"[04]",
"Group05":"[05]",
"Group06":"[06]",
"Group07":"[07]",
"Group08":"[08]",
"Group09":"[09]",
"Group10":"[10]",
"Group11":"[11]",
"Group12":"[12]",
"Group13":"[13]",
"Group14":"[14]",
"Group15":"[15]",
"Group16":"[16]",
"Group17":"[17]",
"Group18":"[18]",
"Group19":"[19]",
"Group20":"[20]",
"Group21":"[21]",
"Group22":"[22]",
"Group23":"[23]",
"Group24":"[24]",
"Group25":"[25]",
"Group26":"[26]",
"Group27":"[27]",
"Group28":"[28]",
"Group29":"[29]",
"Group30":"[30]"
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    for (var property in userdata) {
        if (userdata.hasOwnProperty(property)) {
            //var baseIP = parseInt(userdata[property]) < 20 ? "195.148.31.25" : "195.148.31.27";
            //var baseIP = "34.251.25.121"
	          //var baseIP = "franklin.upsc.se";
	          //var baseIP = "localhost";
	          // var baseIP = "44.226.5.112";
	          var baseIP = "195.148.31.25";
            userdata[property].push(baseIP);
        }
    }
  res.render('connect', {userdata : userdata, title: 'NGG-HELSINKI-2021' });
});

module.exports = router;
