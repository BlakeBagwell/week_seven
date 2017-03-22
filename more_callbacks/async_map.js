// Async map
//
// Make an array of file names like so:
//
// var filenames = [
//   '1.txt',
//   '2.txt',
//   '3.txt',
//   '4.txt',
//   '5.txt',
//   '6.txt',
//   '7.txt',
//   '8.txt',
//   '9.txt',
//   '10.txt'
// ];
// Write a program using the async module to create all of these files in the directory, each file should contain the text: "Hello, world!".

var async = require('async');
var fs = require('fs');

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
  //...I want it to take a phrase, and then write it to a file
  var phrase = 'Hello, World!';

  fs.writeFile(item, phrase, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

async.map(filenames, transform, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
});
