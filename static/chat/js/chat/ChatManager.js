var ChatManager = {};

ChatManager.send = (inputContent) => {
	console.log('Sending message:', inputContent);
	
	WebHandler.socket.emit('message', JSON.stringify({
		header: { type: 'new_message' },
        text: inputContent
    }));
}

ChatManager.recieveMessage = (chatter, text) => {
	uiChatWindow.addMessage(chatter, text);
}