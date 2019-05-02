const R = require('ramda');

const F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
const f = new F();
const rtopairsin1 = R.toPairsIn(f); //=> [['x','X'], ['y','Y']]

console.log(rtopairsin1);
