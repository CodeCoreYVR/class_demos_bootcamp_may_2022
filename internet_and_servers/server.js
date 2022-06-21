const net = require('net'); // net is a module built into NodeJS that is used for creating TCP server

const server = net.createServer(function (socket) {
  // this callback function is an event listener
  // an even listener is a function that will trigger specified event
  // "socket" is representing a connection

  socket.on("data", function (data) {
    // data event listener, whenever the server receives "data" it will trigger this event
    // the data argument represents the data coming from a client's request
    console.log(`Server got data: ${data.toString()}`);
    socket.write(`Hello, ${data.toString()}`)
  })  
})

server.listen(5000, "127.0.0.1", () => {
  console.log(`Server is listening on 127.0.0.1:5000`);
})