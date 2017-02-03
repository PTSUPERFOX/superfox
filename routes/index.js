var express = require('express');
var router = express.Router();
const user = require('../controllers/user');


/* localhost:3000/api/signup | register new user  */
router.post('/api/signup', user.registerUser);
/* localhost:3000/api/login | login user */
router.post('/api/login', user.loginUser);
/* localhost:3000/api/superhero | get profile super hero*/
router.get('/api/superhero', user.profileSuperHero);
/* localhost:3000/api/home | go to home page */
router.get('/api/home', user.profileSuperHero);



module.exports = router;
