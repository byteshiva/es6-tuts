const R = require('ramda');

const hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
const rpoint1 = pointHas('x');  //=> true
const rpoint2 = pointHas('y');  //=> true
const rpoint3 = pointHas('z');  //=> false

console.log(rpoint1, rpoint2, rpoint3);

