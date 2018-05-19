/*var http = require('http');
var url = require('url');
var io = require('socket.io')(server);

var server = http.createServer(function(req, res) { //creates node server
    res.writeHead(200, {"Content-Type": "text/html"});
    var visitor = url.parse(req.url).pathname;
    console.log(visitor);
    res.write('Welcome to da page!');
    res.end();
});

io.on('connection', function (socket) {
    console.log('Client connected!');
});

server.listen(8080);*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
