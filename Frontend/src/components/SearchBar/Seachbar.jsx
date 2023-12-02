import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.css';
import data from '../Product/datalist';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase();

   
    const filteredProducts = Object.values(data).reduce((accumulator, category) => {
      const matchingProducts = category.filter(product => product.name.toLowerCase().includes(lowercaseQuery));
      return [...accumulator, ...matchingProducts];
    }, []);

    setSearchResults(filteredProducts);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="search-results">
        {searchResults.map(product => (
          <div key={product.slug} className="search-result">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
