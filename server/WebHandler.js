var express = require('express');
var expressApp = express();
var http = require('http').createServer(expressApp);
var io = require('socket.io')(http);

module.exports = {
    startServer: function(callback) {
        expressApp.get('/', function(req, res) {
            res.redirect('/pl');
        });
		expressApp.get('/chat', function(req, res) {
            res.sendFile(ROOTPATH + '/static/chat/index.html');
        });
        expressApp.get('/address', function(req, res) {
            res.sendFile(ROOTPATH + '/static/address.txt');
        });
        expressApp.use(express.static('./static/'));
        
        var port = process.env.PORT || 5000;
        
        http.listen(port, function() {
            console.log((new Date()) + ' Server is listening on port ' + port);
        });
		
        this.io = io;
		
        callback();
    }
}