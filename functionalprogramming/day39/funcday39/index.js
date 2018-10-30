const R = require('ramda');


const rContain1 = R.contains(3, [1, 2, 3]); //=> true
const rContain2 = R.contains(4, [1, 2, 3]); //=> false
const rContain3 = R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
const rContain4 = R.contains([42], [[42]]); //=> true

console.log(rContain1, rContain2, rContain3, rContain4);
