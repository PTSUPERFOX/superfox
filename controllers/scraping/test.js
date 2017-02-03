const cheerio = require('cheerio')
const request = require('request-promise')

let heroes = []

// cheerio(, function (err, $) {
//   hero.push({mainPic: $('div.featuredImage').html().trim()})
//   console.log($('img.character-image.attribs'))
//   console.log($('h1.featured-item-title'))
//   // hero.push({profPic: $('img.character-image featured').html())})
//   console.log(hero)
// })

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

// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>

// <div class="featuredImage">
//   <img src="https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg" />
// </div>

// <div class="featured-item-desc">
//   <p data-blurb="544">
//     Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new ...
//     <a data-blurb-trigger="544" class="lnk-more">more</a>
//   </p>
//   <p data-blurb="544" style="display:none">
//    	Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.
//   	<a data-blurb-trigger="544" class="lnk-more">more</a>
//   </p>
// </div>
