ROOTPATH = __dirname;

var WebHandler = require("./server/WebHandler.js");
var MessageHandler = require("./server/MessageHandler.js");
WebHandler.startServer(onServerStarted);

function onServerStarted() {
	WebHandler.server.on('request', function(request) {
        var connection = request.accept('connect', request.origin);
        console.log('Connection from ' + request.origin + ' accepted.');

        connection.on('message', function(msg) {
			console.log('Recieved message...');
            if (msg.type === 'utf8') {
                MessageHandler.decode(this, JSON.parse(msg.utf8Data));
            }
        });
        
        connection.on('close', function(e) {});
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