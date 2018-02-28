class UIMessageFeed {
	constructor(chatWindow) {
		this.groups = [];
		
		this.element = document.createElement('div');
		chatWindow.element.appendChild(this.element);
		this.element.classList.add('message-feed');
		
		this.scrollInterval = null;
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
		
		this.scrollTo(this.element.scrollHeight);
	}
	
	scrollTo(target) {
		if(this.scrollInterval != null)
			clearInterval(this.scrollInterval);
		
		this.scrollInterval = setInterval(() => {
			performScrolling(this, target);
		}, 50);
	}
}

function performScrolling(feed, target) {
	const margin = 0.5;

	feed.element.scrollTop += ((feed.element.scrollHeight-feed.element.offsetHeight) - feed.element.scrollTop) * 0.2;
	
	if(Math.abs(feed.element.scrollTop - target) <= margin) {
		clearInterval(feed.scrollInterval);
	}
}