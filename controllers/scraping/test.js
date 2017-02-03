const cheerio = require('cheerio')
const request = require('request-promise')

let heroes = []

request('http://marvel.com/characters/54/spider-man')
.then(function (html) {
  return html
})
.then(function (html) {
  return cheerio.load(html)
})
.then(function ($) {
  heroes.push({profPic: $('.character-image').attr('src'), mainPic: $('.featuredImage img').attr('src'), power: $('.possibleTruncation span').html()})
  return heroes
})
.catch(function (err) {
  console.log(err)
})
