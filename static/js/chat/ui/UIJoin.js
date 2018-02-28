class UIJoin {
	constructor() {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
		this.element.innerHTML = "<h1>Join the RybCHAT!</h1>";
		this.element.classList.add('join-window');
		
		this.nameInputElement = document.createElement('input');
		this.element.appendChild(this.nameInputElement);
		this.nameInputElement.setAttribute('type', 'text');
		this.nameInputElement.addEventListener('keydown', (e) => {
			let keyCode = e.keyCode;

			if(keyCode == 13) {
				this.sendJoinRequest();
			}
		});
		
		this.joinButton = document.createElement('button');
		this.element.appendChild(this.joinButton);
		this.joinButton.innerHTML = 'Join';
		this.joinButton.onclick = () => {
			this.sendJoinRequest();
		}
	}
	
	sendJoinRequest() {
		WebHandler.socket.emit('message', JSON.stringify({
			header: { type: 'join_request' },
			name: this.nameInputElement.value
		}));
	}
	
	destroy() {
		document.body.removeChild(this.element);
	}
}