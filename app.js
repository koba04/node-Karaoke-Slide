var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

// http response
server.listen(3000);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

// socket.io
io.sockets.on('connection', function(socket) {
    socket.on('move', function(index) {
        socket.broadcast.emit('move', index);
    });
})

