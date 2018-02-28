var MessageHandler = {};
MessageHandler.messageCallbacks = {
	'hello': function(packet) {
		console.log("Got a response: " + packet.text);
	},
	
	'new_chatter': function(packet) {
		var chatter = Chatter.list[packet.name];
		if(chatter != undefined)
			return;
		Chatter.addNewChatter(packet.name);
	},
	
	'new_message': function(packet) {
		var chatter = Chatter.list[packet.name];
		if(chatter == undefined)
			return;
		ChatManager.recieveMessage(chatter, packet.text)
	},
	
	'init': function(packet) {
		ChatManager.init(packet);
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