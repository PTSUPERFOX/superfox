var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');

var objUser = {
  /* register new user */
  registerUser: function(req, res, next){
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

  }
}

module.exports = objUser;
