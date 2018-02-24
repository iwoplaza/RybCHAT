
// Called after the WebHandler connects to the server.
function main() {
	console.log('[RybCHAT] Connected to the server.');
}

function hello() {
	console.log('Saying hello...');
	WebHandler.webSocket.send(JSON.stringify({
        header: { type: 'hello' }
    }));
}

window.addEventListener('load', function(e) {
    WebHandler.init(main);
});