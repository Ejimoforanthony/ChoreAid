import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function SearchBar({ query, handleInputChange, handleSearch }) {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search for any services..." 
        value={query} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSearch}>
        <IoSearchOutline />
      </button>
    </div>
  );
}

export default SearchBar;
