var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FourWayStop', inst: 'Press ENTER to start the animation' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page', inst: 'Press ENTER to start the animation' });
});

router.get('/twoeven', function(req, res, next) {
  res.render('twoeven', { title: 'Two Even', inst: 'Press ENTER to start the animation' });
});

router.get('/rightofway', function(req, res, next) {
  res.render('rightofway', { title: 'Right of Way', inst: 'Press ENTER to start the animation' });
});

router.get('/straightfirst', function(req, res, next) {
  res.render('straightfirst', { title: 'Straight First', inst: 'Press ENTER to start the animation' });
});

router.get('/pedestrian', function(req, res, next) {
  res.render('pedestrian', { title: 'Pedestrian', inst: 'Press ENTER to start the animation' });
});

router.get('/emergency', function(req, res, next) {
  res.render('emergency', { title: 'Emergency', inst: 'Press ENTER to start the animation' });
});

router.get('/emergency2', function(req, res, next) {
  res.render('emergency2', { title: 'Emergency Motorcade', inst: 'Press ENTER to start the animation' });
});

module.exports = router;
