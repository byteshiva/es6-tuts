const R = require('ramda');

const takesTwoArgs = function(a, b) {
  return [a, b];
};
const runary1 = takesTwoArgs.length; //=> 2
const runary2 = takesTwoArgs(1, 2); //=> [1, 2]

// Only 1 argument is passed to the wrapped function
const takesOneArg = R.unary(takesTwoArgs);
const runary3 = takesOneArg.length; //=> 1
const runary4 = takesOneArg(1, 2); //=> [1, undefined]

console.log(runary1, runary2, runary3, runary4);
