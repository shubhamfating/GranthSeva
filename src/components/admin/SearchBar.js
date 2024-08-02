import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search records..."
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;