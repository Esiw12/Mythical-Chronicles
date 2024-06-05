const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081, host: '0.0.0.0' });

wss.on('connection', ws => {
  console.log('New client connected');
  ws.on('message', message => {
    console.log('received:', message);
    // Рассылка сообщения всем подключенным клиентам, кроме отправителя
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://0.0.0.0:8081');
