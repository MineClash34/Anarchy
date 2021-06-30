const BlockChain = require("../BlockChain/basicBlockChain.js");
const isValidChain = require("./isValidChain.js");
const WS_SEND = require("../../../server/P2P Server Function/WS_SEND.js");


module.exports = (newBlocks) => {
    var blockchain = BlockChain.getBlockChain;
    if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
        console.log('La blockchain reçue est valide. Remplacer la blockchain actuelle par la blockchain reçue.');
        blockchain = newBlocks;
        WS_SEND.broadcast(responseLatestMsg());
    } else {
        console.log('La blockchain reçue est invalide.');
    }
};