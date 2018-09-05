var app = require('http').createServer();
var io = require('socket.io')(app);
var PORT=8002;

app.listen(PORT);


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

console.log('websocket server listening on port '+PORT)
