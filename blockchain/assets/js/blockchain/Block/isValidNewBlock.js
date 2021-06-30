const calculateHashForBlock = require("../Hash/calculateHashForBlock.js");

module.exports = (newBlock, previousBlock) => {
    if (previousBlock.index + 1 !== newBlock.index) {
        console.log('index invalide');
        return false;
    } else if (previousBlock.hash !== newBlock.previousHash) {
        console.log('previousHash invalide');
        return false;
    } else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
        console.log(typeof (newBlock.hash) + ' ' + typeof calculateHashForBlock(newBlock));
        console.log('hash invalide: ' + calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
        return false;
    }
    return true;
};