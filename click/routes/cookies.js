var express = require('express');
var router = express.Router();

app.get('/cookie',function(req, res){
     res.cookie('contador' , req.params.contador);
});

app.get('/', function(req, res) {
  res.send(req.cookies.contador);
});

app.get('/clearcookie', function(req,res){
     clearCookie('contador');
});

module.exports = router;
