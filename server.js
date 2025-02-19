const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log("msg : ", msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

server.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});
