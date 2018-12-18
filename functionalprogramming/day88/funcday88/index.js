const R = require('ramda');

const rincludes1 = R.includes(3, [1, 2, 3]); //=> true
const rincludes2 = R.includes(4, [1, 2, 3]); //=> false
const rincludes3 = R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
const rincludes4 = R.includes([42], [[42]]); //=> true
const rincludes5 = R.includes('ba', 'banana'); //=>true

console.log(rincludes1, rincludes2, rincludes3, rincludes4, rincludes5);


