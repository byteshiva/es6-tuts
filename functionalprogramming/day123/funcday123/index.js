const R = require('ramda');

const xyz = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + (num * 2);

const rmapobjindexed1 = R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }

console.log(rmapobjindexed1);

