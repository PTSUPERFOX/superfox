var passwordHash = require('password-hash');
const modelUser = require('../models/model.user');
var jwt = require('jsonwebtoken');
const scrap = require('./scraping/test')
const superhero = require('./superhero')


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
    // var encoded = jwt.sign({
    //   username: req.body.username,
    //   password: req.body.password
    // }, process.env.SECRET, { expiresIn: '1h' });
    //
    // req.user = encoded

    // ambil data hasil kalkulasi hobi dari mongodb, render di sini
    modelUser.findOne({username : req.body.username || req.session.username}, function(err, data){
      req.session.username = data.username
      req.session.hobbies = data.hobbies
      console.log(req.session);
      res.redirect('/profile');
    })

  },
  /* get superhero profile */
  profileSuperHero: function(req, res){
    superhero.getHeroData(req.session.username, req.session.hobbies, function(hero) {
      let url = hero.urls[0].url
      let scrap = scrap.getHero(url)
      // console.log("HERO " + hero);
      // console.log("URL " + url);
      // console.log("SCRAP " + scrap.getHero(url));
      res.render('pages/profile', {title: "Profile", data: scrap, name: hero.name, description: hero.description});
    })
  },
  /* get home page */
  home: function(req, res){

  }
}

module.exports = objUser;
