const R = require('ramda');

const rsymmetricdifference1 = R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
const rsymmetricdifference2 = R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]

console.log(rsymmetricdifference1, rsymmetricdifference2);
