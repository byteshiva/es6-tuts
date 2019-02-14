const R = require('ramda');

const takesTwoArgs = (a, b) => [a, b];

const rnary1 = takesTwoArgs.length; //=> 2
const rnary2 = takesTwoArgs(1, 2); //=> [1, 2]

const takesOneArg = R.nAry(1, takesTwoArgs);
const rtakesonearg1 = takesOneArg.length; //=> 1
// Only `n` arguments are passed to the wrapped function
const rtakesonearg2 = takesOneArg(1, 2); //=> [1, undefined]

console.log(rnary1, rnary2, rtakesonearg1, rtakesonearg2);
