const R = require('ramda');

const printXPlusFive = x => console.log(x + 5);
foreach1 =  R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]

console.log(foreach1);

