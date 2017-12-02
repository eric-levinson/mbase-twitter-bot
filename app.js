var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('babel-polyfill')
const config = require('./src/config')
const Twit = require('twit')
const bot = new Twit(config)

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

var  nsp1 = io.of('/namespace1')
nsp1.on('connection', function(socket) {
	console.log('A user connected');


	var stream = bot.stream('user', {
		with: 'user'
	});

	stream.on('follow', function(follow) {
		console.log(follow);
		nsp1.emit('hi', follow);
	});	

	socket.on('disconnect', function() {
		console.log('A user disconnected');	});
});


http.listen(3000);