const R = require('ramda');

const F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
const f = new F();
const rkeysin1 = R.keysIn(f); //=> ['x', 'y']

console.log(rkeysin1);
