class UIMessageInput {
	constructor(uiChatWindow) {
		this.element = document.createElement('div');
		uiChatWindow.element.appendChild(this.element);
		this.element.classList.add('message-input');
		
		this.elementTextField = document.createElement('input');
		this.element.appendChild(this.elementTextField);
		this.elementTextField.setAttribute('type', 'text');
		
		this.elementSendButton = document.createElement('input');
		this.element.appendChild(this.elementSendButton);
		this.elementSendButton.setAttribute('type', 'button');
		this.elementSendButton.setAttribute('value', 'Send');
		
		this.elementSendButton.addEventListener('click', () => {
			ChatManager.send(this.elementTextField.value);
		});
	}
}