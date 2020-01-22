var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET mottos page. */
router.get('/motto', function(req, res, next) {
  res.render('motto', { title: 'Express' });
});
/* GET team page. */
router.get('/team', function(req, res, next) {
  res.render('members', { title: 'Express' });
});
/* GET centers page. */
router.get('/centers', function(req, res, next) {
  res.render('centers', { title: 'Express' });
});



module.exports = router;
