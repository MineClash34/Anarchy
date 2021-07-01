const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = async () => {
    return new Promise(async function(resolve, reject) {
        var blockchain = await BlockChain.getBlockChain();
        resolve(blockchain[blockchain.length - 1]);
    })
}