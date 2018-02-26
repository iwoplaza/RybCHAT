var WebHandler = {};

WebHandler.socket = null;

WebHandler.onMessage = function(msg) {
	MessageHandler.decode(JSON.parse(msg));
}

WebHandler.init = function(callback) {
	WebHandler.socket = io();
	WebHandler.socket.on('connect', function(data) {
		WebHandler.socket.emit('join', 'Hello World from client');
		WebHandler.socket.on('message', WebHandler.onMessage);
		callback();
	});
}