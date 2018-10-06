const R = require('ramda');

var getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
});
const getMets = getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }

console.log(getMets);
