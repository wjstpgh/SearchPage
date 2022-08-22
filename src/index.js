import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchBar from './searchBar';
import SearchResult from './searchResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <SearchBar/>
    <SearchResult/>
  </div>
);

reportWebVitals();
