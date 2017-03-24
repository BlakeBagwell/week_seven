// Extend the previous function to take in an array of input file names, and splice all of them into the output file.
//
// splice(['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'])

var Promise = require('bluebird');
var fs = require('fs');
var fsp = Promise.promisifyAll(fs);
var _ = require('lodash');
var fileArray = ['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'];
var output = 'output.txt';

var modFiles = fileArray.map(function(file) {
  return fsp.readFileAsync(file);
//because Promise.all only takes in promises. We just have to produce an array of promises. After we can use .then to modify what we get from the promises.

//for each file, we return a promise.
});
//now we should have an array of promises.

Promise.all(modFiles)
  .then(function(arrayOfFileContents) {
    //now that we have an array of the file contents, we can manipulate it.

    var splitStrings = arrayOfFileContents.map(function(item) {
      return item.toString().split('\n');
      //now we have to take the read files, which is in array form, and map them to create another array, but an array of split strings.
    });
    console.log(splitStrings);
    var spliced = _.zip.apply(null, splitStrings);
    console.log(_.flatten(spliced).join('\n'));

    // var arr = [];
    // for (i = 0; i < splitStrings.length; i++) {
    //   var innerArray = splitStrings[i];
    //   for (j = 0; j < innerArray.length; j++) {
    //     var pushMe = splitStrings[j][i];
    //     arr.push(pushMe);
    //   }
    //
    // }
    // console.log(arr.join('\n'));
  })

  .catch(function(err) {
    console.log(err.stack);
  });
