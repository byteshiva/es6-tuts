const R = require('ramda');

// pred :: Object -> Boolean
const pred = R.whereEq({a: 1, b: 2});

const rwhereeq1 = pred({a: 1});              //=> false
const rwhereeq2 = pred({a: 1, b: 2});        //=> true
const rwhereeq3 pred({a: 1, b: 2, c: 3});  //=> true
const rwhereeq4 = pred({a: 1, b: 1});        //=> false

console.log(rwhereeq1, rwhereeq2, rwhereeq3, rwhereeq4);
