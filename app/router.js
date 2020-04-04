const randomize = require("./process/randomize");
const add = require('./process/add')
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
        
        server.post('/insert', (req, res, next) => {
            add.insert();
            next(false);
        })
    }
}