const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });
const messages = [];

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const newMessage = JSON.parse(message);
    messages.push(newMessage);
    ws.clients.forEach(el => el.send(JSON.stringify({type:'message', message:newMessage})));
    console.log('received: %s', message);
  });
  console.log('connection');
  //ws.send('something');
  ws.send(JSON.stringify({
    type: 'message',
    messages: messages
  }));
});
