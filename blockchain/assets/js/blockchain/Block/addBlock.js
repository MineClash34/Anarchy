const isValidNewBlock = require("./isValidNewBlock.js");
const getLatestBlock = require("./getLatestBlock.js");
const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = async (newBlock) => {
    if (isValidNewBlock(JSON.parse(JSON.stringify(await newBlock, null, 2)), await getLatestBlock())) {
        BlockChain.BlockChainPush(newBlock);
    }
};