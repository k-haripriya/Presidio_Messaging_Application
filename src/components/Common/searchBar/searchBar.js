import React from 'react'
import './styles.scss'


function SearchBar(props) {
  const { handleQuery } = props;

  const handleInputChange = (event)=>{
    const newText = event.target.value;
    handleQuery(newText);
  }
  return (
    
      <input className='searchBar' placeholder='Search people or messages' onChange={handleInputChange}></input>
  
  )
}

export default SearchBar
