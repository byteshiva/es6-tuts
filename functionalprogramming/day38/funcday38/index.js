const R = require('ramda');

// Variadic Constructor function
function Salad() {
  this.ingredients = arguments;
}

Salad.prototype.recipe = function() {
  var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
  return R.join('\n', instructions);
};

var ThreeLayerSalad = R.constructN(3, Salad);

// Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');

console.log(salad.recipe());


