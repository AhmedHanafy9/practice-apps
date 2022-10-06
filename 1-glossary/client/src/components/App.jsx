import React from 'react'
import WordList from './WordList.jsx'
import WordListItem from './WordListItem.jsx'
import AddWord from './AddWord.jsx'
import Search from './Search.jsx'
import axios from 'axios';

const {useState} = React;
const {useEffect} = React;

const App = () => {
  const[words, setWords] = useState([])
  const[filteredWords, setFilteredWords] = useState([])

  const fetchAllWords = () => {
    axios.get('http://localhost:3000/api/words')
      .then((response) => {
        setWords(response.data);
        setFilteredWords(response.data);
      });
  }

  const addWord = (wordEntry, definitionEntry) => {
    const article = {word: wordEntry, definition: definitionEntry}
    axios.post('http://localhost:3000/api/words', article)
      .then(fetchAllWords());
  }

  const handleSearchWord = (searchString) => {
    let filteredWords = words.filter((word) => {
      return word.word.toLowerCase().includes(searchString.toLowerCase());
    })
    setFilteredWords(filteredWords);
  }

  const updateWordDefinition = (word, definition) => {
    const article = {word: word, definition: definition}
    console.log(article);
    axios.put('http://localhost:3000/api/words', article)
      .then(fetchAllWords());
  }

  useEffect(() => {
    fetchAllWords();
  }, []);



  return (
    <div>
      <nav className ='title-bar'>
        <h1>Glossary</h1>
      </nav>
      <Search handleSearchWord={handleSearchWord}/>
      <AddWord addWord={addWord}/>
      <WordList listOfWords={filteredWords} updateWordDefinition={updateWordDefinition}/>
    </div>
  )
}

export default App;