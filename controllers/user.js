var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');
var jwt = require('jsonwebtoken');

var objUser = {
  /* register new user */
  registerUser: function(req, res){
    // create a new user
    var newUser = modelUser({
      username: req.body.username,
      password: passwordHash.generate(req.body.password),
      hobbies:  req.body.hobbies
    });
    // save the user
    newUser.save(function(err, data) {
      if (err) throw err;
      res.redirect('/');
    });

  },
  /* generate token */
  loginUser: function(req, res){
    console.log("masuk login user");
    console.log(req.body.username);
    console.log(req.body.password);

    var encoded = jwt.sign({
      username: req.body.username,
      password: req.body.password
    }, process.env.SECRET, { expiresIn: '1h' });

    req.user = encoded
    // redirect to their profile
    res.render('pages/profile', {token: req.user})
    // ambil data hasil kalkulasi hobi dari mongodb, render di sini
  },
  /* get superhero profile */
  profileSuperHero: function(req, res){

  },
  /* get home page */
  home: function(req, res){

  }
}

module.exports = objUser;
