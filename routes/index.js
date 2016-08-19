var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FourWayStop' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.get('/twoeven', function(req, res, next) {
  res.render('twoeven', { title: 'Two Even' });
});

router.get('/rightofway', function(req, res, next) {
  res.render('rightofway', { title: 'Right of Way' });
});

router.get('/straightfirst', function(req, res, next) {
  res.render('straightfirst', { title: 'Straight First' });
});

module.exports = router;
