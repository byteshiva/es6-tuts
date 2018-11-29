const R = require('ramda');


const xs = [{a: 1, b: 0}, {a:1, b: 1}];
const findlasti1 = R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
const findlasti2 = R.findLastIndex(R.propEq('a', 4))(xs); //=> -1

console.log(findlasti1, findlasti2);
