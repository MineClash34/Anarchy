const BlockChain = require("../BlockChain/basicBlockChain.js");

module.exports = (Block) => { //creation of genesis block
    return new Block(0, "0", 1465154705, "mon genesis block !", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7");
};