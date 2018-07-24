let numbers = [true];
let count = 1;
let sequence = [];
let index = 0;
// const [windowWidth, windowHeight, bgcolor] = [600, 600, 0];
const [bgcolor] = [0];

let scl;
let arcs = [];
let biggest = 0;

class Arc {
	constructor(start, end, dir) {
		this.start = start;
		this.end = end;
		this.dir = dir;
	}

	show() {
		let weight = 0.5;
		let diameter = abs(this.end - this.start);
		let x = (this.end + this.start) / 2;
		stroke(255);
		strokeWeight(weight);
		noFill();
		// ellipse(x, height/2, diameter);
		if(this.dir == 0) {
			// arc(x, height/2, diameter, diameter, PI, 0);
			arc(x, 0, diameter, diameter, PI, 0);
		} else {
			// arc(x, height/2, diameter, diameter, PI, 0);
			arc(x, 0, diameter, diameter, 0,	PI);
		}
		// index = next;
		// count++;		
	}
}


function setup() {
	console.log(windowWidth, windowHeight, bgcolor);
	createCanvas(windowWidth, windowHeight);
	frameRate(5);
	background(bgcolor);
	numbers[index] = true;
	sequence.push(index);

	// for (let i = 0; i < 12; i++) {
	// 	step();
	// }
	// console.log(sequence);

}



function step() {
	let next = index - count;
	if (next < 0 || numbers[next]) {
		next = index + count;
	}
	numbers[next] = true;
	sequence.push(next);

	let a = new Arc(index, next, count % 2);
	arcs.push(a);
	index = next;
	if (index > biggest) {
		biggest = index;
	}
	count++;
}

function draw() {
	const x = 0;
	const y = height / 2;
	step();
	translate(x, y);
	scl = lerp(scl, width/ biggest, 0.1);
	scale(scl);
	background(10);

	for (const a of arcs) {
		a.show();
	}
	// console.log(index);
}