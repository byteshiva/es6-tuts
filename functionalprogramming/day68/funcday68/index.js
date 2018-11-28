const R = require('ramda');

const xs = [{a: 1, b: 0}, {a:1, b: 1}];
const rfindlast1 = R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
const rfindlast2 = R.findLast(R.propEq('a', 4))(xs); //=> undefined

console.log(rfindlast1, rfindLast2);
