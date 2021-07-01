const express = require("express");
const bodyParser = require('body-parser');
const BlockChain = require("../../blockchain/BlockChain/basicBlockChain.js");
const addBlock = require("../../blockchain/Block/addBlock.js");
const generateNextBlock = require("../../blockchain/Block/generateNextBlock.js");
const WS_SEND = require("../P2P Server Function/WS_SEND.js");
const P2P_MSG = require("../P2P Server Function/P2P_MSG.js")
const socket = require("../P2P Server Function/socket.js");
const connectToPeers = require("../P2P Server Function/connectToPeers.js");

module.exports = () => { //server http
    const http_port = process.env.HTTP_PORT || 3001;
    const app = express();
    app.use(bodyParser.json());

    app.get('/blocks', async (req, res) => {
        var blockchain = await BlockChain.getBlockChain();
        res.send(JSON.stringify(blockchain))
    });
    app.post('/mineBlock', async (req, res) => {
        var newBlock = generateNextBlock(req.body.data);
        addBlock(await newBlock);
        WS_SEND.broadcast(P2P_MSG.responseLatestMsg());
        console.log('block ajouté : ' + JSON.stringify(await newBlock));
        res.send();
    });
    app.get('/peers', (req, res) => {
        var sockets = socket.getSockets;
        res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
    });
    app.post('/addPeer', (req, res) => {
        connectToPeers([req.body.peer]);
        res.send();
    });
    app.listen(http_port, () => console.log('Écoute HTTP sur le port : ' + http_port));
};