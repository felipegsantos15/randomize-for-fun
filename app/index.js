const restify = require('restify');
const server = restify.createServer();
const randomize = require(__dirname + "/randomize");

server.get('/ping', (req, res) => {
    return res.send(200, 'pong')
});

server.get('/:name', (req, res) => {
    let string = randomize.random(req.params.name);
    return res.send(200, string);
});

server.listen(process.env.PORT, () => {
    console.log(`server listen on port ${process.env.PORT}`);
});