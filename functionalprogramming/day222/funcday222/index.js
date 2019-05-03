const R = require('ramda');

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return 'new Point(' + this.x + ', ' + this.y + ')';
};

const rtostring1 = R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
const rtostring2 = R.toString(42); //=> '42'
const rtostring3 = R.toString('abc'); //=> '"abc"'
const rtostring4 = R.toString([1, 2, 3]); //=> '[1, 2, 3]'
const rtostring5 = R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
const rtostring6 = R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'

console.log(rtostring1, rtostring2, rtostring3, rtostring4, rtostring5, rtostring6);
