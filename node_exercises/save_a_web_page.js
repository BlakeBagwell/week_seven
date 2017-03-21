// Save a web page
//
// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. For example:
//
// $ node save_web_page.js
// URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
// Save to file: cover-book.html
// Saved to file cover-book.html
// As result cover-book.html should have the HTML source code from the entered URL.
//
// Trigger an error by running the program with an invalid URL, ensure the error is properly displayed. Trigger an erro by running the program with an output file in a non-existent directory ,such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var readline = require('readline');
var fs = require('fs');
var request = require('request');

var rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.question('URL: ', function(website){
  rl.question('Save to file: ', function(saveFile) {
    var url = request.get(website, function(err, resp, html){
      if (err) {
        console.log(err.message);
        return;
      }
      fs.writeFile(saveFile, html, function(err, buffer) {
        if (err) {
          console.log(err.message);
        }
        console.log('Saved to ' + saveFile);
        rl.close();
      });
      console.log(html);
    });
  });
});
