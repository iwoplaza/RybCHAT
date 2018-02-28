var uiChatWindow;

// Called after the WebHandler connects to the server.
function main() {
	console.log('[RybCHAT] Connected to the server.');
	
	uiJoin = new UIJoin();
	uiChatWindow = null;
	
	document.addEventListener('keydown', (e) => {
		let keyCode = e.keyCode;
		
		if(keyCode == 13) {
			ChatManager.send(uiChatWindow.uiMessageInput.elementTextField.value + '');
			uiChatWindow.uiMessageInput.elementTextField.value = "";
		}
	});
}

function hello() {
	console.log('Saying hello...');
	WebHandler.socket.emit('message', JSON.stringify({
		header: { type: 'hello' },
        text: "Hello?"
    }));
}

window.addEventListener('load', function(e) {
    WebHandler.init(main);
});