var express = require('express')
var app = express()
//const requestIp = require('request-ip')

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
  //let ip = requestIp.getClientIp(req)
  let ip = req.headers['x-forwarded-for']
  if(ip!=undefined){
    ip = ip.split(',')[0]
  }else{
    ip = 'falha ao obter ip'
  }
  let lang = req.headers['accept-language']
  let nav = req.headers['user-agent']
  res.json({ipaddress: ip,language:lang,software:nav});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
