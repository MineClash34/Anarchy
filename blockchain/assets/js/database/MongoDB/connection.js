var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blockchain', {useNewUrlParser: true, useUnifiedTopology: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
})

conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));


const BlockSchema = new mongoose.Schema({
    index: Number,
    previousHash: String,
    timestamp: Number,
    data: String,
    hash: String
});

var logBlockChain = mongoose.model('logs', BlockSchema);

module.exports = {
    BlockSchema: BlockSchema,
    logBlockChain: logBlockChain
}