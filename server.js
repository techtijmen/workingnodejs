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

var http = require('http');
var fs = require('fs');


// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });

});


// Loading socket.io
var io = require('socket.io').listen(server);

io.configure(function(){
    io.set("transports", ["websocket"]);
});

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
   console.log('A client is connected!');
});

io.sockets.on('connection', function (socket) {
        socket.emit('message', 'You are connected!');
});
