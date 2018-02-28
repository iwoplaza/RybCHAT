class UIChatWindow {
	constructor() {
		this.element = document.createElement('div');
		this.element.classList.add('chat-window');
		document.body.appendChild(this.element);
		
		this.uiMessageFeed = new UIMessageFeed(this);
		this.uiMessageInput = new UIMessageInput(this);
	}
	
	addMessage(message) {
		this.uiMessageFeed.addMessage(message);
	}
}