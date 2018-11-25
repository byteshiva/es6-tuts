const R = require('ramda');

const xs = [{a: 1}, {a: 2}, {a: 3}];
const rfind1 = R.find(R.propEq('a', 2))(xs); //=> {a: 2}
const rfind2 = R.find(R.propEq('a', 4))(xs); //=> undefined

console.log(rfind1, rfind2);


