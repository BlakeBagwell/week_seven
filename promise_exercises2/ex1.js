// Extract Reusable Function
//
// Take this code and extract a reusable function in the promises style called saveWebPage which takes in two parameters:
//
// url - the URL to download from
// filename - the file name to save to
// var request = require('request-promise');
// var fs = require('fs-promise');
//
// var url = 'http://css-tricks.com';
// var filename = 'css-tricks.html';
//
// request(url)
//   .then(function(html) {
//     return fs.writeFile(filename, html);
//   })
//   .then(function() {
//     console.log('Worked');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });


var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';

function saveWebPage(url, filename) {
  return request(url)
    .then(function(html) {
      return fs.writeFile(filename, html);
    });
}
