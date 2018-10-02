const R = require('ramda');

const applies1 = R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
const applies2 = R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]

// R.ap can also be used as S combinator
// when only two functions are passed
const applies3 = R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'

console.log(applies1, applies2, applies3);
