const R = require('ramda');


var takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};
const takes3ArgsLen = takesThreeArgs.length; //=> 3
const takes3ArgsArr = takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

var takesTwoArgs = R.binary(takesThreeArgs);
const takes2ArgsLen = takesTwoArgs.length; //=> 2
// Only 2 arguments are passed to the wrapped function
const takes2ArgsArr = takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]

console.log(takes3ArgsLen, takes3ArgsArr);

console.log(takes2ArgsLen, takes2ArgsArr);
