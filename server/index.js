const WebSocket = require('ws');
const dateFormat = require('dateformat');
const wss = new WebSocket.Server({ port: 8081 });
const messages = [];

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const newMessage = {key: messages.length, date: dateFormat(new Date(), ("dd.mm.yyyy в HH:MM")), ...JSON.parse(message)};
    messages.push(newMessage);
    wss.clients.forEach(el =>
      el.send(JSON.stringify({type:'message', message:newMessage}))
    );
    console.log('received: %s', newMessage);
  });
  console.log('connection');
  wss.on('disconnect', function exit(ws) {
    console.log('exit');
  });

  ws.send(JSON.stringify({
      type: 'messages',
      messages: messages
  }))



});
