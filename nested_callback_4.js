// Add a 1000 millisecond delay to the CPS version of the square function you wrote for the last exercise, and a 500 millisecond delay to the squareRoot function. Re-run the code and see that there's a delay before the answer is printed.

function square(num, callback) {
  setTimeout(function() {
    callback(num * num);
  }, 1000);

}

var x = 4;
var y = 3;

function squareRoot(num, callback) {
  setTimeout(function() {
    callback(Math.sqrt(num));
  }, 500);

}

square(x, function(x2){
  square(y, function(y2){
    sum = x2 + y2;
    squareRoot(sum, function(answer){
      console.log('The answer is: ' + answer);
    });
  });
});
