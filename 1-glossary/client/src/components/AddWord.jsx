import React from 'react'
const {useState} = React;


const AddWord = ({addWord}) => {
  const [wordEntry, setWordEntry] = useState('');
  const [definitionEntry, setDefinitionEntry] = useState('')

  const handleAddWord = (event) => {
    event.preventDefault();
    addWord(wordEntry, definitionEntry);
    setWordEntry('');
    setDefinitionEntry('');
  }

  return (
    <form className="word-form"
    onSubmit ={handleAddWord}>
      <input className= "word-input" type="text" placeholder="Add word here"
        value={wordEntry}
        onChange={(event) => setWordEntry(event.target.value)}/>
      <input className = "definition-input" type="text" placeholder="Add definition here"
      value={definitionEntry}
      onChange={(event) => setDefinitionEntry(event.target.value)}/>
      <button className="add-button" type="submit">Add Word</button>
    </form>
  )
}

export default AddWord;