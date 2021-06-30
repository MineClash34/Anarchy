var sockets = [];

module.exports = {
    getSockets: sockets,
    socketPush: (ws) => sockets.push(ws),
    socketsSplice: (n1, n2) => { return sockets.splice(n1, n2); }
}