var axios = require('axios');
var prompt = require("prompt-sync")({sigint: true});

axios.get('http://localhost:3001/blocks')
    .then((response) => {
        var blockchain = response.data;
        if (blockchain.length == 1) {
            console.log("aucun message n'a encore été save");
        }
        else {
            blockchain.slice(1).forEach(block => {
                if (block.data.status == 1) {
                    console.log("user id: " + block.data.userid + "\nmessage: " + block.data.content + "\n\n");
                };
            });
        }
        while (true) {
            message = prompt("> ")
            axios({
                method: 'post',
                url: "http://localhost:3001/mineBlock",
                body: {
                    data: {"userid":0, "status":1, "content": "Salut bg"}
                }
            });
            console.log(message);
        }
    });

var sendMessage = (message) => {
    axios.post('http://localhost:3001/mineBlock', {"userid":0, "status":1, "content": message});
}