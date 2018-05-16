var router = require('express').Router();

router.get('/', function(req, res){
  res.render('home');
});

router.get('/ctr_sp', function(req, res){
  res.render('ctr_sp');
});

router.get('/ctr_pc', function(req, res){
  res.render('ctr_pc');
});
router.get('/dbm_ctr', function(req, res){
  res.render('dbm_ctr');
});
router.get('/test', function(req, res){
  res.render('test');
});
router.get('/demo', function(req, res){
  res.render('demo');
});
router.get('/ss_demo', function(req, res){
  res.render('ss_demo');
});

module.exports = router;
