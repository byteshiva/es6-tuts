const R = require('ramda');

const romit1= R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}

console.log(romit1);
