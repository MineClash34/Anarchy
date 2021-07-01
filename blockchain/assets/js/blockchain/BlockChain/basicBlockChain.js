const connection = require("../../database/MongoDB/connection.js");

class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
    }
}



module.exports = {
    getBlock: Block,
    getBlockChain: () => {
        return new Promise(function(resolve, reject){
            connection.logBlockChain.find(function (error, results) {
                if (error) throw error;
                resolve(results);
            });
        })

    },
    BlockChainPush: (block) => {
        var blockData = new connection.logBlockChain( { "index": block.index, "previousHash": block.previousHash, "timestamp": block.timestamp, "data": JSON.stringify(block.data), "hash": block.hash } )
        blockData.save(function(err, data){
          if (err) throw err;
        });
    }
};