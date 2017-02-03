'use strict'
var api = require('marvel-api');
var config = require('../config/auth.js')
//1485

var marvel = api.createClient({
  publicKey: config.marvel.publicKey
, privateKey: config.marvel.privateKey
});

let superhero = {
  convertArray: function(arrayData){
    arrayData = arrayData.reduce(function(a, b){
      return a + b
    })
    return arrayData
  },
  convertUsername: function(username){
    username = username.split('')
    username = username.map(function(data){
      return data.charCodeAt(0)
    })
    return username
  },
  getHeroId: function(username, arrayHobi){
    let arrayUser = superhero.convertUsername(username)
    let raw = superhero.convertArray(arrayUser) * superhero.convertArray(arrayHobi)
    while(raw > 1485){
      raw /= 9
    }
    return Math.floor(raw)
  },
  getHeroData: function(username, arrayHobi){
    let id = superhero.getHeroId(username, arrayHobi)
    marvel.characters.findAll(1, id)
    .then(function(hero){
      let result = {
        name: hero.data[0].name,
        description: hero.data[0].description,
        urls: hero.data[0].urls
      }
      return result;
    })
  }
}

module.export = superhero

superhero.getHeroData('Syanmil', [1,2,6,7,8,9,10]);
superhero.getHeroData('Alex', [1,2,3,4,5,6,10] );
superhero.getHeroData('Fadly', [9,10] );
superhero.getHeroData('Dgana', [1,2,5,6,7,10] );
