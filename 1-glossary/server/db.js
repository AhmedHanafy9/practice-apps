const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/glossary')

let wordSchema = mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);


module.exports = mongoose.model('Word', wordSchema);



