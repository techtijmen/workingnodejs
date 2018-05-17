var http = require('http');
var url = require('url');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req, res) { //creates node server
    res.writeHead(200, {"Content-Type": "text/html"});
    var visitor = url.parse(req.url).pathname;
    res.write('Welcome to da page!');
    res.end();
});

server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
});

server.listen(8080);

server.close();
