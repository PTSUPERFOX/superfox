var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');

var objUser = {
  /* register new user */
  registerUser: function(req, res){
    // create a new user
    var newUser = modelUser({
      username: req.body.username,
      password: passwordHash.generate(req.body.password)
      hobbies: req.body.hobbies
    });
    // save the user
    newUser.save(function(err, data) {
      if (err) throw err;
      res.redirect('/login');
    });

  },
  /* generate token */
  loginUser: function(req, res){

  },
  /* get superhero profile */
  profileSuperHero: function(req, res){

  },
  /* get home page */
  home: function(req, res){

  }
}

module.exports = objUser;
