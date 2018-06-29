import React from 'react';

const SearchBar = () => {
  return(
    <div className="field">
      <p className="control has-icons-left">
        <input className="input" placeholder="Buscar..." />
        <span className="icon is-small is-left">
          <i className="fa fa-search"></i>
        </span>
      </p>
    </div>
  );
}

export default SearchBar;