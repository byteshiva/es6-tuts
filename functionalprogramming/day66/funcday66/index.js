const R = require('ramda');

const xs = [{a: 1}, {a: 2}, {a: 3}];
const rfndindx1 = R.findIndex(R.propEq('a', 2))(xs); //=> 1
const rfndindx2 = R.findIndex(R.propEq('a', 4))(xs); //=> -1

console.log(rfndindx1, rfndindx2);
