const R = require('ramda');

const dropRepeats1    = R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]

console.log(dropRepeats1);
