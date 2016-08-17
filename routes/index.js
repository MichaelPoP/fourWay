var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FourWayStop' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { atitle: 'About Page' });
});

module.exports = router;
