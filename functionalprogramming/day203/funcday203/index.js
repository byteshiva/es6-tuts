const R = require('ramda');

const rsplitwhen1 = R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]

console.log(rsplitwhen1);
