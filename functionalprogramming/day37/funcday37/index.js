const R = require('ramda');
// Constructor function
function Animal(kind) {
  this.kind = kind;
};
Animal.prototype.sighting = function() {
  return "It's a " + this.kind + "!";
}

var AnimalConstructor = R.construct(Animal)

// Notice we no longer need the 'new' keyword:
AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};

var animalTypes = ["Lion", "Tiger", "Bear"];
var animalSighting = R.invoker(0, 'sighting');
var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
const sightAnimalTypes = R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]

console.log(sightAnimalTypes);
