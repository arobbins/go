var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);
var path = require('path');
var config = require('./gulp/config');
var hello = "Hello";


// Serving up static assets in dist folder
app.use(express.static(path.resolve(__dirname, config.paths.project)));

// Run our server on port 3000
server.listen(3000, function() {
  console.log('waiting for requests...');
});

// Anytime a websocket connection is made, run the code inside
io.sockets.on('connection', function(socket){

	// Creating a custom event called "entrance" and passing data to the client
	socket.emit('test', {

	});

});