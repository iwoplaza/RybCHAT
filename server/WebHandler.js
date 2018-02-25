var express = require('express');
var expressApp = express();
var HTTPServer = require('http').Server(expressApp);
var WebSocketServer = require('websocket').server;

module.exports = {
    startServer: function(callback) {
        expressApp.get('/', function(req, res) {
            res.sendFile(ROOTPATH + '/static/index.html');
        });
		expressApp.get('/chat', function(req, res) {
            res.sendFile(ROOTPATH + '/static/chat/index.html');
        });
        expressApp.get('/address', function(req, res) {
            res.sendFile(ROOTPATH + '/static/address.txt');
        });
        expressApp.use('/', express.static(ROOTPATH + '/static'));
        
        var port = process.env.PORT || 5000;
        
        HTTPServer.listen(port, function() {
            console.log((new Date()) + ' Server is listening on port ' + port);
        });

        this.server = new WebSocketServer({
            httpServer: HTTPServer,
            autoAcceptConnections: false
        });
        
        callback();
    }
}