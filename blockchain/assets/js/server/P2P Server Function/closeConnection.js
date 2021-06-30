const socket = require("./socket.js");

module.exports = (ws) => {
    console.log('échec de la connexion au pair : ' + ws.url);
    socket.socketsSplice(socket.getSockets.indexOf(ws), 1);
};