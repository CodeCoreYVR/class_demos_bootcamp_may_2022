const net = require('net');

const client = new net.Socket()

client.on("data", function (data) {
  console.log("Data received from the server:" + data);
})

// connect is used to connect the client to a server
// we provide the address and port of the server we want to connect to
client.connect(5000, "127.0.0.1", function () {
  client.write("Matt")
  client.end()
})
