var connect = require('connect'),
    app     = connect(),
    http    = require('http'),
    server  = http.createServer(app),
    io      = require('socket.io').listen(server);

// http response
server.listen(3000);
app.use(connect.static('public'));
app.use(function(req, res) {
  res.sendfile('public/index.html');
});

// socket.io
io.sockets.on('connection', function(socket) {
    socket.on('move', function(index) {
        socket.broadcast.emit('move', index);
    });
})

