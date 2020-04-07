const phrases = require('./../mongo/phrase')

module.exports =  {
    get: (name, callback) => {
        const person = phrases.find({name: name});
        person.then((phrase) => {
            return callback(phrase[Math.floor(Math.random() * phrase.length)].body);
        });
    },
    put: (name, data) => {
        let person = new phrases({name: name, body: data});
        person.save(err => {
            if (err) throw err;
            return;
        })
        return true;
    }
}