var WebHandler = {};

WebHandler.socket = null;

WebHandler.onMessage = function(event) {
	MessageHandler.decode(JSON.parse(event.data));
}

WebHandler.init = function(callback) {
	WebHandler.socket = io();
	WebHandler.socket.on('connect', function(data) {
		console.log('[RybCHAT] Connected to the server...');
		WebHandler.socket.emit('join', 'Hello World from client');
	});
}