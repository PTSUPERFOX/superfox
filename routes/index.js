const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const middleware = require('../helpers/middleware.js');
const jwt = require('express-jwt');

router.get('/', (req, res) => {
  res.render('pages/index', {title: 'Superfox'})
});

router.get('/profile', (req,res) => {
  res.render('pages/profile', {title: 'Your Profile'})
});

/* localhost:3000/api/signup | register new user  */
router.post('/api/signup', user.registerUser);
/* localhost:3000/api/login | login user */
router.post('/api/login', middleware.isUser, user.loginUser);
/* localhost:3000/api/superhero | get profile super hero*/
router.get('/api/superhero', user.profileSuperHero);
/* localhost:3000/api/home | go to home page */
router.get('/api/home', user.profileSuperHero);

module.exports = router;
