const restify = require('restify');
const router = require('./router');
const server = restify.createServer();

router.router(server);
server.use(restify.plugins.bodyParser());
server.listen(process.env.PORT, () => {
    console.log(`server listen on port ${process.env.PORT}`);
});