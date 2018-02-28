class UIJoin {
	constructor() {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
		this.element.innerHTML = "<h1>Join the RybCHAT!</h1>";
		this.element.classList.add('join-window');
		
		this.nameInputElement = document.createElement('input');
		this.nameInputElement.setAttribute('type', 'text');
		this.element.appendChild(this.nameInputElement);
		
		this.joinButton = document.createElement('button');
		this.element.appendChild(this.joinButton);
		this.joinButton.innerHTML = 'Join';
		this.joinButton.onclick = () => {
			WebHandler.socket.emit('message', JSON.stringify({
				header: { type: 'join_request' },
				name: this.nameInputElement.value
			}));
		}
	}
	
	destroy() {
		document.body.removeChild(this.element);
	}
}