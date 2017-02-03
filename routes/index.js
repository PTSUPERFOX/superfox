var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Superfox' });
});

router.post('/register', function(req, res, next) {
  console.log(req.body.username, req.body.password, req.body.hobbies);
});

module.exports = router;
