var ChatManager = {};

ChatManager.send = (inputContent) => {
	console.log('Sending message:', inputContent);
	
	WebHandler.socket.emit('message', JSON.stringify({
		header: { type: 'new_message' },
        text: inputContent
    }));
}

ChatManager.recieveMessage = (chatter, text) => {
	uiChatWindow.addMessage(new ChatMessage(chatter, text));
}

ChatManager.init = (packet) => {
	Chatter.initList(packet.chatters);
	uiChatWindow = new UIChatWindow();
	
	for(let entry of packet.history) {
		let fakeChatter = new Chatter(entry.name);
		uiChatWindow.uiMessageFeed.addMessage(new ChatMessage(fakeChatter, entry.text));
	}
}