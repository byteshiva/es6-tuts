const R = require('ramda');

const xLens = R.lensProp('x');

const rview1 = R.view(xLens, {x: 1, y: 2});  //=> 1
const rview2 = R.view(xLens, {x: 4, y: 2});  //=> 4

console.log(rview1, rview2);
