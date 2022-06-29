import React from "react";

function Search({ onFilterChange }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={ (e) => onFilterChange(e.target.value) }/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
