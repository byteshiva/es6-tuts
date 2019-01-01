const R = require('ramda');

const risnil1 = R.isNil(null); //=> true
const risnil2 = R.isNil(undefined); //=> true
const risnil3 = R.isNil(0); //=> false
const risnil4 = R.isNil([]); //=> false

console.log(risnil1, risnil2, risnil3, risnil4);
