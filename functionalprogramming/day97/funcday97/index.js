const R = require('ramda');

const numbers = [1, 2, 3, 4];
const transducer = R.compose(R.map(R.add(1)), R.take(2));

const rinto1 = R.into([], transducer, numbers); //=> [2, 3]

const intoArray = R.into([]);
const intoarray1 = intoArray(transducer, numbers); //=> [2, 3]


console.log(rinto1, intoarray1);
