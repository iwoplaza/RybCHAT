MessageHandler = {};
MessageHandler.messageCallbacks = {
	'hello': function(connection, packet) {
		var response = {
			header: { type: 'hello' },
			text: "What's up man?"
		};
		connection.emit('message', JSON.stringify(response));
	},
	
	'new_message': function(connection, packet) {
		MessageHandler.webHandler.io.sockets.emit('message', JSON.stringify({
			header: { type: 'new_message' },
			text: packet.text
		}));
	}
}

MessageHandler.decode = function(connection, msg) {
    var header = msg.header;

    if(this.messageCallbacks[header.type] != undefined) {
        this.messageCallbacks[header.type](connection, msg);
    }else{
        console.warn("Warning: Recieved a message with an unhandled message header (" + header.type + ")");
    }
}

MessageHandler.webHandler = null;
MessageHandler.setWebHandler = function(webHandler) {
	MessageHandler.webHandler = webHandler;
}

module.exports = MessageHandler;