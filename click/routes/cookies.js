var express = require('express');
var router = express.Router();

app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});

module.exports = router;
