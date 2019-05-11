const R = require('ramda');

const runapply1 = R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'

console.log(runapply1);
