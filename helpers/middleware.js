var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');

var middleware = {
  /* isUser | function to check that user name that have been input exist in database */
  isUser: function(req, res, next){
    console.log("isUser | is user in database");
    console.log(req.body.username);
    console.log(req.body.password);
    modelUser.find({ username: req.body.username },{ password }, function(err, user) {
      /* err handler */
      if (err) res.send({msg: "is user err"});
      let hashedPassword = user.password;
      if ( passwordHash.verify(req.body.password, hashedPassword) ) ? next() : res.send({msg: "username tidak ada"});
    });
  }
}

module.exports = middleware
