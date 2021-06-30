const getGenesisBlock = require("../Block/getGenesisBlock.js");

class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
    }
}

var blockchain = [getGenesisBlock(Block)];

module.exports = {
    getBlock: Block,
    getBlockChain: blockchain,
    BlockChainPush: (block) => blockchain.push(block)
};