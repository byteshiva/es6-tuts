const R = require('ramda');

const rmatch1 = R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
const rmatch2 = R.match(/a/, 'b'); //=> []
const rmatch3 = R.match(/a/, null); //=> TypeError: null does not have a method named "match"

console.log(rmatch1, rmatch2, rmatch3);

