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

// Express.js stuff
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);

// Websockets with socket.io
var io = require('socket.io')(server);

console.log("Trying to start server...");

// Both port and ip are needed for the OpenShift, otherwise it tries 
// to bind server on IP 0.0.0.0 (or something) and fails
server.listen(8080);

// And finally some websocket stuff
io.on('connection', function (socket) { // Incoming connections from clients
  // Greet the newcomer
  console.log('Client Connected!');
});
