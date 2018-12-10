const R = require('ramda');

const hasName = R.has('name');
const has1 = hasName({name: 'alice'});   //=> true
const has2 = hasName({name: 'bob'});     //=> true
const has3 = hasName({});                //=> false

const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
const has4 = pointHas('x');  //=> true
const has5 = pointHas('y');  //=> true
const has6 = pointHas('z');  //=> false

console.log(has1, has2, has3, has4, has5, has6);
