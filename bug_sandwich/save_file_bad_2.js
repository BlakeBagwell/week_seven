/*

Running this file reports that it saves the file, when in reality it does not.

*/
var request = require('request-promise');
var fs = require('fs-promise');

request.get('https://davidwalsh.name/')
  .then(function(html) {
    return fs.writeFile('data/davidwalsh.html', html);
  })
  .then(function() {
    console.log('Wrote file data/davidwalsh.html');
  })
  .catch(function(err) {
    console.log('Something went wrong');
    console.log(err.message);
  });
