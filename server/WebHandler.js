var express = require('express');
var expressApp = express();
var HTTPServer = require('http').Server(expressApp);
var io = require('socket.io')(HTTPServer);

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
        expressApp.use(express.static('./static/'));
        
        var port = process.env.PORT || 5000;
        
        HTTPServer.listen(port, function() {
            console.log((new Date()) + ' Server is listening on port ' + port);
        });

        this.io = io;
		
        callback();
    }
}