var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

router.get('/cookie',function(req, res){
  res.cookie('contador' , '500').send('setiada');
});

router.get('/', function(req, res) {
  res.json(req.cookies.contador);
});

router.get('/clearcookie', function(req,res){
  res.clearCookie('contador').send('limpia');
});

module.exports = router;
