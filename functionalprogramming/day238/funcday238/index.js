const R = require('ramda');

let safeInc = R.unless(R.isNil, R.inc);
const runless1 = safeInc(null); //=> null
const runless2 = safeInc(1); //=> 2

console.log(runless1, runless2);
