const R = require('ramda');

const xLens = R.lens(R.prop('x'), R.assoc('x'));

const rlensview1 = R.view(xLens, {x: 1, y: 2});            //=> 1
const rlensset2 = R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
const rlensover3 = R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}

console.log(rlensview1, rlensset2, rlensover3);
