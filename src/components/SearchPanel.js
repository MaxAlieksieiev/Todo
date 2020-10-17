import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {

  const searchText = 'Type to search';

  return (
    <input placeholder={searchText} className="search-input"/>
  )
}

export default SearchPanel;
