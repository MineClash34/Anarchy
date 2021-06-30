const calculateHash = require("./calculateHash.js");

module.exports = (block) => {
    return calculateHash(block.index, block.previousHash, block.timestamp, block.data);
};