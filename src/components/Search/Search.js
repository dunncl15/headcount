import React from 'react';
import './Search.css'

const Search = ({ onChange }) => {
  return (
    <input type="search"
           className="search-field"
           onChange={(e) => onChange(e)}
           placeholder="Search by county"/>
  )
}

export default Search;
