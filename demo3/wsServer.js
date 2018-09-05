
var ws = require("nodejs-websocket")
var PORT=8001;
var clientCount=0;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection");
	clientCount++;
	conn.nickname='user'+clientCount;
	//通知所有人，有人进入群聊
	broadcast(conn.nickname+' come in');
	conn.on("text", function (str) {
		console.log("Received "+str)
		broadcast(conn.nickname+' : '+str)
	})
	conn.on("close", function (code, reason) {
		console.log("close");
		broadcast(conn.nickname+"left")
	})
	conn.on("error",function (err) {
		console.log("handle err");
		console.log(err)
	})
}).listen(PORT);
console.log('websocket server listening on port '+PORT)

function broadcast(str){
 server.connections.forEach((connection)=>{
 		connection.sendText(str);
 })
}