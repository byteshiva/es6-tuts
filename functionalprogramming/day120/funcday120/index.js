const R = require('ramda');

const double = x => x * 2;

const rmap1 = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
const rmap2 = R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}

console.log(rmap1, rmap2);
