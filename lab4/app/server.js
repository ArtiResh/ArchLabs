const http = require('http');

const handleRequest = (request, response) => {
	if (request.url === '/health/') {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});
		response.end('{"status": "OK"}');
	}
	else {
		response.writeHead(200);
		response.end('Hello World!');
	}
};
const server = http.createServer(handleRequest);
server.listen(8000);