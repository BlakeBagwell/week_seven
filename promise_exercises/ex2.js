// var fs = require('fs');
//
// var filename = 'file1.txt';
// var outputFilename = 'input.txt';
//
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });


var fsp = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';

fsp.readFile(filename)
  .then(function(buffer) {
    var content = buffer.toString();
    return fsp.writeFile(outputFilename, content.toUpperCase());
    // ^^ we need to return this line, because its fsp.writeFile, its essentially making another promise, so its a value we will need at a later point. Compare this to line 13 above where it isnt returned, but works for that syntax.

    //all asyncronous things need this, so requests, for example need this. If you send it away to come back later, you need to return its value.

    //refer to line 29 on the next exercise
  })
  .catch(function(err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
  });
