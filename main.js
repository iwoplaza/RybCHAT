/*ROOTPATH = __dirname;

var WebHandler = require("./server/WebHandler.js");

function onServerStarted()
{
	
}

WebHandler.startServer(onServerStarted);*/

var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
