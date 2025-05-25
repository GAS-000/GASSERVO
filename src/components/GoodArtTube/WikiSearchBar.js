import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder={`Search`} />
      <button>{"\u{1F50E}"}</button>
    </div>
  );
};

export default SearchBar;
