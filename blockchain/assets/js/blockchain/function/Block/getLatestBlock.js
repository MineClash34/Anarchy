const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = () => {
    var blockchain = BlockChain.getBlockChain;
    blockchain[blockchain.length - 1];
}