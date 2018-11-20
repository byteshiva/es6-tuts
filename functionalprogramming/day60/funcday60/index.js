const R = require('ramda');


const o1 = { a: 1, b: 2, c: 3, d: 4 };
const o2 = { a: 10, b: 20, c: 3, d: 40 };
const eqProp1 = R.eqProps('a', o1, o2); //=> false
const eqProp2 = R.eqProps('c', o1, o2); //=> true

console.log(eqProp1, eqProp2);
