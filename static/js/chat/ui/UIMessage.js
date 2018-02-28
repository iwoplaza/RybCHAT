class UIMessage {
	constructor(message) {
		this.message = message;
		
		this.element = document.createElement('div');
		this.element.innerHTML = this.message.text;
		this.element.classList.add('message');
	}
	
	setGroup(group) {
		group.element.appendChild(this.element);
	}
}