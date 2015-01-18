// Setting up our definitions
var express		= require('express');
var app			= express();
var io			= require('socket.io');
var path			= require('path');


// set the static files location /app/img will be /img for users
// app.use(express.static(__dirname + '/app'));

// io.on('connection', function(socket){
// 	socket.on('chat message', function(data){
// 		console.log('message: ' + data);
// 		io.emit('chat message', data);
// 	});
// });