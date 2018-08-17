# WebSocket-node-chat
this is a chat room use WebSocket and NodeJs 
1 安装依赖
npm install --save express
npm install --save socket.io

2 进入server执行 
cnpm install
node server.js
3 浏览器访问http://172.19.82.168:3000/index.html
这里的ip是本机启动服务的ip，只要大家在一个局域网内就可以访问到进入聊天室
需要修改的地方 index.html中
 <script src="http://172.19.82.168:3000/socket.io/socket.io.js"></script>

client.js中
//连接websocket后端服务器
this.socket = io.connect('ws://172.19.82.168:3000');


serverjs中
http.listen(3000, '172.19.82.168',function(){
	console.log('listening on *:3000');
});

proxy.js暂且没用到