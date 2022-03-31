import React from 'react';
import SearchBar from 'material-ui-search-bar';

const Search = () => (
  <div className="searchbar">
    <SearchBar
      onRequestSearch={appStore.fetchBeers}
      placeholder="Add some food ..."
      autoFocus
    />
  </div>
);

export default Search;
