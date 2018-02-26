ROOTPATH = __dirname;

var WebHandler = require("./server/WebHandler.js");
var MessageHandler = require("./server/MessageHandler.js");
WebHandler.startServer(onServerStarted);

function onServerStarted() {
	/*WebHandler.io.on('connection', function(connection){
		console.log('User connected');
        
		connection.on('hello', function(msg){
			console.log('Message: ' + msg);
		});
		
		connection.on('disconnect', function() {
			console.log('User disconnected');
		});
	});*/
}

/*var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/