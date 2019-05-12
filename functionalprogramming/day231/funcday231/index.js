const R = require('ramda');

const addFour = a => b => c => d => a + b + c + d;

const uncurriedAddFour = R.uncurryN(4, addFour);
const runcurry1 = uncurriedAddFour(1, 2, 3, 4); //=> 10

console.log(runcurry1);
