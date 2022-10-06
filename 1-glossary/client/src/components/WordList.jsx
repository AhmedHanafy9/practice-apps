import React from 'react';
import WordListItem from './WordListItem.jsx';

const WordList = ({listOfWords, addWord, updateWordDefinition}) => {
  return (
    <div className ="word-list">
    {listOfWords.map((word) =>
      <WordListItem word={word} key={word._id} addWord={addWord} updateWordDefinition={updateWordDefinition}/>
    )}
  </div>
  )
}

export default WordList;