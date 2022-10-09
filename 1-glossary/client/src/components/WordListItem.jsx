import React from 'react';
const {useState} = React;


const WordListItem = ({word, updateWordDefinition}) => {
  const [showEditForm, setShowForm] = useState(false);
  const [updatedDefinition, setUpdatedDefinition] = useState('')

  const handleUpdate = (event) => {
    event.preventDefault();
    updateWordDefinition(word.word, updatedDefinition);
    setUpdatedDefinition('');
  }

  const showForm = () => {
    event.preventDefault();
    setShowForm(!showEditForm);
  }

  const style = {
    display: showEditForm ? "block" : "none"
  }

  return (
    <div className="word-list-entry">
      <h3>{word.word}</h3>
      <p>{word.definition}</p>
      <form className="definition-form" style={style}
      onSubmit={handleUpdate}>
      <input type='text' placeholder="Set new definition"
      value={updatedDefinition}
      onChange={(event) => setUpdatedDefinition(event.target.value)}/>
      </form>
      <button className="edit-button" type="click" onClick={() => showForm()}>Edit</button>
    </div>
  )
}

export default WordListItem