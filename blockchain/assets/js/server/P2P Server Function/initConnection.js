const socket = require("./socket.js");
const initMessageHandler = require("./initMessageHandler.js");
const initErrorHandler = require("./initErrorHandler.js");
const WS_SEND = require("./WS_SEND.js");
const P2P_MSG = require("./P2P_MSG.js");

module.exports = (ws) => {
    socket.socketPush(ws);
    initMessageHandler(ws);
    initErrorHandler(ws);
    WS_SEND.write(ws, P2P_MSG.queryChainLengthMsg());
};