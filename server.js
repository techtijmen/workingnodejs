var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) { //creates node server
    res.writeHead(200, {"Content-Type": "text/html"});
    var visitor = url.parse(req.url).pathname;
    res.write('Welcome to da page!');
    res.end();
});

server.listen(8080);
