const sockets = require("./socket.js")

var write = (ws, message) => ws.send(JSON.stringify(message))
module.exports = {
    write: write,
    broadcast: (message) => sockets.getSockets.forEach(socket => write(socket, message))
}