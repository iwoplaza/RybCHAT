class UIJoin {
	constructor() {
		this.element = document.createElement('div');
		
		var chatContainer = document.getElementById('chat-container');
		chatContainer.innerHTML = '';
		chatContainer.appendChild(this.element);
		
		this.element.innerHTML = "<h1>" + langStrings.title + "</h1>";
		this.element.classList.add('join-window');
		
		this.nameInputElement = document.createElement('input');
		this.element.appendChild(this.nameInputElement);
		this.nameInputElement.setAttribute('type', 'text');
		this.nameInputElement.classList.add('large');
		this.nameInputElement.classList.add('wide');
		this.nameInputElement.setAttribute('placeholder', langStrings.nickname);
		this.nameInputElement.addEventListener('keydown', (e) => {
			let keyCode = e.keyCode;

			if(keyCode == 13) {
				this.sendJoinRequest();
			}
		});
		
		this.joinButton = document.createElement('button');
		this.element.appendChild(this.joinButton);
		this.joinButton.classList.add('btn');
		this.joinButton.classList.add('wide');
		this.joinButton.classList.add('center');
		this.joinButton.innerHTML = langStrings.join;
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
}