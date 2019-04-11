const R = require('ramda');

const rsplit1 = R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
const rsplit2 = R.splitAt(5, 'hello world');      //=> ['hello', ' world']
const rsplit3 = R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']

console.log(rsplit1, rsplit2, rsplit3);
