const  R = require('ramda');

var mapIndexed = R.addIndex(R.map);
const mapInd = mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);

console.log(mapInd);
