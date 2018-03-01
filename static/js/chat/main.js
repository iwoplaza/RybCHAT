var uiChatWindow;
var langStrings = {};

// Called after the WebHandler connects to the server.
function main() {
	console.log('[RybCHAT] Connected to the server.');
	LoadLangStrings();
	
	uiJoin = new UIJoin();
	uiChatWindow = null;
}

function hello() {
	console.log('Saying hello...');
	WebHandler.socket.emit('message', JSON.stringify({
		header: { type: 'hello' },
        text: "Hello?"
    }));
}

function LoadLangStrings() {
	let element = document.getElementById('lang-strings');
	if(!element) {
		console.error("No LangStrings were found in this HTML file!");
		return;
	}
	
	langStrings = JSON.parse(element.innerHTML);
}

window.addEventListener('load', function(e) {
    WebHandler.init(main);
});