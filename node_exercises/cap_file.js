// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
//
// Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:
//
// $ node cap_file.js
// filename: file1.txt
// HELLO, I AM FILE 1.
// Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:
//
// $ node cap_file.js
// filename: blah.txt
// ENOENT: no such file or directory, open 'blah.txt'

var fs = require('fs');
var readLine = require('readline');
var rl = readLine.createInterface( {
  input: process.stdin,
  output: process.stdout
});



rl.question('file name: ', function(filename) {
  //we need to get a filename from the user
  fs.readFile(filename, function(err, buffer) {
    //we need to read that file
    console.log('Got file data: ' + buffer);
    //and we need to give back the contents of the file
    rl.close();
    // and we have to close rl(not sure why)
  });
});
