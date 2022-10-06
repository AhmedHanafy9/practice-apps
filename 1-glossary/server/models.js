var db = require('./db');
const Word = require('./db');


module.exports = {
  getAll: function (callback) {
    Word.find({}, (error, docs) => {
      callback(error, docs)
    })
  },
  create: function(params, callback) {
    let wordToAdd = new Word({word: params.word, definition: params.definition})
    wordToAdd.save((error, word) => {
      callback(error, word);
    })
  },
  edit: function(params, callback) {
    const query = {word: params.word}
    console.log('params.definiton', params.definition);
    Word.findOneAndUpdate(query, {$set: {definition: params.definition}}, (error, updatedWord) => {
      callback(error, updatedWord)
    })
  },
  delete: function(params, callback) {
    const query = {word: params.word}
    Word.findOneAndDelete(query, (error, deletedWord) => {
      callback(error, deletedWord)
    })
  }
}