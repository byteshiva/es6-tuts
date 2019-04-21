const R = require('ramda');

const rtake1 = R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
const rtake2 = R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
const rtake3 = R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
const rtake4 = R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
const rtake5 = R.take(3, 'ramda');               //=> 'ram'

const personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
];

const takeFive = R.take(5);
const rtake6 = takeFive(personnel);
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
//

console.log(rtake1, rtake2, rtake3, rtake4, rtake5, rtake6);

