var Chatters = {};
Chatters.Chatter = function(connection, name) {
	this.connection = connection;
	this.name = name;
	
	this.connection.chatter = this;
}

Chatters.list = [];

Chatters.doesConnectionExist = function(connection) {
	for(var i = 0; i < Chatters.list.length; ++i) {
		if(Chatters.list[i].connection == connection) {
			return true;
		}
	}
	return false;
}

Chatters.addChatter = function(chatter) {
	if(!this.doesConnectionExist(chatter.connection)) {
		Chatters.list.push(chatter);
		return true;
	}
	return false;
}

Chatters.removeConnection = function(connection) {
	for(var i = 0; i < Chatters.list.length; ++i) {
		if(Chatters.list[i].connection == connection) {
			Chatters.list.splice(i, 1);
			return true;
		}
	}
	return false;
}

module.exports = Chatters;