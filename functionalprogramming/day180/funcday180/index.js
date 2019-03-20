const R = require('ramda');

R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
const prop1 = fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'

console.log(prop1);
