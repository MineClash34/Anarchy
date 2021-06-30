const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = () => {
    var blockchain = BlockChain.getBlockChain;
    return blockchain[blockchain.length - 1];
}