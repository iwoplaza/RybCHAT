var uiChatWindow;

// Called after the WebHandler connects to the server.
function main() {
	console.log('[RybCHAT] Connected to the server.');
	
	uiChatWindow = new UIChatWindow();
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