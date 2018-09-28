var app = require('http').createServer();
var io = require('socket.io')(app);
var PORT=8002;
var clientCount=0;
app.listen(PORT);


io.on('connection', function (socket) {
  clientCount++;
  //监听测试
  socket.emit('news', { hello: 'world' });   //测试消息发送
  socket.on('my other event', function (data) {   //测试消息接收
    console.log(data);
  });

  socket.nickname='user'+clientCount;
  //广播成员登入
  io.emit('enter',socket.nickname+' come in');   //socket.emit代表给该socket的客户端发送消息    io.emit代表广播消息
  //监听消息客户端传过来的消息
  socket.on('message',function (data) {
    //广播给所有客户端
    io.emit('message',socket.nickname+'---'+data)
  })
  //监听成员退出（也就是断开服务）
  socket.on('disconnect',function () {
    io.emit('leave',socket.nickname+' leave out');
  })
});

console.log('websocket server listening on port '+PORT)
