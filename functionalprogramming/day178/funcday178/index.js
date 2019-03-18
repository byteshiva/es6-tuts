const R = require('ramda');

const rpropis1 = R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
const rpropis2 = R.propIs(Number, 'x', {x: 'foo'});    //=> false
const rpropis3 = R.propIs(Number, 'x', {});            //=> false

console.log(rpropis1, rpropis2, rpropis3);
