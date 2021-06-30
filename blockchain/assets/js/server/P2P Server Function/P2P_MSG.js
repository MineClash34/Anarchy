const MessageType = {
    QUERY_LATEST: 0,
    QUERY_ALL: 1,
    RESPONSE_BLOCKCHAIN: 2
};

const getLatestBlock = require("../../blockchain/Block/getLatestBlock.js");
const BlockChain = require("../../blockchain/BlockChain/basicBlockChain.js");

module.exports = {
    queryChainLengthMsg: () => ({'type': MessageType.QUERY_LATEST}),
    queryAllMsg: () => ({'type': MessageType.QUERY_ALL}),
    responseChainMsg: () => ({
        'type': MessageType.RESPONSE_BLOCKCHAIN, 'data': JSON.stringify(BlockChain.getBlockChain)
    }),
    responseLatestMsg: () => ({
        'type': MessageType.RESPONSE_BLOCKCHAIN,
        'data': JSON.stringify([getLatestBlock(BlockChain.getBlockChain)])
    })
}