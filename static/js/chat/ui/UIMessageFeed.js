class UIMessageFeed {
	constructor(chatWindow) {
		this.groups = [];
		
		this.element = document.createElement('div');
		chatWindow.element.appendChild(this.element);
		this.element.classList.add('message-feed');
	}
	
	addMessage(message) {
		console.log('Adding message to UI:' + message.text + " by " + message.chatter.name);
		
		let lastGroup = null;
		if(this.groups.length > 0)
			lastGroup = this.groups[this.groups.length-1];
		
		if(lastGroup != null && lastGroup.chatter.name == message.chatter.name) {
			lastGroup.addMessage(message);
		}else{
			var group = new UIMessageGroup(this, message.chatter, [
				new UIMessage(message)
			]);
			group.feed = this;
			this.groups.push(group);
		}
	}
}