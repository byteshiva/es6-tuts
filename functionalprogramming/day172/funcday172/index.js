const R = require('ramda');

var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]

const rpluck1 = R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
const rpluck2 = R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}

console.log(rpluck1, rpluck2);
