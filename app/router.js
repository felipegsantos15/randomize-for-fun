const randomize = require("./process/randomize");
require("./mongo/connection");
const fs = require('fs');

module.exports ={
    router: (server) => {
        server.get('/ping', (req, res) => {
            res.send(200, 'pong')
        });
        
        server.get('/:name', (req, res) => {
            let string = randomize.get(req.params.name);
            res.send(200, string);
        });
        
        server.get('/', (req, res, next)=> {
            fs.readFile(__dirname + '/pages/index.html', (err, data) => {
                if (err) console.log(err);
                res.setHeader('Content-type', 'text/html');
                res.writeHead(200);
                res.end(data)
            })
            next(false);
        })
        
        server.post('/:name', (req, res, next) => {
            randomize.put(req.params.name, req.body.frase);
            next(false);
        })
    }
}