const R = require('ramda');

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

const square = new Rectangle(2, 2);
const hasin1 = R.hasIn('width', square);  //=> true
const hasin2 = R.hasIn('area', square);  //=> true

console.log(hasin1, hasin2);

