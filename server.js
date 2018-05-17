var http = require('http');
var url = require('url');
var io = require('socket.io', {
    transports: ['websocket']
})(http);

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

server.listen(8080);
