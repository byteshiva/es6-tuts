const R = require('ramda');

const rrepeat1 = R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

const obj = {};
const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
const rrepreat2 = (repeatedObjs[0] === repeatedObjs[1]); //=> true

console.log(repeatedObjs, rrepreat2, rrepeat1);

