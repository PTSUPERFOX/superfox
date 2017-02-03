var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');

var middleware = {
  /* isUser | function to check that user name that have been input exist in database */
  isUser: function(req, res, next){
    modelUser.findOne({ username: req.body.username }, function(err, user) {
      /* err handler */
      if (err) res.send({msg: "is user err"});
      let hashedPassword = user.password;
      if ( passwordHash.verify(req.body.password, hashedPassword) ){
        next()
      } else {
        res.send({msg: "username tidak ada"});
      }
    });
  },

  checkToken: function(req, res, next) {
    next()
  }
}

module.exports = middleware
