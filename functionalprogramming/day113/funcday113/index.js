const R = require('ramda');

const xHeadYLens = R.lensPath(['x', 0, 'y']);

const rlenspathview1 = R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}); //=> 2
const rlenspathset2 = R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}); //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
const rlenspathover3 = R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}); //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}

console.log(rlenspathview1, rlenspathset2, rlenspathover3);
