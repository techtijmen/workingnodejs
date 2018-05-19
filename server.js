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

#!/bin/env node

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.get('/', function(req, res){
  res.sendfile('index.html');
});

server.listen(port,ip,function() {
    console.log('listening');
});

io.on('connection',function(socket) {
    console.log('a user connected');

    socket.on('disconnect',function() {
        console.log('user disconnected');
    });

    socket.on('chat message',function(msg) {
        io.emit('chat message',msg);
    });

});
