let mobilenet;

const [windowWidth, windowHeight] = [640, 480];

function modelReady(params) {
	console.log('Model is ready!!!');
}

function imageReady(params) {
	image(puffin, 0, 0, width, height);
	mobilenet.predict(puffin, gotResults);
}


function gotResults(err, results) {
	if(err)	 {
		console.log(err);
	} else {
		console.log("results", results);
		let label = results[0].className;
		let prob = results[0].probability;
		fill(0);
		textSize(64);
		text(label, 10 , height - 100);
		createP(label);
		createP(prob);
	}

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	puffin = createImg('images/puffin.jpg', imageReady);
	puffin.hide();
	background(0)
	mobilenet = ml5.imageClassifier('Mobilenet', modelReady);
}

function draw() {

}