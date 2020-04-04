const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phraseSchema = new Schema({
  name: String,
  body: String
});

module.exports = mongoose.model('phrase', phraseSchema);