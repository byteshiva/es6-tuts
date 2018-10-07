const R = require('ramda');

var t42 = R.applyTo(42);
const t42identity = t42(R.identity); //=> 42
const t42add = t42(R.add(1)); //=> 43
console.log(t42identity, t42add);
