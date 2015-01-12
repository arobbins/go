var app = require('express')(),
	 http = require('http').Server(app),
	 io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(data){
		console.log('message: ' + data);
		io.emit('chat message', data);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});