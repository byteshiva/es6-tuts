const R = require('ramda');

const incCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
);
const inccount1 = incCount({});           //=> { count: 1 }
const incCount2 = incCount({ count: 1 }); //=> { count: 2 }

console.log(inccount1, inccount2);
