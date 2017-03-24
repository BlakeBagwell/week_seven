var request = require('request-promise');
var fs = require('fs-promise');


request.get('https://css-tricks.com/')
  .then(function(html) {
    var contents = html.toString().toUpperCase();
    return fs.writeFile('promise.html', contents);
  })
  .then(function() {
    console.log('Wrote file promise.html');
  })
  .catch(function(err) {
    console.log('Something went wrong');
    console.log(err.message);
  });
