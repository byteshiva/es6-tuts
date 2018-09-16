var conf = {name: "SaintJS", date: 2017};

function renameConf(oldConf, newName) {
	return {name: newName, date: oldConf.date};
}

function sum( numbers ) {
	if(numbers.length == 1) {
		return numbers[0];
	} else {
		 return numbers[0] + sum(numbers.slice(1));
	}
}

// filter -> map -> reduce 
//

function makeAdjectifier(adjective) {
	return funtion (noun) {
		return adjective + ' ' " noun;
	}
}
//
// non-mutative  - muri / immutatablejs persistent data structure 
// function composition/ pipelining - ramda
// dataflow programming - declarative programming 
// function composition
// ReasonML , closureML

var ender = (ending) => (input) => input + ending;

var adore = ender(" rocks");
var anounce = ender(" ..y'll ');

var newConf = renameConf(conf, "HolyJS");
console.log(newConf);
console.log(sum([1,2,3,4,5]));
