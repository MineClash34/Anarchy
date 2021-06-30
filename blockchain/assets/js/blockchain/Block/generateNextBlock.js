const getLatestBlock = require("./getLatestBlock.js");
const calculateHash = require("../Hash/calculateHash.js");
const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = (blockData) => {
    var Block = BlockChain.getBlock;
    var previousBlock = getLatestBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimestamp = new Date().getTime() / 1000;
    var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
    return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
};