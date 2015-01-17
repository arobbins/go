var app = require('express')(),
	 http = require('http').Server(app),
	 io = require('socket.io')(http),
	 FirebaseTokenGenerator = require("firebase-token-generator"),
	 tokenGenerator = new FirebaseTokenGenerator("CnIRSny3kvqi60G0PiAIf8Jlp7jd4iVauAgEeMNd"),
	 token = tokenGenerator.createToken({
		 uid: "1",
		 some: "arbitrary",
		 data: "here"
	 });

app.get('/', function(req, res){
	res.sendFile(__dirname + '/app/index.html');
});

app.use(app.static(path.join(__dirname, 'dist')));

io.on('connection', function(socket){
	socket.on('chat message', function(data){
		console.log('message: ' + data);
		io.emit('chat message', data);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});