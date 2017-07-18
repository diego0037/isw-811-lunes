var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  res.format({
    json: function () {
      models.dbs.all().then(db => {
        res.json({db: db});
      });
    },
    html: function () {
      models.dbs.all().then(db => {
        res.render('/index', { db: db });
      });
    }
  });
});

router.post('/', function(req, res, next) {
  var db = models.dbs.create(req.body);
  res.format({
    json: function () {
      db.then(db => {res.json(db)});
    },
    html: function () {
      db.then(db => {res.redirect('/')});
    }
  })
});


router.put('/:id', function(req, res, next) {
  res.format({
    json: function() {
      models.dbs.update(req.body,{ where: {id: req.params.id} }).then(db => {
        res.json({db:db});
      });
    },
    html: function () {
      models.dbs.update(req.body,{ where: {id: req.params.id} }).then(db => {
        res.redirect('/', {db:db});
      });
    }
  });
});

module.exports = router;
