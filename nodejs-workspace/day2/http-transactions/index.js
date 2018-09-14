const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
	const {method, url, headers } = request;
	console.log("server response", method, url, headers);
	let body = [];
	request.on('data', (chunk) => {
	  body.push(chunk);
	}).on('end', () => {
	  body = Buffer.concat(body).toString();
	  // at this point, `body` has the entire request body stored in it as a string
	});
	request.on('error', (err) => {
	  // This prints the error message and stack trace to `stderr`.
	  console.error(err.stack);
	});
});

server.listen(3000);
