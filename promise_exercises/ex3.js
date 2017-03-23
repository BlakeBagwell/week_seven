// var request = require('request');
// var fs = require('fs');
//
// var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
// var filename = 'output.html';
//
// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });

var requestpromise = require('request-promise');
var fsp = require('fsp');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

requestpromise.get(url)//passing it the url variable we made
  .then(function(html) { // now its taking the output of the requestpromise which is an html file, however the parameter is poopable, BUT we need to refer to it later on line 29, so whatever we name it on 28, we need to use the same name on 29. 
    return fsp.writeFile(filename, html); //function call, but we need to return. in the event that we have more .thens follwing this, they rely on the return of the promise (fsp.write.....), so we have to return this asyncronous things.
    console.log('It worked');
  })
  .catch(function(err) {
    console.log(err.message);
  });
