ROOTPATH = __dirname;

console.log("Running Node.js version: " + process.version);

var WebHandler = require("./server/WebHandler.js");
var MessageHandler = require("./server/MessageHandler.js");
WebHandler.startServer(onServerStarted);
MessageHandler.setWebHandler(WebHandler);

function onServerStarted() {
	WebHandler.io.on('connection', function(connection){
		console.log('User connected');
        
		connection.on('message', function(msg){
			MessageHandler.decode(this, JSON.parse(msg));
		});
		
		connection.on('disconnect', function() {
			console.log('User disconnected');
		});
	});
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