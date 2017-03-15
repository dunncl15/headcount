import React from 'react';
import './Search.css'

const Search = (props) => {
  return (
    <input type="search"
           className="search-field"
           onChange={(e) => props.onChange(e)}
           placeholder="Search by county"/>
  )
}

export default Search;
