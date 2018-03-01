class Chatter {
	constructor(name) {
		// Protecting against HTML and JavaScript injections.
		this.name = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
}

Chatter.list = [];
Chatter.initList = function(array) {
	Chatter.list = [];
	for(let entry of array) {
		Chatter.list[entry.name] = new Chatter(entry.name);
	}
}
Chatter.addNewChatter = function(name) {
	if(Chatter.list[name] != undefined)
		return false;
	
	console.log('New chatter connected: ' + name);
	Chatter.list[name] = new Chatter(name);
}