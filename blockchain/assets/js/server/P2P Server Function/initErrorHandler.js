const closeConnection = require("./closeConnection.js");

module.exports = (ws) => {
    ws.on('close', () => closeConnection(ws));
    ws.on('error', () => closeConnection(ws));
};