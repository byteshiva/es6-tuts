const R = require('ramda');

const mergeThree = (a, b, c) => [].concat(a, b, c);

const merge3 = mergeThree(1, 2, 3); //=> [1, 2, 3]

const flipmerge3 = R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]

console.log(flipmerge3, merge3);

