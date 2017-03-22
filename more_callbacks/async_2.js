// Async map 2
//
// You can use fs.readdir function to list all the files that exist in a directory. Write a program to resize all .png files within a directory into 240x240 thumbnails. Hint: you can use the downloadAndCreateThumbnail function you made.


var async = require('async');
var fs = require('fs');
var gm = require('gm');

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

//async.map(array, transform, callback); when we call the function

function transform(item, callback) {
  //...I want it to take an image , and then write it to a file
  gm(item)
    .resize(240, 240)
    .write(thumbnailFilename, function(err) {
      if (err) {
        callThemBack(err);
        return;
      }
      callThemBack(null);
    });
}

fs.readdir('.', function(err, files) {
  if (err) {
    callback(err);
  }
  callback(files);
});

// async.map(filenames, transform, function(err) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('It worked');
// });
//  goes into transform
