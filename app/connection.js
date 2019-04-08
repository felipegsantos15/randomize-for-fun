const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/local', {useNewUrlParser: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection successful');
});
