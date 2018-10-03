const R = require('ramda');

const raper1 = R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
const raper2 = R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
const raper3 = R.aperture(7, [1, 2, 3, 4, 5]); //=> []

console.log(raper1, raper2, raper3);
