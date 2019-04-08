const mongoose = require('mongoose');

const phraseSchema = new mongoose.Schema({
  name: String,
  body: [String]
});

const phrase = mongoose.model('phrase', phraseSchema);