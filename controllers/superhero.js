'use strict'

//1485

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
  }
}

module.export = superhero

console.log(superhero.getHeroId('Syanmil', [1,2,6,7,8,9,10] ));
console.log(superhero.getHeroId('Alex', [1,2,3,4,5,6,10] ));
console.log(superhero.getHeroId('Fadly', [9,10] ));
console.log(superhero.getHeroId('Dgana', [1,2,5,6,7,10] ));
