'use strict';

/*
 * 
 * Own Function Import
 * 
 */

const initHttpServer = require("./assets/js/server/HTPP Server Function/initHttpServer.js");
const initP2PServer = require("./assets/js/server/P2P Server Function/initP2PServer.js");
const connectToPeers = require("./assets/js/server/P2P Server Function/connectToPeers.js");


var initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];


connectToPeers(initialPeers);
initHttpServer();
initP2PServer();