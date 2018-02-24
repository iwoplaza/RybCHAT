var WebHandler = {};

WebHandler.webSocket = null;

WebHandler.onMessage = function(event) {
	MessageHandler.decode(JSON.parse(event.data));
}

WebHandler.init = function(callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            WebHandler.address = xmlhttp.responseText;
            WebHandler.webSocket = new WebSocket(WebHandler.address, "connect");
            
            WebHandler.webSocket.onopen = function (event) {
                callback();
            };

            WebHandler.webSocket.addEventListener('message', WebHandler.onMessage);
        }
	}
	xmlhttp.open("GET",'address',true);
	xmlhttp.send();
}