var router = require('express').Router();

router.get('/', function(req, res){
  res.render('home');
});

router.get('/ctr_test', function(req, res){
  res.render('ctr');
});

module.exports = router;
