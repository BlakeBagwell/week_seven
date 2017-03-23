// Splice Two Files
//
// Write a function splice2 - in purely the promises style - which
//
// reads in two plain text files
// splices the lines of the two files together
// writes the result to an output file
// Example:
//
// splice2('file-1.txt', 'file-2.txt', 'output.txt')
//   .then(function() {
//     console.log('It worked.');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   })
// Assuming file-1.txt contained the text:
//
// old pond
// frog leaps in
// water's sound
// And file-2.txt contained the text:
//
// the first cold shower
// even the monkey seems to want
// a little coat of straw
// output.txt should end up with the text:
//
// old pond
// the first cold shower
// frog leaps in
// even the monkey seems to want
// water's sound
// a little coat of straw
// Hint: Use bluebird's spread to pass down the result of the previous step where needed.

var Promise = require('bluebird');
var fs = require('fs');
var fsp = Promise.promisifyAll(fs);

var file1 = 'file1.txt';
var file2 = 'file2.txt';
var output = 'output.txt';

function splice2(file1, file2, output) {
  console.log('1');
  return fsp.readFileAsync(file1)
    .then(function(buffer1) {
      console.log('2');
      return [buffer1, fsp.readFileAsync(file2)];
    })
    .spread(function(buffer1, buffer2) {
      console.log('3');
      var str1 = buffer1.toString().split('\n');
      var str2 = buffer2.toString().split('\n');

      var combo = str1.map(function(item, idx){
        return item + '\n' + str2[idx];
      });

      var comboString = combo.join('\n');

      return fs.writeFileAsync(output, comboString);

    });
}


splice2(file1, file2, output)
  .then(function(){
    console.log('It worked!');
  })
  .catch(function(err) {
    console.log(err.message);
  });
