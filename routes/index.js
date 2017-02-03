var express = require('express');
var router = express.Router();
const user = require('../controllers/user');

/* register new user */
router.post('/api/signup', user.registerUser);

module.exports = router;
