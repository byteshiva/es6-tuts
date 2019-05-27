const R = require('ramda');

const F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
const f = new F();
const rvaluesin1 = R.valuesIn(f); //=> ['X', 'Y']

console.log(rvaluesin1);
