var MessageHandler = {};
MessageHandler.messageCallbacks = {
	'hello': function(msg) {
		console.log("Got a response: " + msg.text);
	}
}

MessageHandler.decode = function(msg) {
    var header = msg.header;

    if(this.messageCallbacks[header.type] != undefined) {
        this.messageCallbacks[header.type](msg);
    }else{
        console.warn("Warning: Recieved a message with an unhandled message header (" + header.type + ")");
    }
}