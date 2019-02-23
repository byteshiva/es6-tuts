const R = require('ramda');

const addOneOnce = R.once(x => x + 1);
const ronce1 = addOneOnce(10); //=> 11
const ronce2 = addOneOnce(addOneOnce(50)); //=> 11

console.log(ronce1, ronce2);
