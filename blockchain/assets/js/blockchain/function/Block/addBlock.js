const isValidNewBlock = require("./isValidNewBlock.js");
const getLatestBlock = require("./getLatestBlock.js");
const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = (newBlock) => {
    if (isValidNewBlock(newBlock, getLatestBlock())) {
        BlockChain.BlockChainPush(newBlock);
    }
};