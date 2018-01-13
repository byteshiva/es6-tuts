const R = require('ramda');

const xLens = R.lensProp('x');

const rview1 = R.view(xLens, {x: 1, y: 2});            //=> 1
const rset1 = R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
const rover1 = R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}

console.log(rview1, rset1, rover1);
