const WebSocket = require("ws");
const initConnection = require("./initConnection.js");

module.exports = (newPeers) => {
    newPeers.forEach((peer) => {
        var ws = new WebSocket(peer);
        ws.on('open', () => initConnection(ws));
        ws.on('error', () => {
            console.log('échec de la connexion');
        });
    });
};