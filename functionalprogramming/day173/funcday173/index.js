const R = require('ramda');

const rprepend1 = R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']

console.log(rprepend1);
