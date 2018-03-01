class ChatMessage {
	constructor(chatter, text) {
		this.chatter = chatter;
		// Protecting against HTML and JavaScript injections.
		this.text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
}