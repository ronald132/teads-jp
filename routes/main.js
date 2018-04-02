var router = require('express').Router();

router.get('/', function(req, res){
  res.render('home');
});

router.get('/ctr_test', function(req, res){
  res.render('ctr');
});
router.get('/dbm_ctr', function(req, res){
  res.render('dbm_ctr');
});
router.get('/test', function(req, res){
  res.render('test');
});

module.exports = router;
