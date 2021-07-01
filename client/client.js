var axios = require('axios');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


axios.get('http://127.0.0.1:3001/blocks')
    .then((response) => {
        var blockchain = response.data;
        if (blockchain.length == 1) {
            console.log("aucun message n'a encore été save");
        }
        else {
            blockchain.slice(1).forEach(block => {
                console.log("")
                if (block.data.status == 1) {
                    console.log("user id: " + block.data.userid + "\nmessage: " + block.data.content + "\n");
                };
            });
        }
        sendMessage();
    });

function sendMessage () {
    rl.question("> ", function(message) {
        if (message == "") {
            readline.moveCursor(process.stdout, 0, -1)
            readline.clearScreenDown(process.stdout)
        }
        else {
            var userid = 0
            axios({
                method: 'post',
                url: "http://127.0.0.1:3001/mineBlock",
                data: {data: {"userid":userid, "status":1, "content": message}}
            }); 
            readline.moveCursor(process.stdout, 0, -2)
            readline.clearScreenDown(process.stdout)
            console.log("\nuser id: " + userid + "\nmessage: " + message + "\n")
        }
        sendMessage();
    });
}