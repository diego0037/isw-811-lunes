var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  res.format({
    json: function () {
      models.db.all().then(db => {
        res.json({db: db});
      });
    },
    html: function () {
      models.db.all().then(mesa => {
        res.render('/index', { db: db });
      });
    }
  });
});

router.post('/', function(req, res, next) {
  var db = models.db.create(req.body);
  res.format({
    json: function () {
      db.then(db => {
      });
    },
    html: function () {
      db.then(db => {
      });
    }
  })
});


router.put('/:id', function(req, res, next) {
  res.format({
    json: function() {
      models.db.update({ where: {id: req.params.id} }).then(() => {
        res.json({status: 'ok'});
      });
    },
    html: function () {
      models.db.update({ where: {id: req.params.id} }).then(() => {
        res.redirect('/index' + req.params.id);
      });
    }
  });
});
