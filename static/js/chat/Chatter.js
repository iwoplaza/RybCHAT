class Chatter {
	constructor(name) {
		this.name = name;
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