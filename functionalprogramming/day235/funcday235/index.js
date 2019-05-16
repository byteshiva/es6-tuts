const R = require('ramda');

const runiq1 = R.uniq([1, 1, 2, 1]); //=> [1, 2]
const runiq2 = R.uniq([1, '1']);     //=> [1, '1']
const runiq3 = R.uniq([[42], [42]]); //=> [[42]]

console.log(runiq1, runiq2, runiq3);
