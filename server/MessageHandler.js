MessageHandler = {};
MessageHandler.messageCallbacks = {
	'hello': function(connection, msg) {
		var response = {
			header: { type: 'hello' },
			text: "What's up man?"
		};
		connection.sendUTF(JSON.stringify(response));
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

module.exports = MessageHandler;