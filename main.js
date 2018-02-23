ROOTPATH = __dirname;

var WebHandler = require("./server/WebHandler.js");

function onServerStarted()
{
	
}

WebHandler.startServer(onServerStarted);