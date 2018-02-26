var MessageHandler = {};
MessageHandler.messageCallbacks = {
	'hello': function(packet) {
		console.log("Got a response: " + packet.text);
	},
	
	'new_message': function(packet) {
		var chatter = new Chatter();
		ChatManager.recieveMessage(chatter, packet.text)
	}
}

MessageHandler.decode = function(packet) {
    var header = packet.header;

    if(this.messageCallbacks[header.type] != undefined) {
        this.messageCallbacks[header.type](packet);
    }else{
        console.warn("Warning: Recieved a message with an unhandled message header (" + header.type + ")");
    }
}