class UIMessageGroup {
	constructor(feed, chatter, messages) {
		this.chatter = chatter;
		this.messages = messages;
		
		this.element = document.createElement('div');
		feed.element.appendChild(this.element);
		this.element.classList.add('message-group');
		this.chatterElement = document.createElement('div');
		this.element.appendChild(this.chatterElement);
		this.chatterElement.classList.add('chatter');
		this.chatterElement.innerHTML = chatter.name + ':';
		
		for(let msg of this.messages) {
			msg.setGroup(this);
		}
	}
	
	addMessage(message) {
		let uiMsg = new UIMessage(message);
		uiMsg.setGroup(this);
		this.messages.push(uiMsg);
	}
}