import React from 'react'
const {useState} = React;

const Search = ({handleSearchWord}) => {
  const [searchEntry, setSearchEntry] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    handleSearchWord(searchEntry);
    setSearchEntry('');
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input type='text' placeholder="Search.."
      value={searchEntry}
      onChange={(event) => setSearchEntry(event.target.value)}/>
      <button type="submit">Go!</button>
      <button type="submit" onClick={() => setSearchEntry('')}>Back</button>
    </form>
  )
}

export default Search;