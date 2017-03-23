// Given an array of urls:
//
// var urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//   'https://en.wikipedia.org/wiki/Google_Chrome'
// ];
// Use Promise.all and request-promise to retrieve the HTML files for all the web pages.


fsp = require('fsp');
requestpromise = require('request-promise');



var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var conversion = urls.map(function(item) {
  return requestpromise.get(item);
});

//promise.all takes in an array, but we cant use the urls array directly, we need to convert the links to html files, to do that we need to produce another array with the corresponding html files. We use map to do that. and then we assign the value that map outputs to a variable (converstion) and we pass that to the Promise.all.


Promise.all(conversion)// promise.all wants an array of promises!
  .then(function(html){
    var arrayOfWriteFilePromises = conversion.map(function(html, idx){
      return fs.writeFile(idx + '.html', html);
    });
  })
  .catch(function(err) {
    console.log(err.message);
  });
