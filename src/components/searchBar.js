import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../appFeatures/item';
import '../componentCss/searchBar.css'; 

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search items..." 
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default React.memo(SearchBar);
