// Same thing but with this:
//
// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;

// We basically nest in the order that these things appear.
// we define our variables, then we call them in functions
//with the innermost being the sum, the innermost has to be sum because inner functions can access elements outside of itself. So the outputs of the square functions need to come before (and on the outside), of the function that needs them.

var x = 4;
var y = 3;

square(x, function(x2){
  square(y, function(y2){
    var sum = x2 + y2;
    });
  });
});
