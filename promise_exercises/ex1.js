// var fs = require('fs');
//
// var filename = 'file1.txt';
//
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   console.log(content.toUpperCase());
// });


var fsp = require('fs-promise');

var filename = 'file1.txt';

//fsp.readFile(filename) <- if we remove lines 22 and 24, this could be substituted for line 24. We are making a promise, and once finished, we call the methods of promise, which are .then, and .catch.

// .then chains our functions together, and .catch is for error handling.

var promise = fsp.readFile(filename);

promise
  .then(function(buffer) {
    var content = buffer.toString();
    console.log(content.toUpperCase());
  })
  .catch(function(err) {
    console.log('Something went wrong.');
        console.log('Because: ', err.message);
  });
