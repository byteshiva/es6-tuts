const R = require('ramda');

var objects = [{}, {}, {}];
var objectsClone = R.clone(objects);
console.log(objects === objectsClone); //=> false
console.log(objects[0] === objectsClone[0]); //=> false
