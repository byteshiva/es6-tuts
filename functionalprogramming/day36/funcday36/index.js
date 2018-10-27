const R = require('ramda');

var fn = R.cond([
  [R.equals(0),   R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T,           temp => 'nothing special happens at ' + temp + '°C']
]);
console.log(fn(0)); //=> 'water freezes at 0°C'
console.log(fn(50)); //=> 'nothing special happens at 50°C'
console.log(fn(100)); //=> 'water boils at 100°C'


