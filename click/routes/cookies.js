var express = require('express');
var router = express.Router();

app.get('/cookie',function(req, res){
     res.cookie(contador , 'numero').send('Cookie is set');
});

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});

app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});

module.exports = router;
