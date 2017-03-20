// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:
//
// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

function square(num, callback) {
  callback(num * num);
}

square(5, function(squared){});

// Pay close attention to how we alter line 7. on line 13 we make it a callback function and we have to have brackets {}. this is necessary for it to be correct in syntax, but also for how all this stuff works.

// in the {} we can put in more functions so we can add more and more and ues the outputs of the functions. 
