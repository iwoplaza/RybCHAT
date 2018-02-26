
// Called after the WebHandler connects to the server.
function main() {
	console.log('[RybCHAT] Connected to the server.');
}

function hello() {
	console.log('Saying hello...');
	WebHandler.socket.emit('hello', JSON.stringify({
        text: "Hello?"
    }));
}

window.addEventListener('load', function(e) {
    WebHandler.init(main);
});