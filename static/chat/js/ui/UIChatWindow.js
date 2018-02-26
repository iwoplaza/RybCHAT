class UIChatWindow {
	constructor() {
		this.element = document.createElement('div');
		this.element.classList.add('chat-window');
		document.body.appendChild(this.element);
		
		this.uiMessageInput = new UIMessageInput(this);
	}
}