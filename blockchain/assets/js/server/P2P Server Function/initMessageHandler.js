const MessageType = {
    QUERY_LATEST: 0,
    QUERY_ALL: 1,
    RESPONSE_BLOCKCHAIN: 2
};

const P2P_MSG = require("./P2P_MSG.js");
const WS_SEND = require('./WS_SEND')
const handleBlockchainResponse = require("./../../blockchain/Chain/handleBlockchainResponse")

module.exports = (ws) => {
    ws.on('message', (data) => {
        var message = JSON.parse(data);
        console.log('Message Reçu ' + JSON.stringify(message));
        switch (message.type) {
            case MessageType.QUERY_LATEST:
                WS_SEND.write(ws, P2P_MSG.responseLatestMsg());
                break;
            case MessageType.QUERY_ALL:
                WS_SEND.write(ws, P2P_MSG.responseChainMsg());
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:
                handleBlockchainResponse(message);
                break;
        }
    });
};