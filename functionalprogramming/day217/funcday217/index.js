const R = require('ramda');

const rthunkify1 = R.thunkify(R.identity)(42)(); //=> 42
const rthunkify2 = R.thunkify((a, b) => a + b)(25, 17)(); //=> 42

console.log(rthunkify1, rthunkify2);
