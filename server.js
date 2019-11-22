const {loadData} = require('./util/consts.js')
const express = require('express')
const app = express()

const requestIp = require('request-ip')

const TRAMPO = "189.125.180.102"

const clientData = req => {
  let ret    = {}
  ret.ip     = requestIp.getClientIp(req)
  if(ret.ip!=undefined){
    ret.ip = ret.ip.split(',')[0]
  }else{
    ret.ip = 'falha ao obter ip'
  }
  ret.atWork = TRAMPO === ret.ip
  return ret
}

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
  
  let {ip,atWork} = clientData(req)
  let lang = req.headers['accept-language']
  let nav = req.headers['user-agent']
  res.json({ipaddress: ip,acessandoNoTrabalho:atWork,language:lang,software:nav});
});
app.get("/api/homepagedata", function (req, res) {
  let {ip,atWork} = clientData(req)
  let data = loadData(atWork)
  data.atWork = atWork  
  data.ip = ip  
  if(!atWork){
    data.logoUrl = 'img/home.png'
  }
  res.json(data);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
