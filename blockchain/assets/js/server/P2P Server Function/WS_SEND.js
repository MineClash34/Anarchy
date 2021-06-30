const sockets = require("./socket.js")

module.exports = {
    write: (ws, message) => ws.send(JSON.stringify(message)),
    broadcast: (message) => sockets.getSockets.forEach(socket => this.write(socket, message))
}