const getLatestBlock = require("../Block/getLatestBlock.js");
const BlockChain = require("../BlockChain/basicBlockChain.js");
const replaceChain = require("./replaceChain.js")
const WS_SEND = require("./../../server/P2P Server Function/WS_SEND");

module.exports = (message) => {
    var receivedBlocks = JSON.parse(message.data).sort((b1, b2) => (b1.index - b2.index));
    var latestBlockReceived = receivedBlocks[receivedBlocks.length - 1];
    var latestBlockHeld = getLatestBlock();
    if (latestBlockReceived.index > latestBlockHeld.index) {
        console.log('Dernier block de la blockchain : ' + latestBlockHeld.index + '. Block reçu par le pair : ' + latestBlockReceived.index);
        if (latestBlockHeld.hash === latestBlockReceived.previousHash) {
            console.log("Nous pouvons appondre le block reçu à notre chaîne");
            BlockChain.BlockChainPush(latestBlockReceived);
            WS_SEND.broadcast(responseLatestMsg());
        } else if (receivedBlocks.length === 1) {
            console.log("Nous devons interroger notre chaîne depuis notre pair");
            WS_SEND.broadcast(queryAllMsg());
        } else {
            console.log("La blockchain reçue est plus longue que la blockchain actuelle");
            replaceChain(receivedBlocks);
        }
    } else {
        console.log('La blockchain reçue est plus courte que la blockchain actuelle. Ne rien faire.');
    }
};