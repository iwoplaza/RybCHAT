ROOTPATH = __dirname;

console.log("Running Node.js version: " + process.version);

var WebHandler = require("./server/WebHandler.js");
var ServerMessageHandler = require("./server/ServerMessageHandler.js");
var ServerChatManager = require("./server/ServerChatManager.js");
WebHandler.startServer(onServerStarted);
ServerMessageHandler.setWebHandler(WebHandler);
ServerMessageHandler.setServerChatManager(ServerChatManager);

function onServerStarted() {
	WebHandler.io.on('connection', function(connection) {
		connection.on('message', function(msg) {
			ServerMessageHandler.decode(this, JSON.parse(msg));
		});
		
		connection.on('disconnect', function() {
			ServerChatManager.removeConnection(this);
		});
	});
}