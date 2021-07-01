const WebSocket = require("ws");
const initConnection = require("./initConnection")

module.exports = () => {
    const p2p_port = process.env.P2P_PORT || 6001;
    var server = new WebSocket.Server({port: p2p_port});
    server.on('connection', ws => initConnection(ws));
    console.log('Écoute du port websocket p2p sur : ' + p2p_port);
};
